import ForecastCard from './ForecastCard.js';
import './Forecast.css';

function Forecast() {
    return (
        <section class="daily">
            <p>
                Forecast
            </p>
            <ul id="forecast">
                <ForecastCard />
            </ul>
        </section>
    );
}

export default Forecast;