import ForecastCard from './ForecastCard.js';
import './Forecast.css';
import ForeCastData from '../data/ForeCastData.js';

function Forecast() {
    return (
        <section className="daily">
            <p>
                Forecast
            </p>
            <ul id="forecast">
                {ForeCastData.map((card) => {
                    return (
                        <ForecastCard 
                            date={card.date} 
                            time={card.time}
                            icon={card.icon} 
                            temperature={card.temperature}
                        />
                    );
                })}
            </ul>
        </section>
    );
}

export default Forecast;