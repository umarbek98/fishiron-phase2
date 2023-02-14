import React from "react";
import FishCard from "./FishList"
import { useParams } from "react-router-dom";


function FishInfo({fishInfo}) {

return(
   <div>
   <section id = "healthFacts">
      <h1>Health Facts:</h1>
         <p>Calories: {fishInfo.Calories}</p>
         <p>Carbohydrate: {fishInfo.Carbohydrate}</p>
         <p>Cholesterol: {fishInfo.Cholesterol}</p>
         <p>Fat: {fishInfo.[`Fat, Total`]}</p>
         <p>Protein: {fishInfo.Protein}</p>
         <p>Sodium: {fishInfo.Sodium}</p>
      
   </section>
   <section id = "inTheWildFacts">
      <h1>In The Wild:</h1>
         <p>Habitat: {fishInfo.Habitat}</p>
         <p>Location {fishInfo.Location}</p>
         <p>Biology: {fishInfo.Biology}</p>
         <p>Fat: {fishInfo.[`Fat, Total`]}</p>
         <p>Physical Description: {fishInfo.[`Physical Description`]}</p>
      
   </section>
   <section id = "fishingFacts">
      <h1>Fishing Facts</h1>
         <p>WAIT: {fishInfo.[`Population Status`]}</p>
         <p>Fishing Rate: {fishInfo.[`Fishing Rate`]}</p>
         <p>Habitat Vulnurabilites: {fishInfo.[`Habitat Impacts`]}</p>
         <p>Harvest Type: {fishInfo.[`Harvest Type`]}</p>
       
      
   </section>
</div>
)

}

export default FishInfo;
