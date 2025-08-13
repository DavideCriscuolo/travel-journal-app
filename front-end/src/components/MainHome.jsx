import { useEffect } from "react";
import { useState } from "react";
import { supabase } from "../Client/client";

import "./../css/MainHome.css";
import CardC from "./CardC";
export default function MainHome() {
  const [juorneys, setJuorneys] = useState([]);

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

  return (
    <>
      <main className="bg_main_home">
        <div className="container p-3 ">
          <h1 className="text-center text-white">
            I miei viaggi <span className="emoji bounce">🛩️</span>{" "}
          </h1>
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
