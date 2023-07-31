import React from "react";
import heart from '../img/heart.png';
import shield from '../img/shield.png';
import thunder from '../img/thunder.png';



function Card({id, name, catchphrase, health, damage, armour, image, botClass, enlist, bot}){
    return(
        <div className="card" onClick={() => enlist(bot)}>
            <div className="imeji">
                <img src={image} alt="Robot Image"  />

            </div>
            <br />
            

            <div className="name-section">
                
                    {name + '   '   }
                    
                    {botClass}
                
                 


            </div>
            <div className="catchphrase">
                <p>{catchphrase}</p>
                

            </div>

            <div >
                <ul className="stats">
                    
                    <li>
                        <img src={heart} alt="" />
                        {health}
                        </li>
                    <li>
                    <img src={thunder} alt="" />
                        {damage}</li>
                    <li>
                    <img src={shield} alt="" />
                        {armour}
                        </li>
                </ul>


            </div>

        </div>
    )
}

export default Card;