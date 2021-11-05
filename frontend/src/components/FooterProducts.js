import React, {useState} from 'react'
import { Link } from 'react-router-dom';

export default function FooterProducts(props) {
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
    return (<Link onClick={submitHandler}><li className="footerli">Products</li></Link>)
}
