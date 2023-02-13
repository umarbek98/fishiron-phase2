import React, { useEffect, useState} from "react";
import Header from "./Header";
import FishPage from "./FishPage";
import { Route, Switch } from "react-router-dom";
import FishInfo from "./FishInfo"



function App() {
  const [fish, setFish] = useState([])

  return (
    <div className="app">
      <Header />
      <Switch>
      <Route path = "/info">
        <FishInfo/>
      </Route>
      <Route exact path = "/">
      <FishPage fish={fish} setFish={setFish}/>
      </Route>
      
      </Switch>

    </div>
  );
}

export default App;
