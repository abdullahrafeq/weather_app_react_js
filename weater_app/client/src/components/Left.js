import './Left.css';
import FontAwesomeIcon from '../assets/Logos/FontAwesome';
import LeftData  from '../data/LeftData.js';
import changeLeft from '../functions/changeLeft.js';

function Left({data}) {
    changeLeft(data, LeftData);

    return (
        <aside className="left">
            <span id="mainWeatherIcon">
                <FontAwesomeIcon iconName={LeftData[0].icon}/>
            </span>
            <span>
                <p id="temp">
                    {LeftData[0].temperature}{'\u00b0'}
                </p>
                <p id="weatherDescription">
                    {LeftData[0].description}
                </p>
            </span>
        </aside>
    );
}

export default Left;