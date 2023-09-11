import './App.css';
import Home from './pages/Home.js';
import React, {useState, useEffect} from 'react';

function App() {

  let [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);
  
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
