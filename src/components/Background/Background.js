import React from 'react';
import '../Background/Background.css';

const Background = ({ img, title }) => {

  return (
    <>
        <img className="background" src={img} alt ="img" />
        <h3 className="title">{title}</h3>
      
    </>
  );
};

export default Background;