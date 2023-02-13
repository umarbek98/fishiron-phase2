import React, { useEffect, useState} from "react";
import Header from "./Header";
import FishPage from "./FishPage";
import { Route, Switch } from "react-router-dom";
import FishInfo from "./FishInfo"
import NewFishForm from "./NewFishForm";


function App() {
  const [fish, setFish] = useState([])

  return (
    <div className="app">
      <Header />
      <Switch>
      <Route path = "/info">
        <FishInfo/>
      </Route>
      <Route path = "/newfishfrom">
      <NewFishForm setFish={setFish} />
      </Route>
      <Route exact path = "/">
      <FishPage fish={fish} setFish={setFish}/>
      </Route>
      
      </Switch>

    </div>
  );
}

export default App;
