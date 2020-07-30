import { FMOscillator } from 'tone';

// ACTION TYPES
const UPDATE_PARAM = 'UPDATE_PARAM';
const TOGGLE_AUDIO = 'TOGGLE_AUDIO';

// Action creators
export const updateParam = (param, value) => ({
  type: UPDATE_PARAM,
  param,
  value,
});

export const toggleAudio = () => ({
  type: TOGGLE_AUDIO,
});

// Reducer
const osc = new FMOscillator({
  frequency: 200,
  type: 'sine',
  modulationType: 'sine',
  harmonicity: 0.01,
  modulationIndex: 3,
  isPlaying: false,
}).toDestination();

const initialState = {
  osc,
  isPlaying: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_AUDIO:
      if (state.isPlaying) state.osc.stop();
      else state.osc.start();
      return {
        ...state,
        isPlaying: !state.isPlaying,
      };

    case UPDATE_PARAM:
      state.osc[action.param].value = action.value >= 0 ? action.value : 0;
      return {
        ...state,
        osc: state.osc,
      };

    default:
      return state;
  }
};
