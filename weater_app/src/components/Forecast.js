import ForecastCard from './ForecastCard.js';

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