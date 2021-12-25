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
import ProfileScreen from "./screens/ProfileScreen";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
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
import './components/NavBar/Navbar.css';
import Dropdown from './components/NavBar/Dropdown';
import DropdownUser from './components/NavBar/DropdownUser';
import { signout } from "./actions/userActions";
import FooterProducts from "./components/FooterProducts";
import ButtonMailto from "./components/ButtonMailto";
import AboutScreen from "./screens/AboutScreen.jsx";
import ContactScreen from "./screens/ContactScreen";
import PrivacyPolicyScreen from "./screens/PrivacyPolicyScreen";
import TermsConditionsScreen from "./screens/TermsConditionsScreen";
import FaqScreen from "./screens/FaqScreen";


function App(props) {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  const signoutHandler = () =>{
    closeMobileMenu(true);
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
  //Navbar Dropdown Menu
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [userdropdown, setUserDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onUserMouseEnter = () => {
    if (window.innerWidth < 960) {
        setUserDropdown(false);
    } else {
        setUserDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const onUserMouseLeave = () => {
    if (window.innerWidth < 960) {
        setUserDropdown(false);
    } else {
        setUserDropdown(false);
    }
  };

  return (
    <BrowserRouter>
        <aside className={sidebarIsOpen? 'open': ''}>
            <ul className="categories">
              <li className="sidebarHeaderStage">
                <strong>Categories</strong>
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
        <nav className='navbar'>
          <button type="button" className="open-sidebar" onClick={() => setSidebarIsOpen(true)}>
              <i className="fas fa-angle-right"></i>
          </button>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            BRAND
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/cart' className='nav-links' onClick={closeMobileMenu}>
                Cart {cartItems.length > 0 && (
                      <span className="badge">{cartItems.length}</span>
                    )}
              </Link>
            </li>
            {userInfo && userInfo.isAdmin && (
              <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  <Link to="/dashboard" className='nav-links' onClick={closeMobileMenu}>
                  Admin Profile <i className='fas fa-caret-down' />
                  </Link>
                  {dropdown && <Dropdown />}
              </li>
            )}
            <Link>
              {userInfo ? (
                          <li className='nav-item' onMouseEnter={onUserMouseEnter} onMouseLeave={onUserMouseLeave} >
                              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                              User Profile <i className='fas fa-caret-down' />
                              </Link>
                              {userdropdown && <DropdownUser/>}
                              <Link to='/signin' className='nav-links' onClick={signoutHandler}>
                                  Sign Out
                              </Link>
                          </li>
              ) : ( 
                  <li className='nav-item'>
                  <Link to='/signin' className='nav-links' onClick={closeMobileMenu}>
                    Sign In
                  </Link>
                  </li>
              )}
            </Link>
          </ul>
        </nav>
          <main>
            <Route path="/cart/:id?" component={CartScreen}/>
            <Route path="/product/:id" component={ProductScreen} exact/>
            <Route path="/product/:id/edit" component={ProductEditScreen} exact/>
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
            <PrivateRoute path="/profile" component={ProfileScreen}/>
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
                    <Link to="/signin"><li className="footerli">Sign In</li></Link>
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
                    <li className="footerli"><i class="fa fa-map-marker" aria-hidden="true"></i>1, XYZ Street, New Delhi</li>
                    <li className="footerli"><i class="fa fa-phone" aria-hidden="true"></i>1234567890</li>
                    <li className="footerli"><i class="fa fa-envelope" aria-hidden="true"></i><ButtonMailto label="support@beyond.com" mailto="mailto:support@beyond.com"/></li>
                  </ul>
                  <div class="social-media">
                    <Link to="/"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                    <Link to="/"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                    <Link to="/"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
                    <Link to="/"><i className="fa fa-google-plus" aria-hidden="true"></i></Link>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                Copyright &copy; Beyond 2021. All rights reserved.
              </div>
            </div>
          </footer>
    </BrowserRouter>
  );
}

export default App;
