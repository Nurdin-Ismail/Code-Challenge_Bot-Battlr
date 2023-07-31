import React,{useState, useEffect} from "react";
import EnlistedCard from "./EnlistedCard";

function YourBotArmy({enlisted, unfiltered, setUnfiltered}){
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
        
        />
    })
    
    return (
        <div className="enlistArea">
            {army}

        </div>
    )
}

export default YourBotArmy;