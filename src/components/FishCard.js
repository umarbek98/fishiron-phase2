import React, { useState } from "react";
import {useHistory} from "react-router-dom";

function FishCard({setFishInfo, fish, setFish}) {
  
  const [showInfo, setShowInfo] = useState({})


  let history = useHistory()
  // let newArr = {}
  function fishInfo(e){
  history.push('/info')
  console.log(e.target)
  fetch(`http://localhost:6001/fish/`)
  .then(response => response.json())
  .then(data => {
    for(let i=0; i < data.length; i++) {
       if(data[i]["Species Illustration Photo"].src === e.target.src){
        setFishInfo(data[i])
        console.log(data[i])
       }
       else{
        console.log("doesn't work")
       }
    }
  }
    
  )
}
// console.log(newArr)
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

//I want to 