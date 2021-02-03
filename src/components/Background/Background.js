import React from 'react';
import '../Background/Background.css';

const Background = ({ img, title }) => {

  let background = {backgroundImage: "url(" +  img  + ")"}

  return (
    <>
        <div className="background" style={ background }></div>
        <h3 className="title">{title}</h3>
    </>
  );
};

export default Background;