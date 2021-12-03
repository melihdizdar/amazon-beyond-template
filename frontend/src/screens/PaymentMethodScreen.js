import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/cardActions';
import CheckoutSteps from '../components/CheckoutSteps';
import "../screens/Styles/Payment/payment.css"

export default function PaymentMethodScreen(props) {
    /*payment kısmında logout olduğun zaman shipping'e gider ve 
    logout durumunda shipping linkide signin'e gittiği için paymentten de signin sayfasına gider */
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;
    if(!shippingAddress.address){
        props.history.push('/shipping');
    }
    const [paymentMethod, setPaymentMethod] = useState('PayPal');
    const dispatch = useDispatch();
    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        props.history.push('/placeorder');
    }
    return (
        <div className="payment">
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <div className="headerStage">
                <h1>Payment Method</h1>
            </div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <div>
                        <input type="radio" id="paypal" value="PayPal" name="paymentMethod"
                        required checked onChange={(e) => setPaymentMethod(e.target.value)}></input>
                        <label htmlFor="paypal">PayPal</label>
                    </div>
                </div>
                <div>
                    <div>
                        <input type="radio" id="iyzico" value="Iyzico" name="paymentMethod"
                        required onChange={(e) => setPaymentMethod(e.target.value)}></input>
                        <label htmlFor="iyzico">Iyzico</label>
                    </div>
                </div>
                <div>
                    <button className="primary" type="submit">Continue</button>
                </div>
            </form>
        </div>
    )
}
