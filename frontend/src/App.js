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
import SellerRoute from './components/SellerRoute';
import SellerScreen from './screens/SellerScreen';
import SearchScreen from "./screens/SearchScreen";
import { useEffect, useState } from "react";
import { listProductCategories } from "./actions/productActions";
import LoadingBox from "./components/LoadingBox";
import MessageBox from "./components/MessageBox";
import MapScreen from "./screens/MapScreen";
import DashboardScreen from "./screens/DashboardScreen";
import SupportScreen from './screens/SupportScreen';
import ChatBox from './components/ChatBox';
import Navbar from "./components/NavBar/Navbar";


function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  //Değişkenleri tanımladığımız kod satırı.
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false); //54.Add Category Sidebar and Filter
  const dispatch = useDispatch();
  const productCategoryList = useSelector((state) => state.productCategoryList); //54.Add Category Sidebar and Filter
  const { loading:loadingCategories, error:errorCategories, categories } = productCategoryList; //54.Add Category Sidebar and Filter
  useEffect(() => { //54.Add Category Sidebar and Filter
    dispatch(listProductCategories()); //54.Add Category Sidebar and Filter
  },[dispatch]) //54.Add Category Sidebar and Filter
  return (
    <BrowserRouter>
    <Navbar/>
        <div className="grid-container">
          <aside className={sidebarIsOpen? 'open': ''}>
            <ul className="categories">
              <li>
                <strong>Categories</strong>
                <button onClick={() => setSidebarIsOpen(false)} className="clıse-sidebar" type="button">
                  <i className="fas fa-caret-left"></i>
                </button> 
              </li>
              {loadingCategories ? (
              <LoadingBox></LoadingBox>) : errorCategories ? (  <MessageBox variant="danger">{errorCategories}</MessageBox>) : 
                (
                categories.map((c) => (
                  <li key={c}>
                    <Link to={`/search/category/${c}`} onClick={() => setSidebarIsOpen(false)}>{c}</Link>
                  </li>
                ))
              )}
            </ul>
          </aside>
          <main>
            <Route path="/seller/:id" component={SellerScreen}/>
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
            <PrivateRoute path="/map" component={MapScreen}/>
            <AdminRoute path="/productlist" component={ProductListScreen} exact/>
            <AdminRoute path="/productlist/pageNumber/:pageNumber" component={ProductListScreen} exact/>
            <AdminRoute path="/orderlist" component={OrderListScreen} exact/>
            <AdminRoute path="/userlist" component={UserListScreen}/>
            <AdminRoute path="/user/:id/edit" component={UserEditScreen}/>
            <AdminRoute path="/dashboard" component={DashboardScreen}/>
            <AdminRoute path="/support" component={SupportScreen}/>
            <SellerRoute path="/productlist/seller" component={ProductListScreen}/>
            <SellerRoute path="/orderlist/seller" component={OrderListScreen}/>
            <Route path="/" component={HomeScreen} exact/>
          </main>
          <footer className="row center">
            {userInfo && !userInfo.isAdmin && <ChatBox userInfo={userInfo} />}
            <div>All right reserved</div>{' '}
          </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
