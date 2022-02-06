/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import { detailsProduct, updateProduct } from '../actions/productActions';
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants';

export default function ProductEditScreen(props) {
    const productId = props.match.params.id; //build product edit screen
    const [name,setName] = useState(''); //name
    const [price,setPrice] = useState(''); //prive
    const [image,setImage] = useState(''); //image
    const [category,setCategory] = useState(''); //category
    const [coutInStock,setCoutInStock] = useState(''); //build product edit screen
    const [brand,setBrand] = useState(''); //brand
    const [description,setDescription] = useState(''); //description

    const productDetails = useSelector((state) => state.productDetails); //build product edit screen
    const { loading,error,product } = productDetails; //build product edit screen
    const productUpdate = useSelector((state) => state.productUpdate); //update product
    const {loading: loadingUpdate,error: errorUpdate,success: successUpdate,} = productUpdate; //update product
    const dispatch = useDispatch(); //build product edit screen
    useEffect(() => { //build product edit screen
        //if(!product || (product._id !== productId)) { //build product edit screen
        if (successUpdate) {
            props.history.push('/productlist'); //update product
        }
        if (!product || product._id !== productId || successUpdate  ) { //update product
            dispatch({ type: PRODUCT_UPDATE_RESET }); //update product
            dispatch(detailsProduct(productId)); //build product edit screen    
        } else {
            setName(product.name); //build product edit screen
            setPrice(product.price); //build product edit screen
            setImage(product.image); //build product edit screen
            setCategory(product.category); //build product edit screen
            setCoutInStock(product.coutInStock); //build product edit screen
            setBrand(product.brand); //build product edit screen
            setDescription(product.description); //build product edit screen
        }
    }, [product, dispatch, productId, successUpdate, props.history]); //update product
    //}, [product,dispatch,productId]); //build product edit screen
    const submitHandler = (e) => { //build product edit screen
        e.preventDefault(); //build product edit screen
        dispatch(updateProduct({_id: productId,name,price,image,category,brand,coutInStock,description,})); //update product
    };
    const [loadingUpload, setLoadingUpload] = useState(false); //upload product image
    const [errorUpload, setErrorUpload] = useState(''); //upload product image
  
    const userSignin = useSelector((state) => state.userSignin); //upload product image
    const { userInfo } = userSignin; //upload product image
    const uploadFileHandler = async (e) => { //upload product image
        console.log("hello")
      const file = e.target.files[0]; //upload product image
      const bodyFormData = new FormData(); //upload product image
      bodyFormData.append('image', file); //upload product image
      setLoadingUpload(true); //upload product image
      try {
        const { data } = await axios.post('/api/uploads', bodyFormData, { //upload product image
          headers: { //upload product image
            'Content-Type': 'multipart/form-data', //upload product image
            Authorization: `Bearer ${userInfo.token}`, //upload product image
          },
        });
        setImage(data); //upload product image
        setLoadingUpload(false); //upload product image
      } catch (error) { //upload product image
        setErrorUpload(error.message); //upload product image
        setLoadingUpload(false); //upload product image
      }
    };
    return (
        <>
            <section className="uk-section uk-background-primary">
                <div className="uk-container uk-text-center" uk-scrollspy="cls: uk-animation-fade; delay: 300; repeat:true;">
                    <h4 className="uk-margin-remove">Edit Product</h4>
                    <h1 className="uk-margin-remove">Product ID : "{productId}"</h1>
                </div>
            </section>
            <section className="uk-section">
                <div className="uk-container">
                    <form className="uk-grid-small uk-width-1-2@m uk-flex-center uk-margin-auto" uk-grid="true" onSubmit={submitHandler} id="contact-form" uk-scrollspy="cls: uk-animation-fade; delay: 300; repeat:true;">
                        {loadingUpdate && <LoadingBox></LoadingBox>}
                        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
                        {loading ? (<LoadingBox/>) : error ? (<MessageBox variant="danger">{error}</MessageBox>) : 
                        (
                            <>
                                <div className="uk-width-1-1@m">
                                    <input className="uk-input" type="text" id="name" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}name="name"/>
                                </div>
                                <div className="uk-width-1-1@m">
                                    <input className="uk-input" type="number" id="price" placeholder="Enter price" value={price} onChange={(e) => setPrice(e.target.value)}name="name"/>
                                </div>
                                <div className="uk-width-1-1@m">
                                    <input className="uk-input" type="text" id="image" placeholder="Enter image" value={image} onChange={(e) => setImage(e.target.value)} name="name"/>
                                </div>
                                <div className="uk-width-1-1@m">
                                    <input type="file" id="imageFile" className="uk-input" label="Choose Image" onChange={uploadFileHandler}></input>
                                    {loadingUpload && <LoadingBox></LoadingBox>}{errorUpload && (
                                    <MessageBox variant="danger">{errorUpload}</MessageBox>)}
                                </div>
                                <div className="uk-width-1-1@m">
                                    <input className="uk-input" type="text" id="category" placeholder="Enter category" value={category} onChange={(e) => setCategory(e.target.value)}name="name"/>
                                </div>
                                <div className="uk-width-1-1@m">
                                    <input className="uk-input" type="text" id="brand" placeholder="Enter brand" value={brand} onChange={(e) => setBrand(e.target.value)}name="name"/>
                                </div>
                                <div className="uk-width-1-1@m">
                                    <input className="uk-input" type="number" id="countInStock" placeholder="Enter countInStock" value={coutInStock} onChange={(e) => setCoutInStock(e.target.value)}name="name"/>
                                </div>
                                <div className="uk-width-1-1@m">
                                <textarea id="description" rows="3" type="text" className="uk-textarea resize" placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                                </div>
                                <label></label>
                                <div className="uk-width-1-1@m uk-flex-center uk-flex">
                                    <button className="uk-button uk-button-default" type="submit">Update</button>
                                </div>
                            </>
                        )}
                    </form>
                </div>
            </section>
        </>
    )
}
