import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function NavbarProducts(props) {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [name] = useState(''); //53.Create Search Box and Search Screen
    const submitHandler = (e) => { //53.Create Search Box and Search Screen
        closeMobileMenu(true);
        handleClick(true);
        e.preventDefault(); //53.Create Search Box and Search Screen
        props.history.push(`/search/name/${name}`); //53.Create Search Box and Search Screen
    }
    return (<Link className='nav-links' onClick={submitHandler}>Products</Link>)
}
