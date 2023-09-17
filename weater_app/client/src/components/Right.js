import DetailItem from './DetailItem.js';
import RightData  from '../data/RightData.js';
import changeRightSide from '../functions/changeRightSide.js';
import './Right.css';

function Right({data}) {
    changeRightSide(data, RightData);
    return (
        <aside className="right">
            <ul>         
                {RightData.map((item, index) => {
                    return (
                        <DetailItem 
                            key={index} 
                            title={item.title} 
                            value={item.value}
                        />
                    );
                })}  
            </ul>
        </aside>
    );
}

export default Right;