import React from 'react';
import audio from './sounds/character_select.mp3';

class AudioTest extends Component {
  playAudio = () => {
    new Audio(audio).play();
  };

  render() {
    return (
      <div>
        <button onClick={this.playAudio}>PLAY AUDIO</button>
      </div>
    );
  }
}

export default AudioTest;
