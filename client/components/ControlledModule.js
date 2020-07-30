import React from 'react';
import { connect } from 'react-redux';
import FmForm from './FmForm';
import { toggleAudio, updateParam } from '../store/singleOscillator';

class ControlledModule extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.update(event.target.name, event.target.value);
  }

  render() {
    return (
      <div>
        <h1>Controlled Module</h1>
        <FmForm {...this.props} handleChange={this.handleChange} />
        <button type="button" onClick={this.props.play}>
          Play
        </button>
      </div>
    );
  }
}

const mapState = (state) => ({
  frequency: state.osc.frequency.value,
})

const mapDispatch = (dispatch) => ({
  play: () => dispatch(toggleAudio()),
  update: (param, value) => dispatch(updateParam(param, value)),
});

export default connect(mapState, mapDispatch)(ControlledModule);
