import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ProductList = (props) => {

    const { removeFromDom } = props;
    const deleteProduct= (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            {props.product.map((product, i) =>
                <p key={i}>
                    <Link to={"/product/" + product._id + "/edit"}>
                        {product.productTitle} | {product._id}
                    </Link>
                    <br />{product.price}
                    <br />{product.description}
                    <br /><button onClick={(e) => { deleteProduct(product._id) }}>
                        Delete
                    </button>
                </p>
            )}
        </div>
    )
}

export default ProductList;