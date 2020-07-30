import React from 'react';
import { connect } from 'react-redux';
import FmForm from './FmForm';
import { toggleAudio } from '../store/singleOscillator';

class ControlledModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    console.log('Re-rendering?')
    this.setState((state) => ({ foo: !state.foo }));
  }

  render() {
    return (
      <div>
        <h1>Controlled Module</h1>
        <FmForm handleChange={this.handleChange} />
        <button type="button" onClick={this.props.play}>
          Play
        </button>
      </div>
    );
  }
}

const mapDispatch = (dispatch) => ({
  play: () => dispatch(toggleAudio()),
});

export default connect(null, mapDispatch)(ControlledModule);
