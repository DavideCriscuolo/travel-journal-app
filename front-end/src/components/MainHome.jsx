import { useEffect } from "react";
import { useState } from "react";
import { supabase } from "../Client/client";

import "./../css/MainHome.css";
import CardC from "./CardC";
export default function MainHome() {
  const [traverl, setTravel] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      const { data, error } = await supabase.from(`travel_journal`).select(`*`); //seleziona tutte le colonne della tabella travel_journal

      if (error) {
        console.log(error);
      } else {
        setTravel(data);
        console.log(data);
      }
    };
    fetchAll();
  }, []);

  return (
    <>
      <main className="bg_main_home">
        <div className="container ">
          <h1>Il mio Diario di Viaggio</h1>
          <div className="row row-cols-1 row-cols-sm--2 row-cols-md-3 row-cols-lg-5   g-3">
            {traverl.map((item) => {
              return (
                <CardC
                  key={item.id}
                  id={item.id}
                  id_card={item.id_card}
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
