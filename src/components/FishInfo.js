import React from "react";
import FishCard from "./FishList"
import { useParams } from "react-router-dom";


function FishInfo({fishInfo, setFish, fish, search}) {
/* display these json keys in these sections: 
- Health Facts Section: calories, carbohydrate, cholesterol, fat, protein, sodium //
- "In the Wild" Facts Section: habitat, location, biology, physical description //
- Fishing Facts Section: population status, fishing rate, habitat impact, harvest type 

*/
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
