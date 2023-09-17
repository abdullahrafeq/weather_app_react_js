import './Info.css';
import InfoData from '../data/InfoData.js';
import changeInfo from '../functions/changeInfo';

function Info({data, day}) {
    changeInfo(data, InfoData, day);
    
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