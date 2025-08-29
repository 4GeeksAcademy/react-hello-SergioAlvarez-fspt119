import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { tour } from "./Home";
import { motion, scale } from "motion/react";
import { Cards } from "./Cards";

// let tour = document.getElementById("tour")

const Card = () => {
  // logica JS

    AOS.init({ duration: 800, once: false });

 const dataCards = [
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
      link: "https://tailwindcss.com/",
    },
    {
      tittle: "Framer-Motion",
      description:
        "Da aún mas vida a la parte interactiva del documento, super fácil de instalar y de usar.",
        src: "src/img/framerMotionImg.jpg",
        flow: "fade-left",
        link: "https://motion.dev/docs",
    },
  ];

  return (

      <div
        className="container-fluid bg-body-secondary w-75 mt-1 rounded"
        id="cards"
      >
        <div className="row">
            {dataCards.map((value,index)=> {
              return(
                <Cards info={value} key={index}></Cards>
            )})}
              
        </div>
      </div>
          
  );
};
export default Card;
