import { useState } from "react";
import { Link } from "react-router-dom";

import "./../css/CardC.css";

export default function CardC(prop) {
  const [isEnter, setIsEnter] = useState(null);

  return (
    <>
      <div key={prop.id} className="col">
        <div
          className="card h-100 text-bg-dark"
          onMouseEnter={() => setIsEnter(prop.id)}
          onMouseLeave={() => setIsEnter(null)}
        >
          <img
            src={prop.img}
            className="card-img object-fit-cover h-100"
            alt={prop.luogo}
          />
          <div
            className={`card-img-overlay ${isEnter === prop.id ? "enter" : ""}`}
          >
            <h5 className="card-title text-center fw-bold">{prop.luogo}</h5>
            <div className="d-flex justify-content-center">
              <Link
                className="btn btn-outline-light"
                to={`/details/${prop.id}`}
              >
                Vai al Viaggio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
