import React from 'react';
import { Oscillator } from 'tone';

const SimpleOscillator = () => {
  const osc = new Oscillator().toDestination();
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
      <h1>A Simple Oscillator</h1>
      <button type="button" onClick={start}>
        Play
      </button>
    </div>
  );
};

export default SimpleOscillator;
