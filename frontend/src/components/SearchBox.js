import React, {useState} from 'react'
import "../screens/Styles/Search/search.css";

export default function SearchBox(props) {
    const [name, setName] = useState(''); //53.Create Search Box and Search Screen
    const submitHandler = (e) => { //53.Create Search Box and Search Screen
        e.preventDefault(); //53.Create Search Box and Search Screen
        props.history.push(`/search/name/${name}`); //53.Create Search Box and Search Screen
    }
    return (
        <form onSubmit={submitHandler}>
            <div class="uk-inline">
                <button class="uk-form-icon uk-form-icon-flip" uk-icon="icon: search" type="submit"></button>
                <input type="text" name="q" id="q" className="uk-input" onChange={(e) => setName(e.target.value)}></input>
            </div>
        </form>
    )
}
