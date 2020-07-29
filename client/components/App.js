import React from 'react';
import SimpleOscillator from './SimpleOscillator';
import Nav from './Nav';
import { Switch, Route } from 'react-router-dom';
import FMOscillation from './FMOscillation'

const App = () => {
  return (
    <div>
      <Nav />
      <main>
        <Switch>
          <Route path="/simple-oscillator" component={SimpleOscillator} />
          <Route path="/fm-signal" component={FMOscillation} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
