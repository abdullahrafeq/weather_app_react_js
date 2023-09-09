import DetailItem from './components/DetailItem';
import RightData  from '../data/RightData';

function Right() {

    return (
        <aside class="right">
            <ul>         
                {RightData.map((item, index) => {
                    <DetailItem title={item.title} value={item.value}/>
                })}  
            </ul>
        </aside>
    );
}

export default Right;