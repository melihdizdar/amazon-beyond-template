import React, {useState} from 'react'

export default function PListButton(props) {
    const [name] = useState(''); //53.Create Search Box and Search Screen
    const submitHandler = (e) => { //53.Create Search Box and Search Screen
        e.preventDefault(); //53.Create Search Box and Search Screen
        props.history.push(`/search/name/${name}`); //53.Create Search Box and Search Screen
    }
    return (
        <form className="search">
            <div className="row">
                <button className="primary" type="submit" onClick={submitHandler}>Show All</button>
            </div>
        </form>
    )
}
