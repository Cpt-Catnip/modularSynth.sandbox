import React from 'react';
import { FMOscillator, Destination } from 'tone';
import FmForm from './FmForm';

class ControlledModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frequency: 200,
      type: 'sine',
      modulationType: 'sine',
      harmonicity: 0.01,
      modulationIndex: 3,
      isPlaying: false,
    };
    this.start = this.start.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // shouldComponentUpdate() {
  //   return false;
  // }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  start(osc) {
    console.log('hello??')
    if (this.state.isPlaying) {
      // osc.stop();
      Destination.mute = true;
      this.setState({ isPlaying: false });
    } else {
      // osc.start();
      Destination.mute = false;
      this.setState({ isPlaying: true });
    }
  }

  render() {
    console.log('STATE', this.state);
    const osc = new FMOscillator(this.state).toDestination();
    return (
      <div>
        <h1>Controlled Module</h1>
        <FmForm {...this.state} handleChange={this.handleChange} />
        <button type="button" onClick={() => this.start(osc)}>
          Play
        </button>
      </div>
    );
  }
}

export default ControlledModule;
