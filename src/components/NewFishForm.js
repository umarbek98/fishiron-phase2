import React, { useState } from "react";
import uuid from "react-uuid";

function NewFishForm({setFish}) {
  const [formData, setFormData] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value });
  };

  function handleFishSubmit(e){
    e.preventDefault()
    const newFishData = {
      "id": uuid(),
      "Species Name": e.target.name.value,
      "Calories": e.target.calories.value,
      "Protein": e.target.protein.value,
      "Color": e.target.color.value,
      "Cholesterol": e.target.cholesterol.value,
      "Carbohydrate": e.target.carbohydrate.value,
      "Fat, Total": e.target.fat.value,
      "Sodium": e.target.sodium.value,
      "Population Status": e.target.population.target,
      "Fishing Rate": e.target.rate.value,
      "Habitat Impacts": e.target.impact.value,
      "Harvest Type": e.target.type.value,
      "Species Illustration Photo":{
        src: e.target.image.value
      }
    }

    fetch('http://localhost:6001/fish', {
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
        <input onChange={handleChange} value={formData.cholesterol} type="text"  name="cholesterol" placeholder="Fish Cholesterol" />
        <input onChange={handleChange} value={formData.carbohydrate} type="text"  name="carbohydrate" placeholder="Fish Carbohydrate" />
        <input onChange={handleChange} value={formData.fat} type="text"  name="fat" placeholder="Fish Total Fat" />
        <input onChange={handleChange} value={formData.sodium} type="text"  name="sodium" placeholder="Fish Soidium" />
        <input onChange={handleChange} value={formData.image} type="text"  name="image" placeholder="Image URL" />
        <h1>Fish Facts</h1> 
        <input onChange={handleChange} value={formData.population} type="text"  name="population" placeholder="Fish Population" />
        <input onChange={handleChange} value={formData.rate} type="text"  name="rate" placeholder="Fishing Rate" />
        <input onChange={handleChange} value={formData.impact} type="text"  name="impact" placeholder="Fish Impact" />
        <input onChange={handleChange} value={formData.type} type="text"  name="type" placeholder="Fish Type" />
        <button style={{backgroundColor: 'rgb(104, 240, 222)', color: 'black'}} type="submit">Add Fish</button>
      </form>
      {formData.name ? <h1>Name: {formData.name}</h1> : null}
      {formData.color ? <h2>Color: <b style={{color: `${formData.color}`}}>{formData.color}</b></h2> : null}
      {formData.calories ? <h2>Calories: {formData.calories}</h2>: null}
      {formData.protein ? <h2>Protien: {formData.protein} g</h2> : null }
      {formData.cholesterol ? <h2>Cholesterol: {formData.cholesterol} mg</h2>: null}
      {formData.carbohydrate ? <h2>Carbohydrate: {formData.carbohydrate} g</h2>: null}
      {formData.fat ? <h2>Fat: {formData.fat} g</h2> : null }
      {formData.sodium ? <h2>Sodium: {formData.sodium} mg</h2>: null}
      <img src={formData.image}/>
    </div>
  );
}

export default NewFishForm;
