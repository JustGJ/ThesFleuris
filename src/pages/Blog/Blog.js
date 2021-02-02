import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Background from '../../components/Background/Background';
import bgBlog from '../../assets/bgBlog.jpg';

const blog = (props) => {
    return (
        <>
            <Navbar />
            <Background img={bgBlog} title="Blog des Thés Fleuris" />   
        </>
    )
}

export default blog;