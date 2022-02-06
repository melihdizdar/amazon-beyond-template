import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function SigninScreen(props) {

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect = props.location.search ? props.location.search.split('=')[1] : '/';
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo , loading , error} = userSignin;

    const dispatch = useDispatch();
    const submitHandler = (e) =>{
        //signin button action
        e.preventDefault();
        dispatch(signin(email,password));
    };
    useEffect(() =>{
        //kullanıcı isminden carta dönme olayı (redirect)
        if(userInfo){
            props.history.push(redirect);
        }
    } ,[props.history,redirect,userInfo]);
    return (
        <>
            <div className="uk-section uk-background-primary">
                <div className="uk-container uk-text-center" uk-scrollspy="cls: uk-animation-fade; delay: 300; repeat:true;">
                    <h4 className="uk-margin-remove">Sign In</h4>
                    <h1 className="uk-margin-remove">How can I login?</h1>
                </div>
            </div>
            <div className="uk-section-large">
                <div className="uk-container">
                    <form className="uk-grid-medium uk-width-1-3 uk-flex-center uk-margin-auto" uk-grid="true" onSubmit={submitHandler} id="contact-form" uk-scrollspy="cls: uk-animation-fade; delay: 300; repeat:true;">
                        {loading && <LoadingBox/>}
                        {error && <MessageBox variant="danger">{error}</MessageBox>}
                        <div className="uk-width-1-1@m">
                            <div className="uk-inline uk-width-1-1@m">
                                <div className="uk-form-icon" href="#" uk-icon="icon: mail"></div>
                                <input className="uk-input" type="email" placeholder="Enter your email" name="email" required onChange={e => setEmail(e.target.value)}/>
                            </div>
                        </div>
                        <div className="uk-width-1-1@m">
                            <div className="uk-inline uk-width-1-1@m">
                                <div className="uk-form-icon" href="#" uk-icon="icon: hashtag"></div>
                                <input className="uk-input" type="password" placeholder="Enter your password" name="password" required onChange={e => setPassword(e.target.value)}/>
                            </div>
                        </div>
                        <div className="uk-width-1-1@m uk-flex-center uk-flex">
                            <button className="uk-button uk-button-default" type="submit">Sign In</button>
                        </div>
                        <div>
                            <label/>
                            <div>
                                New customer? {' '} <Link to={`/register?redirect=${redirect}`}>Create your account</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
