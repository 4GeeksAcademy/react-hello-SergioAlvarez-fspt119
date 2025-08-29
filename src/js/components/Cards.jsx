import React from "react";
import { hslaToRgba, motion, scale } from "motion/react";

export const Cards = ({info}) => {




    const [var1, var2] = ["hola", "adios"]

    const {academy, cohort} = {academy: "4Geeks", cohort: "fspt119"}


    
  return (
    <div
      data-aos={info.flow}
      className=" mt-2 text-center d-flex col-sm-6 col-md-6 col-lg-3"
    >
      <div className="card mb-2" style={{ width: "auto" }}>
        <img
          src={info.src}
          className="card-img-top  mx-auto object-fit-cover"
          alt="..."
          style={{ height: "15rem" }}
        />

        <div
          className="card-body d-flex flex-column justify-content-between p-2 pb-3"
          style={{ height: "20rem" }}
        >
          <h5 className="card-title">{info.tittle}</h5>

          <p className="card-text">{info.description}</p>
          <div className="d-flex justify-content-center align-items-center">
            <a href={info.link} className="btn btn-primary">
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="btn bg-transparent"
              >
                Ir a la documentación
              </motion.button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
