import Search from '../components/Search';
import Info from '../components/Info.js';
import Left from '../components/Left';
import Right from '../components/Right.js';
import Forecast from '../components/Forecast.js';
import './Home.css';
import { useState, useEffect } from 'react';

function Home() {
    let [weatherData, setWeatherData] = useState({});
    let [weekDay, setWeekDay] = useState("");
    
    const changeBodyClass = (newClass) => {
        document.body.className = newClass;
    };

    useEffect(() => {
        if (typeof weatherData.a?.is_day !== 'undefined') {
          const newClass = weatherData.a.is_day === 0 ? 'night' : 'morning';
          changeBodyClass(newClass);
        }
      }, [weatherData]);

    return (
    <>
        <Search 
            setWeatherData={setWeatherData} 
            setWeekDay={setWeekDay}
        />
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