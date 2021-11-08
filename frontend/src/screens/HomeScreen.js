import React, { useEffect} from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Product from "../components/Product";
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { listTopSellers } from '../actions/userActions';
import { Link,Route } from 'react-router-dom';
import PListButton from '../components/PListButton';
import HomeCard from '../components/HomeCard';
import { listHomeCards } from '../actions/homeActions';
import HomeColumnCard from '../components/HomeColumnCard/HomeColumnCard';

export default function HomeScreen() {
  /*kullanılan fonksiyonların tanımları yapılır.*/
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const {loading,error,products} = productList;

  const userTopSellersList = useSelector((state) => state.userTopSellersList); //51.Add Top Seller Carousel
  const {loading:loadingSellers,error:errorSellers,users:sellers} = userTopSellersList; //51.Add Top Seller Carousel

  const HomeCardList = useSelector((state) => state.HomeCardList);
  const {loading:loadingHomeCard,error:errorHomeCard,homeCards} = HomeCardList;

  useEffect(() =>{
    //dispatch(listProducts());
    dispatch(listHomeCards());
    dispatch(listProducts({})); //49.Implement Seller View
    dispatch(listTopSellers()); //51.Add Top Seller Carousel
  }, [dispatch]);
    return (
        <div>
        <h2>Top Sellers</h2>{loadingSellers ? (  <LoadingBox></LoadingBox>) : errorSellers ? (  <MessageBox variant="danger">{errorSellers}</MessageBox>) : 
        (
          <>
            {sellers.length === 0 && <MessageBox>No Seller Found</MessageBox>}
            <Carousel showArrows autoPlay showThumbs={false}>
              {sellers.map((seller) => (
                <div key={seller._id}>
                  <Link to={`/seller/${seller._id}`}>
                    <img src={seller.seller.logo} alt={seller.seller.name} />
                    <p className="legend">{seller.seller.name}</p>
                  </Link>
                </div>
              ))}
            </Carousel>
          </>
        )}
          <h2>Featured Products</h2>
          {loading ? ( <LoadingBox/> ) : error ? (  <MessageBox variant="danger">{error}</MessageBox> ) : (
          <>
            {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
            <div className="row center">
              {products.map((product) => (
                <Product key={product._id} product={product}></Product>
              ))}
            </div>
            <div className="row right">
              <Route render={({history}) => <PListButton history={history}></PListButton>}></Route>
            </div>
          </>
        )}
          <h2>Our Responsibility</h2>
          {loadingHomeCard ? ( <LoadingBox></LoadingBox>) : errorHomeCard ? (<MessageBox variant="danger">{errorHomeCard}</MessageBox>) : (
          <>
              {homeCards.length === 0 && <MessageBox>No Home Card Found</MessageBox>}
              <div className="HomeCardStage">
                {homeCards.map((homeCard) => (
                  <HomeCard key={homeCard._id} homeCard={homeCard}></HomeCard>
                ))}
              </div>
          </>
      )}
      <HomeColumnCard/>
    </div>
    )
}
