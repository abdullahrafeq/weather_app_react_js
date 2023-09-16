import FontAwesomeIcon from "../assets/Logos/FontAwesome";
function ForecastCard({date, time, icon, temperature}) {
    return (
        <li>
            <p>{date}</p>
            <p>{time}</p>
            <p><FontAwesomeIcon iconName={icon}/></p>
            <p>{temperature}</p>
        </li>
    );
}

export default ForecastCard;