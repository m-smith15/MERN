import React, { useState } from 'react';
import axios from 'axios';

export default () => {
    const [productTitle, setProductTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    //prevent default to stop page from reloading
    //make post request to create api in 
    const formSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            productTitle,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

    //need a form submission handler
    //also need onChange handlers for values in input fields - set__
    return (
        <form onSubmit={ formSubmitHandler }>  
            <div>
                <label>Title</label>
                <input type="text" onChange={(e)=>setProductTitle(e.target.value)} value={productTitle} />
            </div>
            <div>
                <label>Price</label>
                <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price} />
            </div>
            <div>
                <label>Description</label>
                <input type="text" onChange={(e)=>setDescription(e.target.description)} value={description} />
            </div>
            <button type="submit">Send it!</button>
        </form>
    )
}