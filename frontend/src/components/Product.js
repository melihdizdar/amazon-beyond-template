import React from 'react'
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Product(props) {
    const {product} = props;
    return (
        <div className="card" key={product._id}>
            <Link><img src={product.image} className="card__img" alt="product"/></Link>
            <div className="card__body">
                <Link to={`/product/${product._id}`}><h2 className="card__title">{product.name}</h2></Link>
                <span><Rating rating={product.rating} numReviews={product.numReviews}/></span>
                <span><h3 className="card__price">${product.price}</h3></span>
                <span><Link to={`/seller/${product.seller._id}`}>{product.seller.seller.name}</Link></span>
            </div>
        </div>
    )
}
