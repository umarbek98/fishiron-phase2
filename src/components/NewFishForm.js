import React from "react";

function NewFishForm({setFish}) {

  function handleFishSubmit(e){
    e.preventDefault()
    const newFishData = {
      name: e.target.name.value,
      image: e.target.image.value,
      price: e.target.price.value
    }

    fetch('http://localhost:6000/fish', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newFishData)
    })
    .then(resp => resp.json())
    .catch(error => console.log(error))

    setFish(prevValue => [...prevValue, newFishData])
  }
  return (
    <div className="new-fish-form">
      <h2>New Fish</h2>
      <form onSubmit={handleFishSubmit}>
        <input type="text" name="name" placeholder="Fish name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button style={{backgroundColor: 'rgb(104, 240, 222)', color: 'black'}} type="submit">Add Fish</button>
      </form>
    </div>
  );
}

export default NewFishForm;
