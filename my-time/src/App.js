import logo from './logo.svg';
import './App.css';
import Stopwatch from './Stopwatch';

function App() {
  const date = new Date();
  const showtime = date.getMinutes()+':'+date.getSeconds();
  return (
    <div className="App">
      <Stopwatch/>
    </div>
  );
}

export default App;
