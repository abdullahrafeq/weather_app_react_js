import './Left.css';
import 'font-awesome/css/font-awesome.min.css';

function Left() {
    return (
        <aside className="left">
            <span id="mainWeatherIcon">
                <i className="fa-solid fa-cloud"></i>
            </span>
            <span>
                <p id="temp">

                </p>
                <p id="weatherDescription">
                    Overcast clouds
                </p>
            </span>
        </aside>
    );
}

export default Left;