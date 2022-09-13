import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Update = (props) => {
    const { id } = useParams();
    const [productTitle, setProductTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setProductTitle(res.data.productTitle);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, []);

    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            productTitle,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }
    

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                navigate("/");
                
            })
            .catch(err => console.error(err));

    }


    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Product</label><br />
                    <input type="text"
                        name="productTitle"
                        value={productTitle}
                        onChange={(e) => { setProductTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="number"
                        name="price"
                        value={price}
                        onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text"
                        name="description"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
            <button onClick={(e) => { deleteProduct(id) }}>
                Delete
            </button>
        </div>
    )
}
export default Update;