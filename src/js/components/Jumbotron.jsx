import React from 'react'
import {tour} from "./Home"

export const Jumbotron = () => {
    return (
        <>
            <div className='container-fluid bg-body-secondary w-75 mt-1 p-1' id='jumbotron'>
                <div className='text-center'>
                    <h1 className='p-3'  id='tittle'>¡Bienvenid@!</h1>
                </div>
                <div className='text-center d-grid gap-3' >
                    <h4>Es típico en mi hacer las cosas feas pero útiles, pero esta es la excepción.</h4>
                    <p>Esta es una web hecha con librerías JS que nombro en las Cards, útil para llenar de florituras tu primera landing page con React.</p>
                    <p id='apruebame'>Patricia, apruebame el proyecto :p</p>
                </div>
                <div className='d-flex align-items-center justify-content-center m-3'>
                    <a href='https://getbootstrap.com/'><button type="button" className="btn btn-primary mb-3 me-1" id='documentacionBS'>Este botón te lleva a Bootstrap</button></a>
                    <button className="btn btn-primary mb-3" onClick={tour} id='rutaGuiada'>Probar DriverJS</button>
                </div>

            </div>
        </>

    )
}

export default Jumbotron