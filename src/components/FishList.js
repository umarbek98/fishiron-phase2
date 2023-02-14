import React from "react";
import FishCard from "./FishCard";


function FishList({setFishInfo, setFish, fish, search}) {
  return (
   <div>
    <ul className="cards">{fish.filter(fish => fish["Species Name"].toLowerCase().includes(search.toLowerCase()))
      .map(fish => <FishCard 
      key={fish.id}
      fish={fish}
      setFish={setFish}
      setFishInfo={setFishInfo}

      />)}</ul>
      </div>
  );
}

export default FishList;