import React from 'react';

const FmForm = (props) => {
  const { handleChange, frequency } = props;
  return (
    <form onSubmit={(evt) => evt.preventDefault()}>
      <label htmlFor="frequency">frequency: </label>
      <input
        name="frequency"
        type="number"
        value={frequency}
        onChange={handleChange}
      />
    </form>
  );
};

export default FmForm;
