import React from 'react';
import './App.css';
import stage1 from './components/sounds/ussr.wav';
import stage2 from './components/sounds/china.wav';
import stage3 from './components/sounds/japan.wav';
import stage4 from './components/sounds/usa.wav';
import stage5 from './components/sounds/india.wav';
import stage6 from './components/sounds/japan.wav';
import stage7 from './components/sounds/usa.wav';

function App() {
  //Audio for Body Section Of Page (STAGE LOCATIONS) left -> right

  const audio = new Audio(stage1);
  const audio2 = new Audio(stage2);
  const audio3 = new Audio(stage3);
  const audio4 = new Audio(stage4);
  const audio5 = new Audio(stage5);
  const audio6 = new Audio(stage6);
  const audio7 = new Audio(stge7);

  const ussr = () => {
    audio.play();
  };

  const china = () => {
    audio2.play();
  };

  const japan = () => {
    audio3.play();
  };

  const usa = () => {
    audio4.play();
  };

  const india = () => {
    audio5.play();
  };

  const japan2 = () => {
    audio6.play();
  };

  return (
    <div className="App">
      <header className="App-header">{/* <button>Click ME!</button> */}</header>
      <body>
        {/* <audio autoplay loop>
          <source src="./sounds/character_select.mp3" type="audio/mpeg" />
        </audio> */}
        {/* FIRST ROW */}
        <div className="firstrow">
          <button onClick={ussr}>USSR</button>
          <button onClick={china}>China</button>
          <button onClick={japan}>Japan</button>
          <button onClick={usa}>USA</button>
        </div>

        {/* 2ND ROW */}
        <div className="secondrow">
          <button onClick={india}>India</button>
          <button onClick={japan2}>Japan2</button>
        </div>
      </body>
      <footer></footer>
    </div>
  );
}

export default App;
