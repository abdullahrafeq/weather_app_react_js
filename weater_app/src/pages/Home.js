import Search from '../components/Search';
import Info from '../components/Info.js';
import Left from '../components/Left';
import Right from '../components/Right.js';
import Forecast from '../components/Forecast.js';
import './Home.css';

function Home() {
    return (
    <>
        <Search />
        <main>
            <Info />
            <Left />
            <Right />
            <Forecast />
        </main>
    </>
    );
}

export default Home;