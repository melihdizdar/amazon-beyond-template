import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import DropdownUser from './DropdownUser';
import DropdownSeller from './DropdownSeller';
import { signout } from "../../actions/userActions";

function Navbar() {
//Değişkenleri tanımladığımız kod satırı.
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () =>{
    closeMobileMenu(true);
    dispatch(signout());
  }
//Navbar Dropdown Menu
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [userdropdown, setUserDropdown] = useState(false);
  const [sellerdropdown, setSellerDropdown] = useState(false);

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

  const onSellerMouseEnter = () => {
    if (window.innerWidth < 960) {
        setSellerDropdown(false);
    } else {
        setSellerDropdown(true);
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

  const onSellerMouseLeave = () => {
    if (window.innerWidth < 960) {
        setSellerDropdown(false);
    } else {
        setSellerDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          BEYOND
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
          {userInfo && userInfo.isSeller && (
            <li className='nav-item' onMouseEnter={onSellerMouseEnter} onMouseLeave={onSellerMouseLeave}>
                <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                Seller<i className='fas fa-caret-down' />
                </Link>
                {sellerdropdown && <DropdownSeller />}
            </li>
          )}
          {userInfo && userInfo.isAdmin && (
            <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                Admin Profile <i className='fas fa-caret-down' />
                </Link>
                {dropdown && <Dropdown />}
            </li>
          )}
          <Link>
            {userInfo ? (
                        <li className='nav-item' onMouseEnter={onUserMouseEnter} onMouseLeave={onUserMouseLeave} >
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
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
    </>
  );
}

export default Navbar;