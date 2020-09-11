import React from "react";
import "./Product.css";


const Product = ({ data }) => {
  return (
    <div className="product">
        {console.log('FROM PRODUCT: ', data)}
        {console.log('and the title is: ', data.title)}
      <div className="product__info">
        <p className="product__title">{data.title}</p>
        <p className="product__price">
            <small>$</small>
            <strong>{data.price}</strong>
        </p>
        <div className="product__rating">
            {/* 4.5 stars */}
            <span role="img" aria-label="star">⭐</span>
            <span role="img" aria-label="star">⭐</span>
            <span role="img" aria-label="star">⭐</span>
            <span role="img" aria-label="star">⭐</span>
        </div>
      </div>
      <img alt={`${data.title} product cover`} src={data.image} />
      <button className="product__addToCart">add to cart</button>
    </div>
  );
};

export default Product;
