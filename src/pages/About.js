import React from 'react';
import Header from '../components/Header/Header';
import Opinion from '../components/Opinion/Opinion';
import Footer from '../components/Footer/Footer';
import imgIndex from '../assets/imgIndex.jpg'

const About = () => {
  return (
    <>
        <Header img={imgIndex} title="C'est toujours l'heure du thé grâce aux tisanes fleuries" />
        cards 
        blog
        <Opinion />
        <Footer />
    </>
  );
};

export default About;

