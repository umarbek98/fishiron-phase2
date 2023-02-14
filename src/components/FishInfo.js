import React from "react";
import FishCard from "./FishList"
import { useParams } from "react-router-dom";


function FishInfo({fishInfo}) {


return(
   <div>{fishInfo.Taste}</div>
)

}

export default FishInfo;