import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cardActions';
import MessageBox from '../components/MessageBox';
import "../screens/Styles/Cart/cart.css";

export default function CartScreen(props) {
    /*Kullanılacak değerlerin tanımlandığı yer.*/
    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;
    const cart = useSelector((state) => state.cart);
    //const { cartItems } = cart;
    const { cartItems, error } = cart; //Force order items from one seller
    const dispatch = useDispatch();
    useEffect(() =>{
        if(productId){
            dispatch(addToCart(productId,qty));
        }
    },[dispatch,productId,qty]);
    const removeFromCartHandler = (id) =>{
        //Silme aksiyonu
        dispatch(removeFromCart(id));
    };

    const checkoutHandler = () =>{
        props.history.push('/signin?redirect=shipping')
        //Procced to Checkout'a bastığı zaman olacak aksiyon.
    };
    return (
        <div className="cart">
            <div className="headerStage">
                <h1>Shopping Cart</h1>
            </div>
            <div className="left">
                <div className="leftContent">
                    {error && <MessageBox variant="danger">{error}</MessageBox>}
                    {cartItems.length === 0 ? (<MessageBox>
                        Cart is empty. <Link to="/">Go Shopping</Link>
                    </MessageBox>
                    //sepet boş olduğu zaman vereceği mesaj
                    ):(
                        <div className="scroll-bg">
                            <div className="scroll-div">
                                <div className="scroll-object">
                                    <ul>
                                        {
                                            cartItems.map((item) => (
                                                <li key={item.product}>
                                                    <div className="row">
                                                        <div>
                                                            <img src={item.image} alt={item.name} className="small"></img>
                                                            {/*Sepetteki ürünün resminin çekildiği kod satırı*/}
                                                        </div>
                                                        <div className="min-30">
                                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                                            {/*Sepetteki ürünün adının gösterildiği ve linkinin id'sine 
                                                            göre olacağını belirleyen kod satırı*/}
                                                        </div>
                                                        <div>
                                                            <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                                                                {
                                                                    [...Array(item.coutInStock).keys()].map((x) => (
                                                                        <option key={x+1} value={x+1}>{x+1}</option>
                                                                    )
                                                                    //Sepetteki ürünün qty kısmının çekildiği kod satırı
                                                                )}
                                                            </select>
                                                        </div>
                                                        <div>${item.price}</div> {/*Sepetteki ürünün fiyatının çekildiği kod satırı*/}
                                                        <div>
                                                            <button type="button" onClick={() => removeFromCartHandler(item.product)}>
                                                                Delete
                                                            </button>
                                                            {/*Sepetteki ürünlerin silme işleminin yapıldığı button*/}
                                                        </div>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                    }
                </div>
            </div>
            <div className="right">
                <div className="rightStage">
                    <div className="colCard">
                        <ul>
                            <li>
                            <h2>
                                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
                                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                            </h2>
                            </li>
                            <li>
                                <button type="button" onClick={checkoutHandler} className="primary block" disabled={cartItems.length === 0}>
                                    Procced to Checkout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
