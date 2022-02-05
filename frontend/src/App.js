import "./index.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { BrowserRouter,Link,Route} from 'react-router-dom';
import CartScreen from "./screens/CartScreen";
import { useDispatch, useSelector } from "react-redux";
import SigninScreen from "./screens/SigninScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import EditProfileScreen from "./screens/EditProfileScreen";
import UserProfileScreen from "./screens/UserProfileScreen";
import AdminProfileScreen from "./screens/AdminProfileScreen";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import CreateScreen from "./screens/CreateScreen";
import OrderListScreen from "./screens/OrderListScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import SearchScreen from "./screens/SearchScreen";
import { useEffect, useState } from "react";
import { listProductCategories } from "./actions/productActions";
import LoadingBox from "./components/LoadingBox";
import MessageBox from "./components/MessageBox";
import DashboardScreen from "./screens/DashboardScreen";
import SupportScreen from './screens/SupportScreen';
import ChatBox from './components/ChatBox';
import { signout } from "./actions/userActions";
import FooterProducts from "./components/FooterProducts";
import ButtonMailto from "./components/ButtonMailto";
import AboutScreen from "./screens/AboutScreen.jsx";
import ContactScreen from "./screens/ContactScreen";
import PrivacyPolicyScreen from "./screens/PrivacyPolicyScreen";
import TermsConditionsScreen from "./screens/TermsConditionsScreen";
import FaqScreen from "./screens/FaqScreen";
import NavbarProducts from "./components/NavbarProducts";


