import React from 'react';
import { Link } from 'react-router-dom';
/*import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser, updateUserProfile } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';*/

export default function UserProfileScreen() {
/*
  const [name, setName] = useState(''); //update user profile
  const [email, setEmail] = useState(''); //update user profile
  const [password, setPassword] = useState(''); //update user profile
  const [confirmPassword, setConfirmPassword] = useState(''); //update user profile

  const [sellerName, setSellerName] = useState(''); //updateImplement Seller View
  const [sellerLogo, setSellerLogo] = useState(''); //updateImplement Seller View
  const [sellerDescription, setSellerDescription] = useState(''); //updateImplement Seller View

  const userSignin = useSelector((state) => state.userSignin); //display user profile
  const { userInfo } = userSignin; //display user profile
  const userDetails = useSelector((state) => state.userDetails); //display user profile
  const { loading, error, user } = userDetails; //display user profile
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile); //update user profile
  const { success: successUpdate, error: errorUpdate, loading: loadingUpdate, } = userUpdateProfile; //update user profile
  const dispatch = useDispatch(); //display user profile
  useEffect(() => { //display user profile
    if (!user) { //update user profile
      dispatch({ type: USER_UPDATE_PROFILE_RESET }); //update user profile
      dispatch(detailsUser(userInfo._id)); //update user profile
    } else { //update user profile
      setName(user.name); //update user profile
      setEmail(user.email); //update user profile
        if (user.seller) { //updateImplement Seller View
            setSellerName(user.seller.name); //updateImplement Seller View
            setSellerLogo(user.seller.logo); //updateImplement Seller View
            setSellerDescription(user.seller.description); //updateImplement Seller View
        }
    }
  }, [dispatch, userInfo._id, user]); //update user profile
  //  dispatch(detailsUser(userInfo._id)); //display user profile
  //}, [dispatch, userInfo._id]); //display user profile
  const submitHandler = (e) => { //display user profile
    e.preventDefault(); //display user profile
    if (password !== confirmPassword) { //update user profile
      alert('Password and Confirm Password Are Not Matched'); //update user profile
    } else { //update user profile
      //dispatch(updateUserProfile({ userId: user._id, name, email, password })); //update user profile
    dispatch(
        updateUserProfile({userId: user._id,name,email,password,sellerName,sellerLogo,sellerDescription,})); //updateImplement Seller View
    }
};
*/
return (
        <div style={{textAlign:"center"}}>
            <div>
                <h4 className="uk-text-muted uk-text-bold">User Profile Screen</h4>
                <ul>
                    <li><Link to="/editprofile">Profile Edit</Link></li>
                    <li><Link to="/orderhistory">Order History</Link></li>
                </ul>
            </div>
        </div>
    );
}