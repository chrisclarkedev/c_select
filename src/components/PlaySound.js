import React from 'react';
import Sound from 'react-sound';
import CharaSelect from './sounds/character_select.mp3';

  const PlaySound = (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying,
  )
  
return (
  <div>
    <Sound
      url={CharaSelect}
      playStatus={Sound.status.Playing}
      playFromPosition={300}
      onLoading={handleSongLoading}
      onPlaying={handleSongPlaying}
      onFinishedPlaying={handleSongFinishedPlaying}
    />
  </div>
);
