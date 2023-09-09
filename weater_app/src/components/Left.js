import './Left.css';
import FontAwesomeIcon from '../assets/Logos/FontAwesome';

function Left() {
    return (
        <aside className="left">
            <span id="mainWeatherIcon">
                <FontAwesomeIcon iconName={"cloud"}/>
            </span>
            <span>
                <p id="temp">
                    7{'\u00b0'}
                </p>
                <p id="weatherDescription">
                    Overcast clouds
                </p>
            </span>
        </aside>
    );
}

export default Left;