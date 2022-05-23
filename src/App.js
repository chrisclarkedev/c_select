import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Hello World</h1> */}
        <audio
          src="./sounds/character_select.mp3"
          id="audio"
          loop="loop"
          autoplay="autoplay"
        ></audio>
      </header>
    </div>
  );
}

export default App;
