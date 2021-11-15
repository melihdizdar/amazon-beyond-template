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
    <div className="register">
      <div className="headerStage">
        <h4>Register</h4>
        <h1>How can I join you?</h1>
      </div>
      <div className="mainContent">
        <div className="formStage">
          <form className="form" onSubmit={submitHandler}>
            {loading && <LoadingBox></LoadingBox>}
            {error && <MessageBox variant="danger">{error}</MessageBox>}
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="name"
                placeholder="Enter name"
                required
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                className="email"
                placeholder="Enter email"
                required
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="password"
                placeholder="Enter password"
                required
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                className="confirmPassword"
                placeholder="Enter confirm password"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
            </div>
            <br/>
            <div className="button">
              <button type="submit">
                Register
              </button>
            </div>
            <div>
              <label />
              <div>
                Already have an account?{' '}
                <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}