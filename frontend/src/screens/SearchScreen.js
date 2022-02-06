import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, Route } from 'react-router-dom';
import { listProducts } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Product from '../components/Product';
import { prices} from '../utils';
import SearchBox from '../components/SearchBox';
import "../screens/Styles/Search/search.css";

export default function SearchScreen(props) {
  //const { name = 'all' } = useParams(); //Create Search Box and Search Screen,
  //const { name = 'all', category='all' } = useParams(); //Add Category Sidebar and Filter
  //const { name = 'all', category = 'all', min = 0, max = 0, rating = 0, order = 'newest',} = useParams(); //Sort and filter product
  const { name = 'all', category = 'all', min = 0, max = 0, rating = 0, order = 'newest',pageNumber = 1,} = useParams(); //Implement Pagination
  const dispatch = useDispatch(); //Create Search Box and Search Screen
  const productList = useSelector((state) => state.productList); //Create Search Box and Search Screen
  //const { loading, error, products } = productList; //Create Search Box and Search Screen
  const { loading, error, products, page, pages } = productList; //Implement Pagination
  const productCategoryList = useSelector((state) => state.productCategoryList); //Add Category Sidebar and Filter
  const { loading:loadingCategories, error:errorCategories, categories } = productCategoryList; //Add Category Sidebar and Filter
  useEffect(() => { //Create Search Box and Search Screen
    //dispatch(listProducts({ name: name !== 'all' ? name : '' })); //Create Search Box and Search Screen
    //dispatch(listProducts({name: name !== 'all' ? name : '',category: category !== 'all' ? category : '',})); //Add Category Sidebar and Filter
    //dispatch(listProducts({name: name !== 'all' ? name : '',category: category !== 'all' ? category : '', min, max, rating, order,})); //Sort and filter product
    dispatch(listProducts({pageNumber,name: name !== 'all' ? name : '',category: category !== 'all' ? category : '', min, max, rating, order,})); //Implement Pagination
  }, [category, dispatch, max, min, name, order, rating, pageNumber]); //Implement Pagination
  //}, [category, dispatch, max, min, name, order, rating]); //Sort and filter product
  //}, [category, dispatch, name]); //Add Category Sidebar and Filter
  //}, [dispatch, name]); //Create Search Box and Search Screen
  const getFilterUrl = (filter) =>  { //Add Category Sidebar and Filter
    const filterPage = filter.page || pageNumber; //Implement Pagination
    const filterCategory = filter.category || category; //Add Category Sidebar and Filter
    const filterName = filter.name || name; //Add Category Sidebar and Filter
    const filterRating = filter.rating || rating; //Sort and filter product
    const sortOrder = filter.order || order; //Sort and filter product
    const filterMin = filter.min ? filter.min : filter.min === 0 ? 0 : min; //Sort and filter product
    const filterMax = filter.max ? filter.max : filter.max === 0 ? 0 : max; //Sort and filter product
    return `/search/category/${filterCategory}/name/${filterName}/min/${filterMin}/max/${filterMax}/rating/${filterRating}/order/${sortOrder}/pageNumber/${filterPage}`; //Implement Pagination
    //return `/search/category/${filterCategory}/name/${filterName}/min/${filterMin}/max/${filterMax}/rating/${filterRating}/order/${sortOrder}`; //Sort and filter product
    //return `/search/category/${filterCategory}/name/${filterName}`; //Add Category Sidebar and Filter
  }
  return (
    <div>
      {loading ? (<LoadingBox></LoadingBox>) 
      : error ? ( <MessageBox variant="danger">{error}</MessageBox>) : 
      (
        <>
        <section className="uk-section-small">
          <div className="uk-container uk-container-large uk-flex-middle uk-flex uk-flex-between">
            <div>{products.length} Results</div>
            <div>
                Sort by{' '}
                <select class="uk-select" value={order} onChange={(e) => { props.history.push(getFilterUrl({ order: e.target.value }));}}>
                  <option value="newest">Newest Arrivals</option>
                  <option value="lowest">Price: Low to High</option>
                  <option value="highest">Price: High to Low</option>
                </select>
                <div>
                  <br/>
                  <Route render={({history}) => <SearchBox history={history}></SearchBox>}></Route>
                </div>
            </div>
          </div>
        </section>
        </>
      )}
      <section className="uk-section-small">
        <div className="uk-container uk-container-large">
          <div className="uk-grid-small uk-flex-center" uk-grid="true">
            <div className="uk-width-1-1 uk-width-1-6@s uk-visible@s uk-link-reset">
              <h3>Department</h3>
              <div>
                {loadingCategories ? (<LoadingBox></LoadingBox>) : errorCategories ? ( <MessageBox variant="danger">{errorCategories}</MessageBox>) : 
                  (
                    <ul>
                      <li>
                        <Link className={'all' === category ? 'active' : ''} to={getFilterUrl({ category: 'all' })}>Any</Link>
                      </li>
                      {categories.map((c) => (
                        <li key={c}>
                          <Link className={c === category ? 'active' : ''} to={getFilterUrl({ category: c })}>{c}</Link>
                        </li>
                      ))}
                    </ul>
                  )
                }
              </div>
              <div>
                <h3>Price</h3>
                <ul>
                  {prices.map((p) => (
                    <li key={p.name}>
                      <Link to={getFilterUrl({ min: p.min, max: p.max })} className={`${p.min}-${p.max}` === `${min}-${max}` ? 'active' : '' }>{p.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="uk-width-1-1 uk-width-5-6@s">
              {loading ? (
                <LoadingBox></LoadingBox>) : error ? (  <MessageBox variant="danger">{error}</MessageBox>) : 
                (
                    <>
                        {products.length === 0 && (
                            <MessageBox>No Product Found</MessageBox>
                        )}
                        <div className="uk-grid-medium uk-child-width-1-1 uk-child-width-1-3@s uk-child-width-1-4@m uk-flex-center uk-flex-middle" uk-grid="true" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 100; repeat:true;">
                            {products.map((product) => (
                            <Product key={product._id} product={product}></Product>
                            ))}
                        </div>
                        <div className="uk-flex uk-flex-center"> {/*Implement Pagination*/}
                              <div className="uk-button uk-button-default uk-link-reset">
                                {[...Array(pages).keys()].map((x) => (
                                <Link className={x + 1 === page ? 'active' : ''} key={x + 1} to={getFilterUrl({ page: x + 1 })}>{x + 1}</Link>
                                ))}
                              </div>
                        </div>
                    </>
                )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}