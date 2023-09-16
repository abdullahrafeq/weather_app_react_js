import Search from '../components/Search';
import Info from '../components/Info.js';
import Left from '../components/Left';
import Right from '../components/Right.js';
import Forecast from '../components/Forecast.js';
import './Home.css';
import { useState } from 'react';

function Home() {
    let [weatherData, setWeatherData] = useState({});
    
    return (
    <>
        <Search setWeatherData={setWeatherData}/>
        <main>
            <Info />
            <Left />
            <Right />
            <Forecast data={weatherData}/>
        </main>
    </>
    );
}

export default Home;