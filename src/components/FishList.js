import React from "react";
import FishCard from "./FishCard";

function FishList({setFish, fish, search}) {
  return (
    <ul className="cards">{fish.filter(fish => fish.name.toLowerCase().includes(search.toLowerCase()))
      .map(fish => <FishCard 
      key={fish.id}
      fish={fish}
      setFish={setFish}
      />)}</ul>
  );
}

export default FishList;
