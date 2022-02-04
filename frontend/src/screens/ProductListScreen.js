import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams} from 'react-router-dom';
import { createProduct, deleteProduct, listProducts } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { PRODUCT_CREATE_RESET, PRODUCT_DELETE_RESET } from '../constants/productConstants';
import "../screens/Styles/ProductsTable/productstable.css";

export default function ProductListScreen(props) {
  const { pageNumber = 1 } = useParams(); //Implement Pagination
  const sellerMode = props.match.path.indexOf('/seller') >= 0; //Implement Seller View
  const productList = useSelector((state) => state.productList); //list products
  const { loading, error, products, page, pages } = productList; //Implement Pagination
  //const { loading, error, products } = productList; //list products
  const productCreate = useSelector((state) => state.productCreate); //create product
  const { loading:loadingCreate, error: errorCreate, success:successCreate, product:createdProduct } = productCreate; //create product
  const productDelete = useSelector((state) => state.productDelete); //delete product
  const {loading: loadingDelete,error: errorDelete,success: successDelete,} = productDelete; //delete product
  const userSignin = useSelector((state) => state.userSignin); //Implement Seller View
  const { userInfo } = userSignin; //Implement Seller View
  const dispatch = useDispatch();  //list products
  useEffect(() => { //list products
    //if(successCreate){ //create product
    //dispatch({type:PRODUCT_CREATE_RESET}); //create product
    //props.history.push(`/product/${createdProduct._id}/edit`); //create product
    //}
    if (successDelete) { //delete product
      dispatch({ type: PRODUCT_DELETE_RESET }); //delete product
    }
    dispatch(listProducts({ seller: sellerMode ? userInfo._id : '', pageNumber })); //Implement Pagination
    //dispatch(listProducts({ seller: sellerMode ? userInfo._id : '' })); //Implement Seller View
    //dispatch(listProducts()); //list products
  }, [createdProduct,dispatch,props.history,sellerMode,successCreate,successDelete,userInfo._id,pageNumber]); //Implement Pagination
  //}, [createdProduct,dispatch,props.history,sellerMode,successCreate,successDelete,userInfo._id]); //Implement Seller View
  //}, [createdProduct, dispatch, props.history, successCreate, successDelete]); //delete product
  //}, [createdProduct,dispatch,props.history,successCreate]); //create product
  //}, [dispatch]); //list products
  const deleteHandler = (product) => { //list products
    if (window.confirm('Are you sure to delete?')) {
      dispatch(deleteProduct(product._id)); //delete product
    }
  };
  const createHandler = () => { //create product
    props.history.push("/ProductCreate")
  }
  return (
    <div className="productstable">
      <div className="headerStage">
        <h1>Product List</h1>
      </div>
      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
      {loadingCreate && <LoadingBox/>}
      {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
      {loading ? ( <LoadingBox/>) : error ? ( <MessageBox variant="danger">{error}</MessageBox>) : 
      (
        <>
          <div className="buttonstage">
            <button type="button" onClick={createHandler}>
              Create Product
            </button>
          </div>
          <div className="tablediv">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>PRICE</th>
                  <th>CATEGORY</th>
                  <th>BRAND</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id}>
                    <td>{product._id}</td>
                    <td>{product.name}</td>
                    <td>${product.price}</td>
                    <td>{product.category}</td>
                    <td>{product.brand}</td>
                    <td>
                      <button type="button" className="small" onClick={() =>props.history.push(`/product/${product._id}/edit`)}>
                        Edit
                      </button>
                      <button type="button" className="small" onClick={() => deleteHandler(product)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="paginationStage"> {/*Implement Pagination*/}
              <div className="pagination">
                  {[...Array(pages).keys()].map((x) => (
                    <Link className={x + 1 === page ? 'active' : ''} key={x + 1} to={`/productlist/pageNumber/${x + 1}`}>{x + 1}</Link>
                  ))}
              </div>
          </div>
        </>
      )}
    </div>
  );
}