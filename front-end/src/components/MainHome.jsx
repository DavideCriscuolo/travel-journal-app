import { useEffect } from "react";
import { useState } from "react";
import { supabase } from "../Client/client";

import "./../css/MainHome.css";
import CardC from "./CardC";
export default function MainHome() {
  const [juorneys, setJuorneys] = useState([]);
  const [spesaT, setSpesaT] = useState(""); //variabile di stato per la ricerca per spesa
  const [juorneySerached, setJuorneySerached] = useState([]);
  const [tags, setTags] = useState([]);
  useEffect(() => {
    const fetchAll = async () => {
      const { data, error } = await supabase.from(`travel_journal`).select(`*`); //seleziona tutte le colonne della tabella travel_journal

      if (error) {
        console.log(error);
      } else {
        setJuorneys(data);
        console.log(data);
      }
    };
    fetchAll();
  }, []);

  const search = async (e) => {
    console.log(tags);
    console.log(spesaT);
    e.preventDefault();

    const { data, error } = await supabase
      .from(`travel_journal`)
      .select(`*`)
      .or(`tags.ilike.%${tags}%,spesa.eq.${spesaT}`);

    if (error) {
      console.log(error);
    } else {
      setJuorneySerached(data);
      console.log(tags);
    }
  };

  return (
    <>
      <main className="bg_main_home">
        <div className="container p-3 ">
          <h1 className="text-center text-white">
            I miei viaggi <span className="emoji bounce">🛩️</span>{" "}
          </h1>
          <div className="p-5">
            <h4 className="text-center text-white p-3">
              Cerca nei miei Viaggi
            </h4>
            <div className="d-flex justify-content-center">
              <form
                className="d-flex justify-content-between align-items-center gap-3"
                onSubmit={search}
                action=""
              >
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setTags(e.target.value)}
                  value={tags}
                  placeholder="Cerca per tags"
                  required
                />

                <input
                  type="number"
                  className="form-control"
                  onChange={(e) => setSpesaT(e.target.value.toString())}
                  value={spesaT}
                  placeholder="Cerca per spesa totale"
                  required
                />
                <button className="btn btn-primary" type="submit">
                  cerca
                </button>
              </form>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 p-5  g-3">
            {juorneySerached.map((item) => {
              return (
                <div>
                  <div>
                    <CardC
                      key={item.id}
                      id={item.id}
                      img={item.img}
                      luogo={item.luogo}
                    ></CardC>
                    <h4 className="py-2  text-white">{item.tags}</h4>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="row row-cols-1 row-cols-sm--2 row-cols-md-3 row-cols-lg-5 p-5  g-3">
            {juorneys.map((item) => {
              return (
                <CardC
                  key={item.id}
                  id={item.id}
                  img={item.img}
                  luogo={item.luogo}
                ></CardC>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
