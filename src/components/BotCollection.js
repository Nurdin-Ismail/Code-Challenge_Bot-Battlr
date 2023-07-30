import React,{useState, useEffect} from "react";
import Card from "./Card";

function BotCollection({botData}){
    const cards = botData.map((bot) => {
        return <Card 
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
        <div className="main">

            <main  className="collectionArea">
                {cards}
            </main>
            
                
            

            



        </div>
    )
}

export default BotCollection;