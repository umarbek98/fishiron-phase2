import React from "react";




function FishInfo({fishInfo}) {

return(
 
  <div>
  <section id = "healthFacts">
 
   <h1>Health Facts</h1>
       <select name = "healthfacts" id="info">
        <p>Calories {fishInfo.Calories}</p>
         <p>Carbohydrate {fishInfo.Carbohydrate}</p>
         <p>Cholesterol{fishInfo.Cholesterol}</p>
         <p>Fat{fishInfo[`Fat, Total`]}</p>
         <p>Protein {fishInfo.Protein}</p>
         <p>Sodium {fishInfo.Sodium}</p>
         </select>
         
   </section> 
   {fishInfo.Biology || fishInfo.Habitat || fishInfo.Location ? <section id = "inTheWildFacts">
      <h1>In The Wild:</h1>
         <p>Habitat: {fishInfo.Habitat}</p>
         <p>Location {fishInfo.Location}</p>
         <p>Biology: {fishInfo.Biology}</p>
         <p>Physical Description: {fishInfo[`Physical Description`]}</p>
      
   </section> : null}
   <section id = "fishingFacts">
      <h1>Fishing Facts</h1>
         <p>WAIT: {fishInfo[`Population Status`]}</p>
         <p>Fishing Rate: {fishInfo[`Fishing Rate`]}</p>
         <p>Habitat Vulnurabilites: {fishInfo[`Habitat Impacts`]}</p>
         <p>Harvest Type: {fishInfo[`Harvest Type`]}</p>
       
      
   </section>
</div>
)

}

export default FishInfo;
