import React,{usestate} from "react";

function EnlistedCard({id, name, catchphrase, health, damage, armour, image, botClass, bot}){
    return(
        <div className="card" onClick={() => console.log(bot)}>
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

export default EnlistedCard;