import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { tour } from "./Home";



// let tour = document.getElementById("tour")


export const Card = () => {
  // logica JS



  const information = [
    {
      tittle: "DriverJS",
      description:
        "Sirve para hacer una ruta guiada al usuario a modo de tutorial, resaltando partes de interes en la web app. ",
      src: "src/img/DriverJsFoto.png",
      flow: "fade-right",
      link: "https://driverjs.com/",
      
      
    },
    {
      tittle: "AosJs",
      description:
        "Añade efectos que ayudan a que tu página se vea con mas movimiento.",
      src: "src/img/AosJsDriver.jpg",
      flow: "flip-left",
      link: "https://michalsnik.github.io/aos/",
    },
    {
      tittle: "Tailwind",
      description:
        "Aunque parece que Boostrap y Tailwind no se llevan bien en un mismo proyecto, igualmente, me parece una muy buena herramienta.",
      src: "src/img/tailwind.png",
      flow: "zoom-in",
      link: "https://tailwindcss.com/"
    },
    {
      tittle: "Pero primero el codigo",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, odio?",
      src: "",
      flow: "fade-left",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, information);







  return (
    <>
      <div className="container-fluid bg-body-secondary w-75 mt-1 rounded" id="cards">
        <div className="row">
          {information.map((value, index, array) => {
            return (value = (
              <div
                data-aos={information[index].flow}
                className=" mt-2 text-center d-flex justify-content-center align-items-center col-sm-6 col-md-6 col-lg-4 "
              >
                <div className="card mb-2  " style={{ width: "12rem" }}>
                  <img
                    src={information[index].src}
                    className="card-img-top  mx-auto object-fit-cover"
                    alt="..."
                    style={{ height: "8rem" }}
                  />

                  <div className="card-body d-flex flex-column justify-content-evenly p-2" style={{ height: "20rem" }}>
                    <h5 className="card-title">{information[index].tittle}</h5>
                    
                    <p className="card-text">
                      {information[index].description}
                    </p>
                    <div className="">

                      <a
                      href={information[index].link}
                      className="btn btn-primary"
                      
                    >
                      Ir a la documentación

                    </a>
                    </div>
                    

                  </div>
                </div>
              </div>
            ));
          })}
        </div>
      </div>
    </>
  );
};
export default Card;
