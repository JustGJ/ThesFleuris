import React from 'react';
import camomille from '../../assets/teas/camomille.png';
import romarin from '../../assets/teas/romarin.png';
import earlGrey from '../../assets/teas/earlGrey.png';
import New from './New/New';
import classes from './News.module.css';

const News = ({ isOpen, addCart }) => {
    // == Tableau des nouveautés
    const newsTeas = [
        { id: 1, imgSrc: romarin, name: 'Romarin', price: 5.0, quantity: 1 },
        { id: 2, imgSrc: earlGrey, name: 'Earl Grey', price: 2.0, quantity: 1 },
        { id: 3, imgSrc: camomille, name: 'Camomille', price: 8.0, quantity: 1 },
    ];

    return (
        <>
            <div className={classes.news}>
                <h2>Nouveautés</h2>
                <p>
                    Nos derniers produits selectionnés. <br /> Arrivage chaque semaine
                </p>
            </div>
            <div className={classes.containerShop}>
                {newsTeas.map((newTea) => (
                    <React.Fragment key={newTea.id}>
                        <New newTea={newTea} addCart={addCart} isOpen={isOpen} />
                    </React.Fragment>
                ))}
            </div>
        </>
    );
};

export default News;
