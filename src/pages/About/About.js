import React from 'react';
import Background from '../../components/Background/Background';
import Navbar from '../../components/Navbar/Navbar';
import bgAbout from '../../assets/bgAbout.jpg'


const About = () => {
  return (
    <>
        <Navbar />
        <Background img={bgAbout} title="Notre histoire" />
    </>
  );
};

export default About;

