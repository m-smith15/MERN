import React from 'react'

const ProductList = (props) => {
    return (
        <div>
            {props.product.map( (product, i) => 
                <p key={i}>{product.productTitle}
                <br/>{product.price}
                <br/>{product.description}
                <br /> {product.id}</p>
            )}
        </div>
    )
}

export default ProductList;