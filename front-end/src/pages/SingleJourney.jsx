import { useEffect } from "react";
import { useState } from "react";
import { supabase } from "../Client/client";
import { useParams } from "react-router";

export default function SingleJourney() {
  const [juorney, setJuorney] = useState([]);

  const id_param = useParams().id;

  useEffect(() => {
    const fetchAll = async () => {
      const { data, error } = await supabase
        .from(`travel_journal`)
        .select(`*`)
        .eq(`id`, id_param); //seleziona tutte le colonne della tabella travel_journal

      if (error) {
        console.log(data);
        console.log(error);
      } else {
        setJuorney(data);
      }
    };
    fetchAll();
  }, []);

  console.log(juorney);
  return (
    <>
      <main>
        <div className="container">
          <h1>SingleJourney</h1>
        </div>
      </main>
    </>
  );
}
