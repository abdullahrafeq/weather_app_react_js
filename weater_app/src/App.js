import './App.css';
import Search from './components/Search.js';
import Info from './components/Info.js';

function App() {
  return (
    <div className="App">
      <Search />
      <main>
        <Info />
      </main>
    </div>
  );
}

export default App;
