import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import { detailsProduct, updateProduct, createProduct, deleteProduct, listProducts } from '../actions/productActions';
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants';
import "../screens/Styles/ProductsEdit/productsedit.css";

export default function ProductEditScreen(props) {
    const [name,setName] = useState(''); //name
    const [price,setPrice] = useState(''); //prive
    const [image,setImage] = useState(''); //image
    const [category,setCategory] = useState(''); //category
    const [coutInStock,setCoutInStock] = useState(''); //build product edit screen
    const [brand,setBrand] = useState(''); //brand
    const [description,setDescription] = useState(''); //description
    const dispatch = useDispatch();  //list products



    //}, [product,dispatch,productId]); //build product edit screen
    const submitHandler = (e) => { //build product edit screen
        e.preventDefault(); //build product edit screen
        dispatch(createProduct());
        const productId = props.match.params.id; //build product edit screen
        dispatch(updateProduct({_id: productId,name,price,image,category,brand,coutInStock,description,}));
    };
    const userSignin = useSelector((state) => state.userSignin); //upload product image
    const { userInfo } = userSignin; //upload product image
    const uploadFileHandler = async (e) => { //upload product image
        console.log("hello")
      const file = e.target.files[0]; //upload product image
      const bodyFormData = new FormData(); //upload product image
      bodyFormData.append('image', file); //upload product image
      try {
        const { data } = await axios.post('/api/uploads', bodyFormData, { //upload product image
          headers: { //upload product image
            'Content-Type': 'multipart/form-data', //upload product image
            Authorization: `Bearer ${userInfo.token}`, //upload product image
          },
        });
        setImage(data); //upload product image
      } catch (error) { //upload product image

      }
    };
    return (
        <div className="productsedit">
            <div className="headerStage">
                <h1>Create Product</h1>
            </div>
            <div className="mainContent">
                <div className="formStage">
                    <form className="form" onSubmit={submitHandler}>
                        
                            <>
                                <div>
                                    <label htmlFor="name">Name</label>
                                    <input id="name" type="text" className="name" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}></input>
                                </div>
                                <div>
                                    <label htmlFor="price">Price</label>
                                    <input id="price" type="text" className="price" placeholder="Enter price" value={price} onChange={(e) => setPrice(e.target.value)}></input>
                                </div>
                                <div>
                                    <label htmlFor="image">Image</label>
                                    <input id="image" type="text" className="image" placeholder="Enter image" value={image} onChange={(e) => setImage(e.target.value)}></input>
                                </div>
                                <div>
                                    <label htmlFor="imageFile">Image File</label>
                                    <input type="file" id="imageFile" className="imagefile" label="Choose Image" onChange={uploadFileHandler}></input>

                                </div>
                                <div>
                                    <label htmlFor="category">Category</label>
                                    <input id="category" type="text" className="category" placeholder="Enter category" value={category} onChange={(e) => setCategory(e.target.value)}></input>
                                </div>
                                <div>
                                    <label htmlFor="brand">Brand</label>
                                    <input id="brand" type="text"  className="brand" placeholder="Enter brand" value={brand} onChange={(e) => setBrand(e.target.value)} ></input>
                                </div>
                                <div>
                                    <label htmlFor="coutInStock">Count In Stock</label>
                                    <input id="coutInStock" type="text" className="countinstock" placeholder="Enter countInStock" value={coutInStock} onChange={(e) => setCoutInStock(e.target.value)}></input>
                                </div>
                                <div>
                                    <label htmlFor="description">Description</label>
                                    <textarea id="description" rows="3" type="text" className="description" placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                                </div>
                                <div className="button">
                                    <label></label>
                                    <button type="submit">Create</button>
                                </div>
                            </>

                    </form>
                </div>
            </div>
        </div>
    )
}
