import ForecastCard from './ForecastCard.js';
import './Forecast.css';
import ForeCastData from '../data/ForeCastData.js';
import changeForeCastCard from '../functions/changeForecastCard.js';

function Forecast({data}) {
    changeForeCastCard(data, ForeCastData);
    
    return (
        <section className="daily">
            <p>
                Forecast
            </p>
            <ul id="forecast">
                {
                ForeCastData.map((card, index) => {
                    return (
                        <ForecastCard 
                            key={index}
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