import React from 'react'



import {tour} from "./Home"


export const Navbar = () => {
  return (
<>
    <nav className="navbar navbar-expand-lg bg-body-secondary">
  <div className="container-fluid">
    <div className=" d-flex  justify-content-between  w-100">

    
    <a className="navbar-brand" href="#">Navbar</a>
    <a href=""><img src='src/img/sergioFirma.png' style={{width: "3rem", height:"3rem"}}></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span><i class="fa-solid fa-burger"></i></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="main.jsx">Inicio</a>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={tour} id='rutaGuiada' >Tour DriverJS</button>
        </li>
      </ul>
    </div>

    </div>
  </div>
</nav>
    
</>
    
  )
}

export default Navbar