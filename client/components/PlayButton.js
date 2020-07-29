import React from 'react';
import { Destination, start } from 'tone';

class PlayButton extends React.Component {
  constructor() {
    super();
    this.state = { isPlaying: false };
    this.toggleAudio = this.toggleAudio.bind(this);
  }

  toggleAudio() {
    if (this.state.isPlaying) {
      console.log("stopping")
      Destination.mute = true;
      this.setState({ isPlaying: false });
    } else {
      console.log('starting');
      start();
      Destination.mute = false;
      this.setState({ isPlaying: true });
    }
  }

  render() {
    return (
      <button type="button" onClick={this.toggleAudio}>
        button
      </button>
    );
  }
}

export default PlayButton;
