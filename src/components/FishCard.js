import React, { useState } from "react";
import {useHistory} from "react-router-dom";

function FishCard({setFishInfo, fish, setFish}) {
  
  let history = useHistory()
  function fishInfo(e){
    console.log(e.target)
    setFishInfo(fish)
    history.push('/info')

}

  return (
    <li className="card">
      <img src={fish["Species Illustration Photo"].src} alt={fish.name} 
       onClick = {fishInfo} ></img>
      <h4>{fish["Species Name"]}</h4>
      <br></br>
      <p><b>Availability</b>{fish.Availability}</p> 
    
    </li>
  );
}

export default FishCard;