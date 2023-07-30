import React from "react";


function Card({id, name, catchphrase, health, damage, armour, image, botClass}){
    return(
        <div className="card">
            <div className="imeji">
                <img src={image} alt="Robot Image" />

            </div>
            <br />
            

            <div className="name-section">
                
                    {name + '   '   }
                    
                    {botClass}
                
                 


            </div>
            <div className="catchphrase">
                <p>{catchphrase}</p>
                <ul className="stats">
                    <li>{health}</li>
                    <li>{damage}</li>
                    <li>{armour}</li>
                </ul>

            </div>

            <div >
                


            </div>

        </div>
    )
}

export default Card;