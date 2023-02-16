import React, { useState } from "react";
import Header from "./Header";
import FishPage from "./FishPage";
import { Route, Switch } from "react-router-dom";
import FishInfo from "./FishInfo"
import FishCard from "./FishCard"
import NewFishForm from "./NewFishForm";



function App() {
  const [fish, setFish] = useState([])
  const [fishInfo, setFishInfo] = useState({})
  const [showForm, setShowForm] = useState([true])

  return (
    <div className="app">
      <Header />
      <Switch>
      <Route path = "/info">
        <FishInfo fishInfo={fishInfo}/>
      </Route>
      <Route path = "/newfishfrom">
      <NewFishForm setFish={setFish} />
      </Route>
      <Route exact path = "/">
      <FishPage setFishInfo={setFishInfo} fish={fish} setFish={setFish}/>
      </Route>
      <FishCard></FishCard>

      </Switch>

    </div>
  );
}

export default App;
