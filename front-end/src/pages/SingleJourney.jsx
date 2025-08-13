import { useEffect } from "react";
import { useState } from "react";
import { supabase } from "../Client/client";
import { useParams } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./../css/SingleJourney.css";
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
        console.log(data);
      }
    };
    fetchAll();
  }, []);

  console.log(juorney);

  return (
    <>
      <main className="main_single ">
        <div className="container-fluid p-5 h-100">
          <div className="row">
            <div className="col">
              {juorney.map((item) => {
                return (
                  <div class="card border-0  mb-3" key={item.id}>
                    <div class="row g-0">
                      <div class="col-md-4">
                        <Swiper
                          navigation={true}
                          modules={[Navigation]}
                          className="mySwiper"
                        >
                          <SwiperSlide>
                            <img src={item.img} alt="" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src={item.img} alt="" />
                          </SwiperSlide>
                        </Swiper>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h2 className="card-title text-center fw-bold">
                            {item.luogo}
                          </h2>

                          <div className="card-text">
                            <div>
                              <h5 className="fw-bold">Considerazioni</h5>{" "}
                              <div>
                                <p>{item.riflessione_posi} </p>
                                <p>{item.riflessione_nega}</p>
                              </div>
                            </div>
                            <div>
                              <h6 className="fw-bold">
                                Altre info del viaggio
                              </h6>
                              <div>
                                <ul className="list-unstyled ">
                                  <li className="py-3  border-bottom">
                                    Spesa totale affrontata: {item.spesa}€
                                  </li>
                                  <li className="py-3  border-bottom">
                                    Effort economico: {item.effort_economico}
                                  </li>
                                  <li className="py-3  border-bottom">
                                    Impegno Fiscio: {item.impegno_fisico}
                                  </li>
                                </ul>{" "}
                              </div>
                            </div>
                            <div>
                              <span className="badge bg-primary">
                                {item.tags}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
