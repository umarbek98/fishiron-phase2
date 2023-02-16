import React from "react";


function FishInfo({fishInfo}) {

return(
   <div>
      <img className="infoImg" src={fishInfo["Species Illustration Photo"].src} alt={fishInfo.name} 
        ></img>
      <div className="infoContainer">
         <section id = "healthFacts">
            <h1>Health Facts:</h1>
               <p><b>Calories:</b> {fishInfo.Calories}</p>
               <br/>
               <p><b>Carbohydrate:</b> {fishInfo.Carbohydrate}</p>
               <br/>
               <p><b>Cholesterol:</b> {fishInfo.Cholesterol}</p>
               <br/>
               <p><b>Fat:</b> {fishInfo[`Fat, Total`]}</p>
               <br/>
               <p><b>Protein:</b> {fishInfo.Protein}</p>
               <br/>
               <p><b>Sodium:</b> {fishInfo.Sodium}</p>
            
         </section>
         {fishInfo.Biology || fishInfo.Habitat || fishInfo.Location ? <section id = "inTheWildFacts">
            <h1>In The Wild:</h1>
               <p><b>Habitat:</b> {fishInfo.Habitat}</p>
               <br/>
               <p><b>Location:</b> {fishInfo.Location}</p>
               <br/>
               <p><b>Biology:</b> {fishInfo.Biology}</p>
               <br/>
               <p><b>Physical Description:</b> {fishInfo[`Physical Description`]}</p>
            
         </section> : null}
         <section id = "fishingFacts">
            <h1>Fishing Facts</h1>
               <p><b>WAIT:</b> {fishInfo[`Population Status`]}</p>
               <br/>
               <p><b>Fishing Rate:</b> {fishInfo[`Fishing Rate`]}</p>
               <br/>
               <p><b>Habitat Vulnurabilites:</b> {fishInfo[`Habitat Impacts`]}</p>
               <br/>
               <p><b>Harvest Type:</b> {fishInfo[`Harvest Type`]}</p>
            
            
         </section>
      </div>
</div>
)

}

export default FishInfo;
