import { useEffect } from "react";
import { useState } from "react";
import { supabase } from "../Client/client";
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
      {traverl.map((item) => {
        return <h1>{item.luogo}</h1>;
      })}
    </>
  );
}
