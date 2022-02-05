import React, {useState} from 'react'
import { Link } from 'react-router-dom';

export default function NavbarProducts(props) {
    const [name] = useState(''); //53.Create Search Box and Search Screen
    const submitHandler = (e) => { //53.Create Search Box and Search Screen
        e.preventDefault(); //53.Create Search Box and Search Screen
        props.history.push(`/search/name/${name}`); //53.Create Search Box and Search Screen
    }
    return (<Link onClick={submitHandler}>Products</Link>)
}
