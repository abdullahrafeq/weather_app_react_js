import './Info.css';
import InfoData from '../data/InfoData.js';

function Info({data}) {
    return (
        <section className="info">
            <p id="place">
                {InfoData[0].location}
            </p>
            <p id="weekday">
                {InfoData[0].weekDay}
            </p>
        </section>
    );
}

export default Info;