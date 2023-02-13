import React, { useState } from "react";

function FishCard({fish, setFish}) {
  const [inStock, setInStock] = useState(true)
  const [isEdit, setIsEdit] = useState(false)

  function handleStockClick(e){
    setInStock(prevValue => !prevValue)
  }

  function handleEdit(e){
    setIsEdit(prevValue => !prevValue)
  }

  function handleChangeSubmit(e) {
    e.preventDefault()
    const newPrice ={
      price: parseInt(e.target.price.value) 
    }
    fetch(`http://localhost:6001/plants/${fish.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newPrice)
    })
    .then(resp => resp.json())
    .catch(error => console.log(error))
    setFish(prev => prev.map(item => {
      if(item.id === fish.id){
        return {...item, price: newPrice.price}
      }else {
        return item
      }
    }))
    setIsEdit(prev => !prev)
  }

  function handleDelete(e) {
    fetch(`http://localhost:6001/plants/${fish.id}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .catch(error => console.log(error))

    setFish(prevValue => prevValue.filter(item => item !==fish))
  }

  return (
    <li className="card">
      <img src={fish.image} alt={fish.name} />
      <h4>{fish.name}</h4>
      <p>Price: {fish.price}</p>
    {isEdit  ? (
      <form onSubmit={handleChangeSubmit}>
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button style={{backgroundColor: 'lightgreen'}}type="submit">Apply Change</button>
      </form>
    ) : (
      null
    )}
      {inStock ? (
        <button onClick={handleStockClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleStockClick}>Out of Stock</button>
      )}
      <button onClick={handleDelete} style={{marginLeft: '5px'}} className="primary">Delete</button>
      <button onClick={handleEdit} style={{marginLeft: '1px'}} className="primary">{isEdit ? 'Cancel' : 'Edit Price'}</button>
    </li>
  );
}

export default FishCard;
