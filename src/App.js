import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect} from 'react';
import YourBotArmy from './components/YourBotArmy'
import BotCollection from './components/BotCollection';



function App() {
  const [botData, setBotData] = useState([])
  const [enlisted, setEnlisted] = useState([])
  const [unfiltered, setUnfiltered] = useState([])
  console.log(enlisted)
  console.log(unfiltered)

  
  // console.log(botData)

  useEffect(() => {
    fetch('https://db-battleofthebots.onrender.com/bots')
    .then(res => res.json()) 
    .then((data) => {
      setBotData(data)
      console.log(data)

    }
      
    )
  }, [])
  // console.log(botData)

  function handleEnlist(bot){
    console.log(bot)
    const copy = [...unfiltered, bot]
    setUnfiltered(copy)

    const inNeedOfFiltering = [...unfiltered]

    const filtered = inNeedOfFiltering.filter(
      (obj, index) =>
        inNeedOfFiltering.findIndex(
          (item) => item.location === obj.location && item.id === obj.id
        ) === index
    )
    const filteredof = inNeedOfFiltering.filter(
      (obj, index) =>
        inNeedOfFiltering.findIndex(
          (item) => item.bot_class === obj.bot_class
        ) === index
    )

    
    console.log(filtered)

    setEnlisted(filteredof)
    console.log(filtered)
  }
  
  function handleRetract(bot){



    const removebot = [...unfiltered]
    const removefromstate = [...enlisted]

    const retractBot = removebot.filter((botcard) => botcard.id !== bot.id)
    console.log(retractBot)


    setUnfiltered(retractBot)

    const retractBot2 = removefromstate.filter((botcard) => botcard.id !== bot.id)
    console.log(retractBot2)
    setEnlisted(retractBot2)


 
  }

  function handleDelete(bot){
    fetch(`https://bot-json.onrender.com/bots/${bot.id}`, {
    method: "DELETE",
  })
    .then((r) => r.json())
    .then(() => handleDeleteBot(bot));

  }

  function handleDeleteBot(deletedbot) {
    const updatedItems = botData.filter((bot) => bot.id !== deletedbot.id);
    setBotData(updatedItems);
  }
    
  return (
    <div className="App">

      <YourBotArmy enlisted={enlisted} 
      unfiltered={unfiltered} 
      setUnfiltered={setUnfiltered}
      retract={handleRetract}
      deleto={handleDelete}
      />
      <h1 className='enlist-heading'>Double-Click To Enlist</h1>
      <BotCollection 
      botData={botData}

      enlist={handleEnlist}

      
      />
      
    </div>
  );
}

export default App;
