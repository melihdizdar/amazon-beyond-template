import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import '../screens/Styles/Signin/signin.css'

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
        <div className="signin">
            <div className="headerStage">
                <h4>Sign In</h4>
                <h1>How can I join you?</h1>
            </div>
            <form className="formStage" onSubmit={submitHandler}>
                {loading && <LoadingBox/>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <div className="email">
                    <label htmlFor="email">Email Adress</label>
                    <br/>
                    <input type="email" id="email" placeholder="Enter email" required
                    onChange={e => setEmail(e.target.value)}></input>
                </div>
                <br/>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <br/>
                    <input type="password" id="password" placeholder="Enter password" required
                    onChange={e => setPassword(e.target.value)}></input>
                </div>
                <br/>
                <div className="button">
                    <button type="submit">Sign In</button>
                </div>
                <br/>
                <div>
                    <label/>
                    <div>
                        New customer? {' '} <Link to={`/register?redirect=${redirect}`}>Create your account</Link>
                    </div>
                </div>
                <br/>
            </form>
        </div>
    )
}
