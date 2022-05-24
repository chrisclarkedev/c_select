import React from 'react';
import './App.css';
import tester from './components/sounds/japan.wav';
import tester2 from './components/sounds/perfect.wav';

function App() {
  const audio = new Audio(tester);
  const audio2 = new Audio(tester2);

  const start = () => {
    audio.play();
  };

  const start2 = () => {
    audio2.play();
  };

  return (
    <div className="App">
      <header className="App-header">{/* <button>Click ME!</button> */}</header>
      <body>
        {/* <audio autoplay loop>
          <source src="./sounds/character_select.mp3" type="audio/mpeg" />
        </audio> */}
        <div></div>
      </body>
      <footer>
        <button onClick={start}>Play</button>
        <button onClick={start2}>Play2</button>
      </footer>
    </div>
  );
}

export default App;
