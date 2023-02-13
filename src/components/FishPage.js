import React, { useEffect, useState } from "react";
import NewFishForm from "./NewFishForm";
import FishList from "./FishList";
import Search from "./Search";

function FishPage() {
  const [fish, setFish] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/plants')
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
