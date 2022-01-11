import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deliverOrder, detailsOrder, payOrder } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { ORDER_DELIVER_RESET, ORDER_PAY_RESET } from '../constants/orderConstants';
import "../screens/Styles/Order/order.css";

export default function OrderScreen(props) {
  //Add PayPal Button ve Pay Order
  const orderId = props.match.params.id;
  const [sdkReady,setSdkReady] = useState(false); //Add PayPal Button
  const [sdkSec,setSecReady] = useState(false); //Add PayPal Button
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const userSignin = useSelector((state) => state.userSignin); //Deliver order
  const { userInfo } = userSignin; //Deliver order
  
  const orderPay = useSelector((state) => state.orderPay); //Pay Order
  const { loading: loadingPay, error: errorPay, success: successPay } = orderPay; //Pay Order
  const orderDeliver = useSelector((state) => state.orderPay); //deliver order
  const { loading: loadingDeliver, error: errorDeliver, success: successDeliver } = orderDeliver; //deliver order
  const dispatch = useDispatch();

  useEffect(() => { 
    const addPayPalScript = async () => { //Add PayPal Button
      const {data} = await axios.get('/api/config/paypal'); //Add PayPal Button
      const script = document.createElement('script'); //Add PayPal Button
      script.type='text/javascript'; //Add PayPal Button
      script.src=`https://www.paypal.com/sdk/js?client-id=${data}`;//Add PayPal Button
      script.async = true; //Add PayPal Button
      script.onload = () => { //Add PayPal Button
        setSdkReady(true); //Add PayPal Button
      };
      document.body.appendChild(script);//Add PayPal Button
    };
      if(!order || successPay || successDeliver || (order && order._id !== orderId)){ //burada or yerine and olmalı bence
      dispatch({type: ORDER_PAY_RESET}); //Pay Order
      dispatch({type: ORDER_DELIVER_RESET}); //deliver order
      dispatch(detailsOrder(orderId)); //Add PayPal Button
      console.log("baknağ")
    } 
    else{ //Add PayPal Button
      if(!order.isPaid){ //Add PayPal Button
        if(!window.paypal){ //Add PayPal Button
          addPayPalScript(); //Add PayPal Button
        } 
        if(order.paymentMethod === "PayPal"){ //Add PayPal Button
          setSdkReady(true); //Add PayPal Button
          console.log(sdkReady)
          console.log("-----")
          console.log(order.paymentMethod)
        }
        if(order.paymentMethod === "Iyzico"){ //Add PayPal Button
          setSecReady(true); //Add PayPal Button
          console.log(sdkSec)
          console.log("-----")
          console.log(order.paymentMethod)
        }
      }
    }
  /* }, [dispatch, order,orderId,sdkReady]); Add PayPal Button */
  //}, [dispatch, order,orderId,sdkReady,successPay]); //Pay Order
    }, [dispatch, order,orderId,sdkReady,sdkSec,successPay,successDeliver]); //Deliver order
  /* const successPaymentHandler = () => {}; //Add PayPal Button */
  const successPaymentHandler = (paymentResult) => { //Pay Order
    dispatch(payOrder(order,paymentResult)); //Pay Order
  };
  const deliverHandler = () => { //Deliver order
    dispatch(deliverOrder(order._id)); //Deliver order
  };
  return loading ? (<LoadingBox/>) : error ? (<MessageBox variant="danger">{error}</MessageBox>) : (
    <div className="order">
      <div className="headerStage">
        <h1>Order</h1>
        <h4>Order ID : "{order._id}"</h4>
      </div>
      <div className="mainContent">
        <div className="mainLeft">
          <ul>
            <li>
              <div className="shippingCard">
                <h2>Shipping</h2>
                <p>
                  <strong>Name:</strong> {order.shippingAddress.fullName} <br />
                  <strong>Address: </strong> {order.shippingAddress.address},
                  {order.shippingAddress.city},{' '}
                  {order.shippingAddress.postalCode},
                  {order.shippingAddress.country}
                </p>
                {order.isDelivered ? (
                  <MessageBox variant="success">
                    Delivered at {order.deliveredAt}
                  </MessageBox>
                ) : (
                  <MessageBox variant="danger">Not Delivered</MessageBox>
                )}
              </div>
            </li>
            <li>
              <div className="shippingCard">
                <h2>Payment</h2>
                <p>
                  <strong>Method:</strong> {order.paymentMethod}
                </p>
                {order.isPaid ? (
                  <MessageBox variant="success">
                    Paid at {order.paidAt}
                  </MessageBox>
                ) : (
                  <MessageBox variant="danger">Not Paid</MessageBox>
                )}
              </div>
            </li>
            <li>
              <div className="shippingCard">
                <h2>Order Items</h2>
                <ul>
                  {order.orderItems.map((item) => (
                    <li key={item.product}>
                      <div className="orderitemsrow">
                        <div className="left">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="small"
                          ></img>
                        </div>
                        <div className="center">
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>
                        <div className="right">
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </div>
                      </div>
                    </li>
                  ))}
                  {loadingDeliver && <LoadingBox/>}
                  {errorDeliver && <MessageBox variant="danger">{errorDeliver}</MessageBox>}
                  {userInfo.isAdmin && order.isPaid && !order.isDelivered && (
                    <li>
                      <button type="button" className="block" onClick={deliverHandler}>Deliver Order</button>
                    </li>
                  )}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="mainRight">
          <div className="orderSummaryCard">
            <ul>
              <li>
                <h2>Order Summary</h2>
              </li>
              <li>
                <div className="row">
                  <div>Items</div>
                  <div>${order.itemsPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Shipping</div>
                  <div>${order.shippingPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Tax</div>
                  <div>${order.taxPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>
                    <strong> Order Total</strong>
                  </div>
                  <div>
                    <strong>${order.totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
              </li>
              {/*Add PayPal Button*/}
                {!order.isPaid && ( 
                  <li>
                    {!sdkReady ? 
                    (
                      <LoadingBox/> ) : (
                    /* <PayPalButton amount={order.totalPrice} onSuccess={successPaymentHandler} /> //Add PayPal Button */
                    <>
                      {errorPay && (
                      <MessageBox variant="danger">{errorPay}</MessageBox>)}
                      {loadingPay && <LoadingBox></LoadingBox>}
                      
                      <PayPalButton
                        amount={order.totalPrice}
                        onSuccess={successPaymentHandler}
                      ></PayPalButton>
                    </>   
                    )}
                    {!sdkSec ? 
                    (
                      <LoadingBox/> ) : (
                    /* <PayPalButton amount={order.totalPrice} onSuccess={successPaymentHandler} /> //Add PayPal Button */
                    <>
                      {errorPay && (
                      <MessageBox variant="danger">{errorPay}</MessageBox>)}
                      {loadingPay && <LoadingBox></LoadingBox>}
                      
                      <h1>iyzico will be here</h1>

                    </>   
                    )}
                    {}
                  </li>
                )}
              {/*-----------------------------*/}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}