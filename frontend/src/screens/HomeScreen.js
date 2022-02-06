import React, { useEffect} from 'react';
import Product from "../components/Product";
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { Link,Route } from 'react-router-dom';
import PListButton from '../components/PListButton';
import HomeCard from '../components/HomeCard';
import { listHomeCards } from '../actions/homeActions';
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
          {/*Navbar Section*/}
          <section>
            <div uk-slideshow="uk-position-relative min-height: 150; max-height: 600; animation: fade; autoplay:true; autoplay-interval:2500;" className="slider">
                <div className="uk-visible-toggle" tabindex="-1">
                    <ul className="uk-slideshow-items">
                        <li>
                            <img src="https://i.hizliresim.com/pmfu2vf.jpg" className="uk-width-1-1 uk-height-1-1 border-radius" alt="slider1" uk-img="true"/>
                        </li>
                        <li>
                            <img src="https://i.hizliresim.com/glsc93a.png" className="uk-width-1-1 uk-height-1-1 border-radius" alt="slider2" uk-img="true"/>
                        </li>
                        <li>
                            <img src="https://i.hizliresim.com/6i7x9go.jpg" className="uk-width-1-1 uk-height-1-1 border-radius" alt="slider3" uk-img="true"/>
                        </li>
                    </ul>
                </div>
            </div>
          </section>
          {/*Products Header Section*/}
          <section className="uk-section">
            <h3 className="uk-container uk-flex uk-flex-center uk-text-muted uk-text-bold" uk-scrollspy="cls: uk-animation-fade; delay: 300; repeat:true;">Featured Products</h3>
          </section>
          {loading ? ( <LoadingBox/> ) : error ? (  <MessageBox variant="danger">{error}</MessageBox> ) : (
          <>
            {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
            {/*Products Section*/}
            <section className="uk-section uk-padding-remove-top">
              <div className="uk-container">
                <div className="uk-grid-large uk-child-width-1-1 uk-child-width-1-3@s uk-child-width-1-4@m uk-flex-center uk-flex-middle" uk-grid="true" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 100; repeat:true;">
                  {products.map((product) => (
                  <Product key={product._id} product={product}></Product>
                  ))}
                </div>
                <div className="uk-flex uk-flex-right">
                  <Route render={({history}) => <PListButton history={history}></PListButton>}></Route>
                </div>
              </div>
            </section>
          </>
        )}
        {/*Home Card Header Section*/}
        <section className="uk-section uk-padding-remove-top">
          <div className="uk-container uk-flex uk-flex-center" uk-scrollspy="cls: uk-animation-fade; delay: 300; repeat:true;">
            <h1 className="uk-text-muted uk-text-bold uk-padding-remove">Our Responsibility</h1>
          </div>
        </section>
        {loadingHomeCard ? ( <LoadingBox></LoadingBox>) : errorHomeCard ? (<MessageBox variant="danger">{errorHomeCard}</MessageBox>) : (
        <>
            {homeCards.length === 0 && <MessageBox>No Home Card Found</MessageBox>}
            {/*Home Card Section*/}
            <section className="uk-section uk-padding-remove-top">
              <div>
                <div className="uk-grid-large uk-child-width-1-3@s uk-flex-center" uk-grid="true" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 200; repeat:true;">
                  {homeCards.map((homeCard) => (
                    <HomeCard key={homeCard._id} homeCard={homeCard}></HomeCard>
                  ))}
                </div>
              </div>
            </section>
        </>
        )}
        {/*Home Column Section*/}
        <section>
          <div uk-grid="true" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 300; repeat:true;">
            <div className="uk-width-1-2@m uk-card uk-flex uk-flex-middle uk-flex-first@m uk-flex-last">
              <div className="uk-card-body">
                <small className="uk-text-muted">TOOLS & ACCESSORIES</small>
                <h1 className="uk-text-muted uk-text-bold">Handmade in small batches</h1>
                <p>Our tool and accessories are all made in the UK and beyond – produced ethically and finished to the highest standard.</p>
                <h4 className="uk-link-reset uk-text-muted"><Route render={({history}) => <SCollectionButton history={history}></SCollectionButton>}></Route></h4>
              </div>
            </div>
            <div className="uk-width-1-2@m uk-position-relative uk-padding-remove uk-flex-last@m uk-flex-first">
              <img src="https://i.hizliresim.com/5yg7la0.png" alt="hcolumn_1" uk-img="true" className="uk-width-1-1 uk-height-1-1 border-radius"/>
            </div>
          </div>
        </section>
        <section>
          <div uk-grid="true" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 300; repeat:true;">
            <div className="uk-width-1-2@m uk-position-relative uk-padding-remove">
              <img src="https://i.hizliresim.com/q98fp49.png" alt="hcolumn_2" uk-img="true" className="uk-width-1-1 uk-height-1-1 border-radius"/>
            </div>
            <div className="uk-width-1-2@m uk-card uk-flex uk-flex-middle">
              <div className="uk-card-body">
                <small className="uk-text-muted">ABOUT US</small>
                <h1 className="uk-text-muted uk-text-bold">For balanced living.</h1>
                <p>We aim to Live Level – to pursue a balanced life. Where hard graft meets restful connection. Where urban meets wilderness.</p>
                <h4 className="uk-link-reset uk-text-muted"><Link to="/about">READ MORE</Link></h4>
              </div>
            </div>
          </div>
        </section>
        {/*Home Icon Section*/}
        <section className="uk-section-large">
          <div className="uk-container uk-container-large">
            <div className="uk-grid-medium uk-child-width-1-3@m" uk-grid="true" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 300; repeat:true;">
              <div className="uk-card">
                <div className="uk-card-media-top uk-flex uk-flex-center">
                  <img src={infoimage1} alt="infocard" uk-img="true" className="home-icon"/>
                </div>
                <div className="uk-padding uk-padding-remove-horizontal">
                  <h4 className="uk-text-muted uk-text-center uk-text-bold">1 product purchased = 1 tree planted</h4>
                </div>
              </div>
              <div className="uk-card">
                <div className="uk-card-media-top uk-flex uk-flex-center">
                  <img src={infoimage2} alt="infocard" uk-img="true" className="home-icon"/>
                </div>
                <div className="uk-padding uk-padding-remove-horizontal">
                  <h4 className="uk-text-muted uk-text-center uk-text-bold">Sustainable & Ethical Manufacturing</h4>
                </div>
              </div>
              <div className="uk-card">
                <div className="uk-card-media-top uk-flex uk-flex-center">
                  <img src={infoimage3} alt="infocard" uk-img="true" className="home-icon"/>
                </div>
                <div className="uk-padding uk-padding-remove-horizontal">
                  <h4 className="uk-text-muted uk-text-center uk-text-bold">Free Exchanges & Easy Returns</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
    )
}
