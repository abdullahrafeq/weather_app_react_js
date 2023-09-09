import './App.css';
import Search from './components/Search';
import Info from './components/Info.js';
import Left from './components/Left';
import Right from './components/Right.js';
import Forecast from './components/Forecast.js';


function App() {
  return (
    <div className="App">
      <Search />
      <main>
        <Info />
        <Left />
        <Right />
        <Forecast />
      </main>
    </div>
  );
}

export default App;
