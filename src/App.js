import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect} from 'react';
import YourBotArmy from './components/YourBotArmy'
import BotCollection from './components/BotCollection';



function App() {
  const [botData, setBotData] = useState([])
  console.log(botData)

  useEffect(() => {
    fetch('http://localhost:4000/bots')
    .then(res => res.json())
    .then((data) => {
      setBotData(data)
      console.log(botData)

    }
      
    )
  }, [])
  console.log(botData)
  

  return (
    <div className="App">

      <YourBotArmy/>
      <BotCollection 
      botData={botData}
      
      
      />
      
    </div>
  );
}

export default App;
