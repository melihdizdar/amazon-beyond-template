import React from 'react'
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Product(props) {
    const {product} = props;
    return (
        <div className="uk-card uk-width-medium" key={product._id}>
            <div class="uk-card-media-top uk-height-medium uk-width-medium">
                <Link to={`/product/${product._id}`}><img src={product.image} alt="product" className="uk-height-1-1 uk-width-1-1"/></Link>
            </div>
            <div className="uk-padding-small">
                <Link to={`/product/${product._id}`}><h3 className="uk-text-muted uk-text-bold uk-text-default uk-margin-remove">{product.name}</h3></Link>
                <div className="uk-margin-small uk-margin-remove-horizontal"><Rating value={product.rating} text={product.numReviews + ' reviews'} /></div>
                <div><h4 className="uk-text-muted">${product.price}</h4></div>
            </div>
        </div>
    )
}