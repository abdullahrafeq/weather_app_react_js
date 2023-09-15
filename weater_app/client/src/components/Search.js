import './Search.css';
import React, {useState} from 'react';

function Search() {
    let [inputValue, setInputValue] = useState("");
    
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const getLocation = () => {
        console.log("1: "+inputValue);
        fetch(`http://localhost:5000/location/${inputValue}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return fetch(`http://localhost:5000/weather/${data[0].lat}/${data[0].lon}`)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error("Error fetching data:", error));
    }
      
    return (
    <header>
        <form>
            <input 
                readOnly={false}
                placeholder="Search" 
                className="search-icon" 
                type="text" 
                id="search" 
                value={inputValue}
                onChange={handleInputChange}>
            </input>
            <button type="button" id="btn" onClick={getLocation}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </form>
    </header>
    );
}
export default Search;