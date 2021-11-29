import React, { useState } from 'react';
import {
    Amande,
    Camomille,
    EarlGrey,
    Framboise,
    Hibiscus,
    Lavande,
    Mint,
    Romarin,
    Rose,
} from '../../assets/export';
import { Bols, Tasse, Theire1, Theire2, Theire3 } from '../../assets/export';

import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

import TeaCard from './TeaCard/TeaCard';

import classes from './TeaCards.module.css';

const TeaCards = ({ addCart }) => {
    const teas = [
        {
            id: 4,
            imgSrc: Hibiscus,
            name: 'Hibiscus',
            price: 7.0,
            quantity: 1,
            categorie: 'Thés',
        },
        {
            id: 10,
            imgSrc: Bols,
            name: 'Bols',
            price: 15.0,
            quantity: 1,
            categorie: 'Accessoires',
        },
        {
            id: 3,
            imgSrc: Camomille,
            name: 'Camomille',
            price: 8.0,
            quantity: 1,
            categorie: 'Thés',
        },
        {
            id: 5,
            imgSrc: Framboise,
            name: 'Framboise',
            price: 8.0,
            quantity: 1,
            categorie: 'Thés',
        },
        {
            id: 11,
            imgSrc: Tasse,
            name: 'Tasse',
            price: 5.0,
            quantity: 1,
            categorie: 'Accessoires',
        },

        {
            id: 1,
            imgSrc: Romarin,
            name: 'Romarin',
            price: 5.0,
            quantity: 1,
            categorie: 'Thés',
        },
        {
            id: 2,
            imgSrc: EarlGrey,
            name: 'Earl Grey',
            price: 6.0,
            quantity: 1,
            categorie: 'Thés',
        },
        {
            id: 13,
            imgSrc: Theire1,
            name: 'Théire rouge',
            price: 17.0,
            quantity: 1,
            categorie: 'Accessoires',
        },
        {
            id: 6,
            imgSrc: Lavande,
            name: 'Lavande',
            price: 7.0,
            quantity: 1,
            categorie: 'Thés',
        },
        { id: 7, imgSrc: Amande, name: 'Amande', price: 15.0, quantity: 1, categorie: 'Thés' },
        {
            id: 14,
            imgSrc: Theire2,
            name: 'Théire noir',
            price: 20.0,
            quantity: 1,
            categorie: 'Accessoires',
        },
        { id: 9, imgSrc: Rose, name: 'Rose', price: 13.0, quantity: 1, categorie: 'Thés' },
        { id: 8, imgSrc: Mint, name: 'Menthe', price: 13.0, quantity: 1, categorie: 'Thés' },
        {
            id: 15,
            imgSrc: Theire3,
            name: 'Théire bleue',
            price: 19.0,
            quantity: 1,
            categorie: 'Accessoires',
        },
    ];

    // == On stocke la categorie
    const [selectCategorie, setSelectCategorie] = useState('');

    // == On vérifie si la catégorie coché correspond  à la catégorie parcourue
    const categories = ['Accessoires', 'Thés'];

    // == On stocke le prix onChange
    const [value, setValue] = useState({ min: 2, max: 20 });

    // == Reset filter
    const resetFilter = () => {
        setSelectCategorie('');
        setValue({ min: 2, max: 20 });
    };

    return (
        <div className={classes.shop}>
            <div className={classes.filter}>
                <h4>Filtrer par </h4>
                <hr />
                <ul>
                    <h5>Catégorie</h5>
                    {categories.map((p, index) => {
                        return (
                            <li key={index}>
                                <input
                                    type="radio"
                                    value={p}
                                    id={p}
                                    checked={p === selectCategorie} // input checked si le poids parcouru est égal au poids checked
                                    onChange={(e) => setSelectCategorie(e.target.value)}
                                />
                                <label htmlFor={p}>{p}</label>
                            </li>
                        );
                    })}
                </ul>
                <hr />
                <h5>Price</h5>
                <InputRange
                    maxValue={20}
                    minValue={2}
                    formatLabel={(selectPrice) => `${selectPrice},00 €`}
                    value={value}
                    onChange={(value) => setValue(value)}
                    onChangeComplete={(value) => setValue(value)}
                />

                <div className={classes.cancel}>
                    {(selectCategorie || value.min !== 2 || value.max !== 20) && (
                        <h5 onClick={resetFilter}>Supprimer filtres X</h5>
                    )}
                </div>
            </div>
            <div className={classes.containerShop}>
                {teas
                    .filter((tea) => {
                        return tea.price >= value.min && tea.price <= value.max;
                    })
                    .filter((tea) => {
                        return tea.categorie.includes(selectCategorie);
                    })
                    .map((tea) => (
                        <React.Fragment key={tea.id}>
                            <TeaCard tea={tea} addCart={addCart} />
                        </React.Fragment>
                    ))}
            </div>
        </div>
    );
};

export default TeaCards;
