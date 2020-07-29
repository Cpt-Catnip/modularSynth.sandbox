import React from 'react';
import SimpleOscillator from './SimpleOscillator';
import Nav from './Nav';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Nav />
      <main>
        <Switch>
          <Route path="/simple-oscillator" component={SimpleOscillator} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
