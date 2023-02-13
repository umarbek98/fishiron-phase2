import React, { useState } from "react";

function FishCard({fish, setFish}) {
  return (
    <li className="card">
      <img src={fish["Species Illustration Photo"].src} alt={fish.name} />
      <h4>{fish["Species Name"]}</h4>
      <br></br>
      <p><b>Availability</b>{fish.Availability}</p> 
    </li>
  );
}

export default FishCard;
