import './App.css';
import Search from './components/Search';
import Info from './components/Info.js';
import Left from './components/Left';
import Right from './components/Right.js';

function App() {
  return (
    <div className="App">
      <Search />
      <main>
        <Info />
        <Left />
        <Right />
      </main>
    </div>
  );
}

export default App;
