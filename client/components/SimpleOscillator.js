import React from 'react';
import { Oscillator } from 'tone';

const SimpleOscillator = () => {
  const osc = new Oscillator(440, 'sine').toDestination().start();

  return <h1>A Simple Oscillator</h1>;
};

export default SimpleOscillator;
