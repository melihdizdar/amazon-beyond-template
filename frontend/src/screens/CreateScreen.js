import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {createProduct,updateProduct} from '../actions/productActions';
//NEEDS FRONTEND

export default function CreateScreen(props) {
    const [name,setName] = useState(''); //name
    const [price,setPrice] = useState(''); //prive
    const [image,setImage] = useState(''); //image
    const [category,setCategory] = useState(''); //category
    const [coutInStock,setCoutInStock] = useState(''); //build product edit screen
    const [brand,setBrand] = useState(''); //brand
    const [description,setDescription] = useState(''); //description
    const dispatch = useDispatch();  //list products
    const productCreate = useSelector((state) => state.productCreate); //create product
    const { success:successCreate, product:createdProduct } = productCreate; //create product


    useEffect(() => {
        if(successCreate){
            dispatch(updateProduct({_id: createdProduct._id,name,price,image,category,brand,coutInStock,description,})); //update product
            props.history.push('/productlist'); //update product
        }


    })

    //}, [product,dispatch,productId]); //build product edit screen
    const submitHandler = (e) => { //build product edit screen
        e.preventDefault(); //build product edit screen
        dispatch(createProduct());
        
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
        <>
            <section className="uk-section uk-background-primary">
                <div className="uk-container uk-text-center" uk-scrollspy="cls: uk-animation-fade; delay: 300; repeat:true;">
                    <h4 className="uk-margin-remove">Create Product</h4>
                </div>
            </section>
            <section className="uk-section">
                <div className="uk-container">
                    <form className="uk-grid-small uk-width-1-2@m uk-flex-center uk-margin-auto" uk-grid="true" onSubmit={submitHandler} id="contact-form" uk-scrollspy="cls: uk-animation-fade; delay: 300; repeat:true;">
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
                            <button className="uk-button uk-button-default" type="submit">Create</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
