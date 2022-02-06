import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import '../screens/Styles/Register/register.css';

export default function RegisterScreen(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
      //register button action
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password and confirm password are not match');
    } else {
      dispatch(register(name, email, password));
    }
  };
  useEffect(() => {
      //kullanıcı isminden carta dönme olayı (redirect)
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <>
      <div className="uk-section uk-background-primary">
        <div className="uk-container uk-text-center" uk-scrollspy="cls: uk-animation-fade; delay: 300; repeat:true;">
            <h4 className="uk-margin-remove">Register</h4>
            <h1 className="uk-margin-remove">How can I join you?</h1>
        </div>
      </div>
      <div className="uk-section-large">
          <div className="uk-container">
              <form className="uk-grid-medium uk-width-1-2 uk-flex-center uk-margin-auto" uk-grid="true" onSubmit={submitHandler} id="contact-form" uk-scrollspy="cls: uk-animation-fade; delay: 300; repeat:true;">
                  {loading && <LoadingBox/>}
                  {error && <MessageBox variant="danger">{error}</MessageBox>}
                  <div className="uk-width-1-1@m">
                      <div className="uk-inline uk-width-1-1@m">
                          <div className="uk-form-icon" href="#" uk-icon="icon: user"></div>
                          <input className="uk-input" type="email" placeholder="Enter your full name" name="name" required onChange={(e) => setName(e.target.value)}/>
                      </div>
                  </div>
                  <div className="uk-width-1-1@m">
                      <div className="uk-inline uk-width-1-1@m">
                          <div className="uk-form-icon" href="#" uk-icon="icon: mail"></div>
                          <input className="uk-input" type="email" placeholder="Enter your email" name="email" required onChange={(e) => setEmail(e.target.value)}/>
                      </div>
                  </div>
                  <div className="uk-width-1-1@m">
                      <div className="uk-inline uk-width-1-1@m">
                          <div className="uk-form-icon" href="#" uk-icon="icon: hashtag"></div>
                          <input className="uk-input" type="password" placeholder="Enter your password" name="password" required onChange={(e) => setPassword(e.target.value)}/>
                      </div>
                  </div>
                  <div className="uk-width-1-1@m">
                      <div className="uk-inline uk-width-1-1@m">
                          <div className="uk-form-icon" href="#" uk-icon="icon: hashtag"></div>
                          <input className="uk-input" type="password" placeholder="Enter your confirm password" name="confirmpassword"  required onChange={(e) => setConfirmPassword(e.target.value)}/>
                      </div>
                  </div>
                  <div className="uk-width-1-1@m uk-flex-center uk-flex">
                      <button className="uk-button uk-button-default" type="submit">Register</button>
                  </div>
                  <div>
                      <label/>
                      <div>
                        Already have an account?{' '}
                        <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
                      </div>
                  </div>
              </form>
          </div>
      </div>
    </>
  );
}