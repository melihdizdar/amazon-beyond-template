import React, { useEffect} from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Product from "../components/Product";
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { Link,Route } from 'react-router-dom';
import PListButton from '../components/PListButton';
import HomeCard from '../components/HomeCard';
import { listHomeCards } from '../actions/homeActions';
import "../screens/Styles/Home/home.css";
import SCollectionButton from '../components/SCollectionButton';
import infoimage1 from "../assets/hicon1.png";
import infoimage2 from "../assets/hicon2.png";
import infoimage3 from "../assets/hicon3.png";

export default function HomeScreen() {
  /*kullanılan fonksiyonların tanımları yapılır.*/
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const {loading,error,products} = productList;

  const HomeCardList = useSelector((state) => state.HomeCardList);
  const {loading:loadingHomeCard,error:errorHomeCard,homeCards} = HomeCardList;

  useEffect(() =>{
    //dispatch(listProducts());
    dispatch(listHomeCards());
    dispatch(listProducts({})); //Implement Seller View
  }, [dispatch]);
    return (
        <div className="home">
          <Carousel showArrows autoPlay showThumbs={false} infiniteLoop interval={6000} showStatus={false}  centerSlidePercentage={100} emulateTouch     
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                    <button type="button" onClick={onClickHandler} title={label} className="leftarrow">
                        <i class="fas fa-angle-left"></i>
                    </button>
                )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                    <button type="button" onClick={onClickHandler} title={label} className="rightarrow">
                        <i class="fas fa-angle-right"></i>
                    </button>
                )
            }>
              <div>
                  <img src="https://i.hizliresim.com/pmfu2vf.jpg" alt="slider1" />
              </div>
              <div>
                  <img src="https://i.hizliresim.com/glsc93a.png" alt="slider2" />
              </div>
              <div>
                  <img src="https://i.hizliresim.com/6i7x9go.jpg" alt="slider3" />
              </div>
          </Carousel>
          <div className="headerStage">
            <h1>Featured Products</h1>
          </div>
          {loading ? ( <LoadingBox/> ) : error ? (  <MessageBox variant="danger">{error}</MessageBox> ) : (
          <>
            {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
            <div className="ProductsListStage">
              {products.map((product) => (
                <Product key={product._id} product={product}></Product>
              ))}
            </div>
            <div className="showallstage">
              <Route render={({history}) => <PListButton history={history}></PListButton>}></Route>
            </div>
          </>
        )}
        <div className="headerStage">
          <h1>Our Responsibility</h1>
        </div>
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
        <div className="HomeColumnStage">
          <div className="left">
            <small>TOOLS & ACCESSORIES</small>
            <h1>Handmade in small batches</h1>
            <p>Our tool and accessories are all made in the UK and beyond – produced ethically and finished to the highest standard.</p>
            <h4><Route render={({history}) => <SCollectionButton history={history}></SCollectionButton>}></Route></h4>
          </div>
          <div className="right">
            <img src="https://i.hizliresim.com/5yg7la0.png" alt="images" />
          </div>
        </div>
        <div className="HomeColumnStage2">
        <div className="left">
            <img src="https://i.hizliresim.com/q98fp49.png" alt="images" />
          </div>
          <div className="right">
            <small>ABOUT US</small>
            <h1>For balanced living.</h1>
            <p>We aim to Live Level – to pursue a balanced life. Where hard graft meets restful connection. Where urban meets wilderness.</p>
            <h4><Link to="/about">READ MORE</Link></h4>
          </div>
        </div>
        <div className="informationsStage">
          <div className="informationscard">
            <img src={infoimage1} alt="infocard"/>
            <h1>1 product purchased = 1 tree planted</h1>
          </div>
          <div className="informationscard">
            <img src={infoimage2} alt="infocard"/>
            <h1>Sustainable & Ethical Manufacturing</h1>
          </div>
          <div className="informationscard">
            <img src={infoimage3} alt="infocard"/>
            <h1>Free Exchanges & Easy Returns</h1>
          </div>
        </div>
    </div>
    )
}
