import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Typical Modular Synth</h1>
      <img src="images/index.JPG" />
      <h1>Live Demo</h1>
      <iframe
        width="1425"
        height="606"
        src="https://www.youtube.com/embed/o791hgNvGIg"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default Home;
