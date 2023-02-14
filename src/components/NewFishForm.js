import React, { useState } from "react";
import FishCard from "./FishCard";
function NewFishForm({setFish}) {
  const [formData, setFormData] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value });
  };

  function handleFishSubmit(e){
    e.preventDefault()
    const newFishData = {
      "Species Name": e.target.name.value,
      "Calories": e.target.calories.value,
      "Protein": e.target.protein.value,
      "Color": e.target.color.value,
      "Species Illustration Photo":{
        src: e.target.image.value
      }
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
      <h2>New Fish Info</h2>
      <form onSubmit={handleFishSubmit}>
        <input onChange={handleChange} value={formData.name} type="text"  name="name" placeholder="Fish Name" />
        <input onChange={handleChange} value={formData.color} type="text"  name="color" placeholder="Fish Color" />
        <input onChange={handleChange} value={formData.calories} type="text"  name="calories" placeholder="Fish Calories" />
        <input onChange={handleChange} value={formData.protein} type="text"  name="protein" placeholder="Fish Protein" />
        <input onChange={handleChange} value={formData.image} type="text"  name="image" placeholder="Image URL" />
        <button style={{backgroundColor: 'rgb(104, 240, 222)', color: 'black'}} type="submit">Add Fish</button>
      </form>
      {formData.name ? <h1>Name: {formData.name}</h1> : null}
      {formData.color ? <h2>Color: <b style={{color: `${formData.color}`}}>{formData.color}</b></h2> : null}
      {formData.calories ? <h2>Calories: {formData.calories}</h2>: null}
      {formData.protein ? <h2>Protien: {formData.protein}</h2> : null }
      <img src={formData.image}/>
    </div>
  );
}

export default NewFishForm;
