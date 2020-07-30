import React from 'react';
import { FMOscillator } from 'tone';

const FMOscillation = () => {
  const osc = new FMOscillator({
    frequency: 200,
    type: 'sine',
    modulationType: 'sine',
    harmonicity: 0.01,
    modulationIndex: 3,
  }).toDestination();
  let isPlaying = false;

  const start = () => {
    if (isPlaying) {
      osc.stop();
      isPlaying = false;
    } else {
      osc.start();
      isPlaying = true;
    }
  };

  return (
    <div>
      <h1>Frequency Modulation</h1>
      <img src="images/fm_signal.png" />
      <button type="button" onClick={start}>
        Play
      </button>
    </div>
  );
};

export default FMOscillation;
