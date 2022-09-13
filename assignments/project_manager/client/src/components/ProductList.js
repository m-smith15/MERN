import React from 'react'

const ProductList = (props) => {
    return (
        <div>
            {props.product.map( (product, i) => 
                <p key={i}>{product.productTitle}</p>
            )}
        </div>
    )
}

export default ProductList;