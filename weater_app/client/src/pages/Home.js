import Search from '../components/Search';
import Info from '../components/Info.js';
import Left from '../components/Left';
import Right from '../components/Right.js';
import Forecast from '../components/Forecast.js';
import './Home.css';
import { useState } from 'react';

function Home() {
    let [weatherData, setWeatherData] = useState({});
    let [weekDay, setWeekDay] = useState("");
    
    return (
    <>
        <Search setWeatherData={setWeatherData} setWeekDay={setWeekDay} />
        <main>
            <Info data={weatherData} day={weekDay}/>
            <Left data={weatherData}/>
            <Right data={weatherData}/>
            <Forecast data={weatherData}/>
        </main>
    </>
    );
}

export default Home;