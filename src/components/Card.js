import React from "react";


function Card({id, name, catchphrase, health, damage, armour, image, botClass}){
    return(
        <div className="card">
            <div className="imeji">
                <img src={image} alt="Robot Image" />

            </div>

            <div className="name-section">
                <ul>
                    <li>{name}</li>
                    <li>{botClass}</li>
                </ul>
                


            </div>
            <div className="catchphrase">
                <p>{catchphrase}</p>

            </div>

            <div className="stats">
                <ul>
                    <li>{health}</li>
                    <li>{damage}</li>
                    <li>{armour}</li>
                </ul>


            </div>

        </div>
    )
}

export default Card;