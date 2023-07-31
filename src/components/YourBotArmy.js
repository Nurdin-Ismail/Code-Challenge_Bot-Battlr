import React,{useState, useEffect} from "react";
import EnlistedCard from "./EnlistedCard";

function YourBotArmy({enlisted, unfiltered, setUnfiltered, retract, deleto}){
    const army = enlisted.map((bot) => {
        return <EnlistedCard 
        bot={bot}
        key={bot.id} 
        id={bot.id} 
        name={bot.name} 
        catchphrase={bot.catchphrase} 
        health={bot.health} 
        damage={bot.damage}
        armour={bot.armor}
        image={bot.avatar_url}
        botClass={bot.bot_class}
        retract={retract}
        deleto={deleto}
        
        />
    })
    
    return (
        <div >
           <div >
            <h1 className="enlisted-heading">{army === []? 'Your Army:' : 'Choose One from Each Class'}
            </h1>
           </div>
           <div className="enlistArea">
            {army}

           </div>
            

        </div>
    )
}

export default YourBotArmy;