import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Background from '../../components/Background/Background';
import bgAccessories from '../../assets/bgAccessories.jpg'

const Accessories = () => {
  return (
    <>
      <Navbar />
      <Background img={bgAccessories} title="Accessoires" />
    </>
  );
};

export default Accessories;