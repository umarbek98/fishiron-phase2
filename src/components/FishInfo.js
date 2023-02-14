import React from "react";
import FishCard from "./FishList"
import { useParams } from "react-router-dom";


function FishInfo({fishInfo}) {

return(
   <div>
   <section id = "Health Facts">
      <h1>Health Facts:</h1>
         <p>Calories: {fishInfo.Calories}</p>
      
   </section>
</div>
)

}

export default FishInfo;
