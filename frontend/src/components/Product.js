import React from 'react'
import { Link } from 'react-router-dom';
import Rating from './Rating';
import "../screens/Styles/Home/home.css";

export default function Product(props) {
    const {product} = props;
    return (
        <div className="ProductsListCard" key={product._id}>
            <div className="imageStage">
                <Link><img src={product.image} alt="product"/></Link>
                <div className="topleft"><Link to={`/seller/${product.seller._id}`}>{product.seller.seller.name}</Link></div>
            </div>
            <Link to={`/product/${product._id}`}><h1>{product.name}</h1></Link>
            <span><Rating rating={product.rating} numReviews={product.numReviews}/></span>
            <span><h3 className="card__price">${product.price}</h3></span>
        </div>
    )
}