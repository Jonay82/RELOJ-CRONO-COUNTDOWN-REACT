
import './App.sass';
import  './component/Digital.jsx'
import Digital from './component/Digital.jsx'
import Countdown from './component/Countdown.jsx'
import Stopwatch from './component/Stopwatch';

function App() {
  return (
    <div class="master-container">
            <Digital> </Digital>
            <Countdown></Countdown>
            <Stopwatch></Stopwatch>
    </div>
      

  );
}

export default App;
