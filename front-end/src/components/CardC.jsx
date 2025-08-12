import { useState } from "react";
import { Link } from "react-router-dom";

import "./../css/CardC.css";

export default function CardC(prop) {
  const [isEnter, setIsEnter] = useState(null);
  const [clicked, setClicked] = useState(null);

  return (
    <>
      <div key={prop.id_card} className="col">
        <div
          className="card h-100 text-bg-dark"
          onMouseEnter={() => setIsEnter(prop.id_card)}
          onMouseLeave={() => setIsEnter(null)}
        >
          <img
            src={prop.img}
            className="card-img object-fit-cover h-100"
            alt={prop.luogo}
          />
          <div
            className={`card-img-overlay ${
              isEnter === prop.id_card ? "enter" : ""
            }`}
          >
            <h5 className="card-title text-center fw-bold">{prop.luogo}</h5>
            <div className="d-flex justify-content-center">
              <button
                onClick={() => setClicked(prop.id_card)}
                className="btn btn-primary"
              >
                Espandi
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mostra overlay SOLO se è la card cliccata */}
      {clicked === prop.id_card && (
        <div className="overlay d-flex align-items-center justify-content-center">
          <div className="card text-bg-dark">
            <div className="image-container">
              <img
                src={prop.img}
                className="object-fit-cover w-100 h-100"
                alt={prop.luogo}
              />
            </div>

            {/* Contenitore contenuto */}
            <div className="content-container p-3 text-center">
              <h5 className="card-title fw-bold">{prop.luogo}</h5>
              <button
                onClick={() => setClicked(null)}
                className="btn  btn-primary mt-3"
              >
                Chiudi
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
