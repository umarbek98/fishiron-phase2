import React, { useEffect, useState } from "react";
import NewFishForm from "./NewFishForm";
import FishList from "./FishList";
import Search from "./Search";

function FishPage({fish, setFish}) {
  const [search, setSearch] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch('http://localhost:6001/fish')
    .then(resp => resp.json())
    .then(setFish)
    .then(setIsLoaded(true))
  }, [])

 if(!isLoaded){
  return <h1>Loading...</h1>
 }


  return (
    <main>
      <Search search={search} setSearch={setSearch}/>
      <FishList setFish={setFish} search={search} fish={fish}/>
    </main>
  );
}

export default FishPage;
