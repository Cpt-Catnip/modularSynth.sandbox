import React from 'react';
import SimpleOscillator from './SimpleOscillator';
import Nav from './Nav';
import { Switch, Route } from 'react-router-dom';
import FMOscillation from './FMOscillation';
import ControlledModule from './ControlledModule';
import Home from './Home';

const App = () => {
  return (
    <div>
      <Nav />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/simple-oscillator" component={SimpleOscillator} />
          <Route path="/fm-signal" component={FMOscillation} />
          <Route path="/controlled-module" component={ControlledModule} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
