import React, { useEffect, useState} from "react";
import Header from "./Header";
import FishPage from "./FishPage";
import { Route, Switch } from "react-router-dom";
import FishInfo from "./FishInfo"
import FishCard from "./FishCard"



function App() {
  const [fish, setFish] = useState([])
  const [fishInfo, setFishInfo] = useState({})
  /* const [i, setFishInfo] = useState([data[i]])
  function handleClick () {
    setFishInfo(data[i])
  }
*/
  return (
    <div className="app">
      <Header />
      <Switch>
      <Route path = "/info/:name">
        <FishInfo fishInfo={fishInfo}/>
      </Route>
      <Route exact path = "/">
      <FishPage setFishInfo={setFishInfo} fish={fish} setFish={setFish} fishInfo ={fishInfo}/>
      </Route>
      <FishCard></FishCard>

      </Switch>

    </div>
  );
}

export default App;
