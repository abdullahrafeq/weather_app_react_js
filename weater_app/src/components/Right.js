import DetailItem from './DetailItem.js';
import RightData  from '../data/RightData.js';

function Right() {

    return (
        <aside className="right">
            <ul>         
                {RightData.map((item, index) => {
                    console.log(item.title);
                    return (
                        <DetailItem key={index} title={item.title} value={item.value}/>
                    );
                })}  
            </ul>
        </aside>
    );
}

export default Right;