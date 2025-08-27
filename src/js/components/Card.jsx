import React from 'react'

export const Card = () => {
    // logica JS

    const information = [

        {
            tittle: "Esto es un titulo",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, odio?"
        },
        {
            tittle: "Este es el segundo titulo",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, odio?"
        },
        {
            tittle: "Tengo que pensar en hacer algo mas chulo",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, odio?"
        },
        {
            tittle: "Pero primero el codigo",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, odio?"
        },

    ]



    return (

        <>
        <div className='container-fluid bg-body-secondary w-75 mt-1 rounded'>

        <div className='row'>

            {information.map((value, index, array) => {

                return value =

                        <div className='col-12'>

                            <div className="card" style={{ width: "18rem" }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{information[index].tittle}</h5>
                                    <p className="card-text">{information[index].description}</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>

            })
            }

        </div>
        </div>

        </>
    )
}
export default Card;