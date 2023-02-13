import React, { useEffect, useState } from "react";
import NewFishForm from "./NewFishForm";
import FishList from "./FishList";
import Search from "./Search";

function FishPage({fish, setFish}) {
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('https://www.fishwatch.gov/api/species')
    .then(resp => resp.json())
    .then(setFish)
  }, [])

  return (
    <main>
      <NewFishForm setFish={setFish} />
      <Search search={search} setSearch={setSearch}/>
      <FishList setFish={setFish} search={search} fish={fish}/>
    </main>
  );
}

export default FishPage;
