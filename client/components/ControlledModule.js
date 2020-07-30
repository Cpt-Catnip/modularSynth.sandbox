import React from 'react';
import { FMOscillator } from 'tone';
import { connect } from 'react-redux';
import FmForm from './FmForm';

class ControlledModule extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {

  }

  render() {
    const osc = new FMOscillator(this.state).toDestination();
    return (
      <div>
        <h1>Controlled Module</h1>
        <FmForm />
        <button type="button" onClick={() => this.start(osc)}>
          Play
        </button>
      </div>
    );
  }
}

export default ControlledModule;
