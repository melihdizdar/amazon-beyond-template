import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser, updateUser } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { USER_UPDATE_RESET } from '../constants/userConstants';

export default function UserEditScreen(props) {
  const userId = props.match.params.id;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSeller, setIsSeller] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userUpdate = useSelector((state) => state.userUpdate);
  const {loading: loadingUpdate,error: errorUpdate,success: successUpdate,} = userUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      props.history.push('/userlist');
    }
    if (!user) {
      dispatch(detailsUser(userId));
    } else {
      setName(user.name);
      setEmail(user.email);
      setIsSeller(user.isSeller);
      setIsAdmin(user.isAdmin);
    }
  }, [dispatch, props.history, successUpdate, user, userId]);

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch update user
    dispatch(updateUser({ _id: userId, name, email, isSeller, isAdmin }));
  };
  return (
    <>
      <section className="uk-section uk-background-primary">
        <div className="uk-container uk-text-center" uk-scrollspy="cls: uk-animation-fade; delay: 300; repeat:true;">
            <h4 className="uk-margin-remove">Edit User</h4>
            <h1 className="uk-margin-remove">"{name}"</h1>
        </div>
      </section>
      <section className="uk-section">
        <div className="uk-container">
          <form className="uk-grid-small uk-width-1-2@m uk-flex-center uk-margin-auto" uk-grid="true" onSubmit={submitHandler} id="user-edit-form" uk-scrollspy="cls: uk-animation-fade; delay: 300; repeat:true;">
            <div>
              {loadingUpdate && <LoadingBox/>}
              {errorUpdate && (<MessageBox variant="danger">{errorUpdate}</MessageBox>)}
            </div>
            {loading ? (<LoadingBox />) : error ? (<MessageBox variant="danger">{error}</MessageBox>) : 
            (
              <>
                <div className="uk-width-1-1@m">
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" placeholder="Enter name" className="uk-input" value={name} onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div className="uk-width-1-1@m">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" placeholder="Enter email" className="uk-input" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className="uk-width-1-1@m">
                  <span><label htmlFor="isAdmin">Is Admin</label></span>
                  <span><input id="isAdmin" type="checkbox" checked={isAdmin} className="uk-checkbox" onChange={(e) => setIsAdmin(e.target.checked)}></input></span>
                </div>
                <div className="uk-width-1-1@m uk-flex-center uk-flex">
                  <button type="submit" className="uk-button uk-button-default">
                    Update
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}