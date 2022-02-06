import { Link,Route} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../actions/userActions";
import NavbarProducts from "./NavbarProducts";

export default function Navbar() {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();
    const signoutHandler = () =>{
        dispatch(signout());
    }
    return (
        <header uk-sticky="true">
        <nav className="uk-navbar-container uk-background-primary uk-navbar-sticky uk-position-relative" uk-navbar="true">
            <div className="uk-navbar-left">
                <div className="uk-navbar-item uk-link-reset uk-text-muted uk-text-default uk-visible@m"><Link to="/">BRAND</Link></div>
                <div className="uk-navbar-item uk-link-reset uk-text-muted uk-text-default@m uk-hidden@m">
                    <Link to="/cart">Cart{cartItems.length > 0 && (<span>({cartItems.length})</span>)}</Link>
                </div>
            </div>
            <div className="uk-navbar-center uk-hidden@m">
                <div className="uk-navbar-item uk-link-reset uk-text-muted uk-text-default uk-hidden@m"><Link to="/">BRAND</Link></div>
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
                    <span>({cartItems.length})</span>
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
  );
}
