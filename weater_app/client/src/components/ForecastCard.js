function ForecastCard({date, time, icon, temperature}) {
    return (
        <li>
            <p>{date}</p>
            <p>{time}</p>
            <p>{icon}</p>
            <p>{temperature}{'\u00b0'}</p>
        </li>
    );
}

export default ForecastCard;