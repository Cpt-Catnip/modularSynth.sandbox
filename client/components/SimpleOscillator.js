import React from 'react';
import { Oscillator } from 'tone';

const SimpleOscillator = () => {
  const osc = new Oscillator(200).toDestination();
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
      <img src="/images/simple_oscillator.png" />
      <button type="button" onClick={start}>
        Play
      </button>
    </div>
  );
};

export default SimpleOscillator;