function App(props) {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  const signoutHandler = () =>{
    dispatch(signout());
  }
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  //Değişkenleri tanımladığımız kod satırı.
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false); //Add Category Sidebar and Filter
  const dispatch = useDispatch();
  const productCategoryList = useSelector((state) => state.productCategoryList); //Add Category Sidebar and Filter
  const { loading:loadingCategories, error:errorCategories, categories } = productCategoryList; //Add Category Sidebar and Filter
  useEffect(() => { //Add Category Sidebar and Filter
    dispatch(listProductCategories()); //Add Category Sidebar and Filter
  },[dispatch]) //Add Category Sidebar and Filter

  return (
    <BrowserRouter>
        <aside className={sidebarIsOpen? 'open': ''}>
            <ul className="categories">
              <li className="sidebarHeaderStage">
                <strong className="uk-text-bold uk-text-muted">Categories</strong>
                <button onClick={() => setSidebarIsOpen(false)} className="close-sidebar" type="button">
                  <i className="fas fa-angle-left"></i>
                </button> 
              </li>
              {loadingCategories ? (
              <LoadingBox></LoadingBox>) : errorCategories ? (  <MessageBox variant="danger">{errorCategories}</MessageBox>) : 
                (
                categories.map((c) => (
                  <Link to={`/search/category/${c}`} onClick={() => setSidebarIsOpen(false)}><li key={c} className="categoriesli">{c}</li></Link>
                ))
              )}
            </ul>
        </aside>
          <header uk-sticky="true">
              <nav className="uk-navbar-container uk-background-primary uk-navbar-sticky uk-position-relative" uk-navbar="true">
                  <div className="uk-navbar-left">
                    <button type="button" className="open-sidebar uk-visible@m" onClick={() => setSidebarIsOpen(true)}>
                      <i className="fas fa-angle-right"></i>
                    </button>
                    <div className="uk-navbar-item uk-link-reset uk-text-muted uk-text-default"><Link to="/">BRAND</Link></div>
                  </div>
                  <div className="uk-navbar-right uk-visible@m">
                      <div className="uk-navbar-item">
                        <div className="uk-navbar-item uk-link-reset uk-text-default"><Link to="/about">About</Link></div>
                        <div className="uk-navbar-item uk-link-reset uk-text-default"><Link to="/contact-us">Contact Us</Link></div>
                        <div className="uk-navbar-item uk-link-reset uk-text-default">
                          <Route render={({history}) => <NavbarProducts history={history}></NavbarProducts>}></Route>
                        </div>
                        <div className="uk-navbar-item uk-link-reset uk-text-default">
                          <Link to="/cart">Cart
                            {cartItems.length > 0 && (
                            <span className="badge">{cartItems.length}</span>
                            )}
                          </Link>
                        </div>
                        {userInfo && userInfo.isAdmin && (
                          <>
                            <div className="uk-navbar-item uk-link-reset uk-text-default"><Link to="/admin">Admin Profile</Link></div>
                            <div div className="uk-navbar-dropdown">
                              <ul className="uk-nav uk-navbar-dropdown-nav">
                                  <li><Link to="/dashboard">Dashboard</Link></li>
                                  <li><Link to="/productlist">Products</Link></li>
                                  <li><Link to="/orderlist">Orders</Link></li>
                                  <li><Link to="/userlist">Users</Link></li>
                                  <li><Link to="/support">Support</Link></li>
                              </ul>
                            </div>
                          </>
                        )}
                        {userInfo ? (
                          <>
                          <div className="uk-navbar-item uk-link-reset uk-text-default"><Link to="/user">User Profile</Link></div>
                            <div className="uk-navbar-dropdown">
                                <ul className="uk-nav uk-navbar-dropdown-nav">
                                    <li><Link to="/editprofile">User Profile</Link></li>
                                    <li><Link to="/orderhistory">Order History</Link></li>
                                </ul>
                            </div>
                          <div className="uk-navbar-item uk-link-reset uk-text-default"><Link to="/signin" onClick={signoutHandler}>Sign Out</Link></div>
                          </>
                        ) : ( 
                          <div className="uk-navbar-item uk-link-reset uk-text-default"><Link to="/signin">Sign In</Link></div>
                        )}
                      </div>
                  </div>
                  <div className="uk-navbar-right uk-hidden@m">
                      <div className="uk-navbar-item">
                        <Link className="uk-link-reset uk-text-large" uk-icon="menu" uk-toggle="target: #offcanvas-nav"></Link>
                      </div>
                      <div id="offcanvas-nav" uk-offcanvas="overlay: true; flip:true; esc-close:false;">
                        <button className="uk-offcanvas-close uk-text-large" type="button" uk-close="true"></button>
                        <div className="uk-offcanvas-bar uk-flex uk-flex-column">
                            <ul className="uk-nav uk-nav-default uk-nav-center uk-margin-auto-vertical uk-text-large">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact-us">Contact Us</Link></li>
                                <li><Route render={({history}) => <NavbarProducts history={history}></NavbarProducts>}></Route></li>
                                {userInfo && userInfo.isAdmin && (
                                  <li><Link to="/admin">Admin Profile</Link></li>
                                )}
                                {userInfo ? (
                                  <li><Link to="/user">User Profile</Link></li>
                                ) : ( 
                                  <li><Link to="/signin">Sign In</Link></li>
                                )}
                            </ul>
                        </div>
                      </div>
                  </div>
              </nav>
          </header>
          <main>
            <Route path="/cart/:id?" component={CartScreen}/>
            <Route path="/product/:id" component={ProductScreen} exact/>
            <Route path="/product/:id/edit" component={ProductEditScreen} exact/>
            <Route path="/ProductCreate" component= {CreateScreen} exact/>
            <Route path="/signin" component={SigninScreen}/>
            <Route path="/register" component={RegisterScreen}/>
            <Route path="/shipping" component={ShippingAddressScreen}/>
            <Route path="/payment" component={PaymentMethodScreen}/>
            <Route path="/placeorder" component={PlaceOrderScreen}/>
            <Route path="/order/:id" component={OrderScreen}/>
            <Route path="/orderhistory" component={OrderHistoryScreen}/>
            <Route path="/search/name/:name?" component={SearchScreen} exact/>
            <Route path="/search/category/:category" component={SearchScreen} exact/>
            <Route path="/search/category/:category/name/:name" component={SearchScreen} exact/>
            <Route path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber" component={SearchScreen} exact/>
            <PrivateRoute path="/editprofile" component={EditProfileScreen}/>
            <PrivateRoute path="/user" component={UserProfileScreen}/>
            <AdminRoute path="/admin" component={AdminProfileScreen} exact/>
            <AdminRoute path="/productlist" component={ProductListScreen} exact/>
            <AdminRoute path="/productlist/pageNumber/:pageNumber" component={ProductListScreen} exact/>
            <AdminRoute path="/orderlist" component={OrderListScreen} exact/>
            <AdminRoute path="/userlist" component={UserListScreen}/>
            <AdminRoute path="/user/:id/edit" component={UserEditScreen}/>
            <AdminRoute path="/dashboard" component={DashboardScreen}/>
            <AdminRoute path="/support" component={SupportScreen}/>
            <Route path="/about" component={AboutScreen}/>
            <Route path="/" component={HomeScreen} exact/>
            <Route path="/contact-us" component={ContactScreen}/>
            <Route path="/privacy" component={PrivacyPolicyScreen}/>
            <Route path="/terms" component={TermsConditionsScreen}/>
            <Route path="/faq" component={FaqScreen}/>
          </main>
          <footer className="row center">
            {userInfo && !userInfo.isAdmin && <ChatBox userInfo={userInfo} />}
            <div className="footer">
              <div className="inner-footer">
                <div className="footer-items">
                  <h1 className="footerh1">Brand</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
                <div className="footer-items">
                  <h2 className="footerh2">Quick Links</h2>
                  <div className="lineStage">
                    <div className="border"></div>
                  </div>
                  <ul className="footerul">
                    <Link to="/"><li className="footerli">Home</li></Link>
                    <Link to="/about"><li className="footerli">About</li></Link>
                    {userInfo ? (
                      <Link to="/user"><li className="footerli">User Profile</li></Link>
                    ) : ( 
                      <Link to="/signin"><li className="footerli">Sign In</li></Link>
                    )}
                    <Route render={({history}) => <FooterProducts history={history}></FooterProducts>}></Route>
                    <Link to="/contact-us"><li className="footerli">Contact Us</li></Link>
                  </ul>
                </div>
                <div className="footer-items">
                  <h2 className="footerh2">OTHER LINKS</h2>
                  <div className="lineStage">
                    <div className="border"></div>
                  </div>
                  <ul className="footerul">
                    <Link to="/privacy"><li className="footerli">Privacy & Policy</li></Link>
                    <Link to="/terms"><li className="footerli">Terms & Conditions</li></Link>
                    <Link to="/faq"><li className="footerli">FAQ</li></Link>
                  </ul>
                </div>
                <div className="footer-items">
                  <h2 className="footerh2">Contact Us</h2>
                  <div className="lineStage">
                    <div className="border"></div>
                  </div>
                  <ul className="footerul">
                    <li className="footerli"><i className="fa fa-map-marker" aria-hidden="true"></i>1, XYZ Street, New Delhi</li>
                    <li className="footerli"><i className="fa fa-phone" aria-hidden="true"></i>1234567890</li>
                    <li className="footerli"><i className="fa fa-envelope" aria-hidden="true"></i><ButtonMailto label="support@beyond.com" mailto="mailto:support@beyond.com"/></li>
                  </ul>
                  <div className="social-media">
                    <Link to="/"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                    <Link to="/"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                    <Link to="/"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
                    <Link to="/"><i className="fa fa-google-plus" aria-hidden="true"></i></Link>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                Copyright &copy; Brand 2021. All rights reserved.
              </div>
            </div>
          </footer>
    </BrowserRouter>
  );
}

export default App;
