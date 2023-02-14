import React from "react";
import FishCard from "./FishList"
import { useParams } from "react-router-dom";


function FishInfo({fishInfo, setFish, fish, search}) {
// fetch(`http://localhost:6001/fish?Species%20Name)
// .then

return(
   <div>{fishInfo.Taste}</div>
)

}

export default FishInfo;