import { useState } from "react";
import { Link } from "react-router-dom";
import "./../css/CardC.css";

export default function CardC(prop) {
  const [isEnter, setIsenter] = useState(null);

  return (
    <>
      <div key={prop.id_card} className="col">
        <div
          className="card h-100 text-bg-dark"
          onMouseEnter={() => setIsenter(prop.id)}
          onMouseLeave={() => setIsenter(null)}
        >
          <img
            src={prop.img}
            className="card-img object-fit-cover h-100 "
            alt="..."
          />
          <div className={`card-img-overlay ${isEnter === prop.id && "enter"}`}>
            <h5 className="card-title">{prop.luogo}</h5>
            <Link to={`/dettagli/${prop.id}`}>Vai al Viaggio</Link>
          </div>
        </div>
      </div>
    </>
  );
}
