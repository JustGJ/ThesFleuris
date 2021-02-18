import React, { Component } from 'react';

// == Import des  différentes images de thés
import camomille from '../../assets/indexTea/camomille.jpg';
import framboise from '../../assets/indexTea/framboise.jpg';
import hibiscus from '../../assets/indexTea/hibiscus.jpg';
import earlGrey from '../../assets/indexTea/earlGrey.jpg';
import romarin from '../../assets/indexTea/romarin.jpg';
import amande from '../../assets/indexTea/amande.jpg';
import lavande from '../../assets/indexTea/lavande.jpg';
import rose from '../../assets/indexTea/rose.jpg';
import mint from '../../assets/indexTea/mint.jpg';

// == Import composant et CSS
import CardTea from '../CardTea/CardTea';
import classes from './CardsTeas.module.css';

class CardsTeas extends Component {

  state = {
    teas : [
      {id: 1, imgSrc: hibiscus, name: "Hibiscus", price: "7,00", poids: 125, desc: "Super hibiscus"},
      {id: 2, imgSrc: romarin, name: "Romarin", price: "5,00", poids: 200, desc: "Super romarin"},
      {id: 3, imgSrc: camomille, name: "Camomille", price: "8,00", poids: 125, desc: "Super camomille"},
      {id: 4, imgSrc: framboise, name: "Framboise", price: "8,00", poids: 125, desc: "Super framboise"},
      {id: 5, imgSrc: earlGrey, name: "Earl Grey", price: "6,00", poids: 200, desc: "Super earlgray"},
      {id: 6, imgSrc: amande, name: "Amande", price: "15,00", poids: 300, desc: "Super amande"},
      {id: 7, imgSrc: lavande, name: "Earl Grey", price: "6,00", poids: 200, desc: "Super lavande"},
      {id: 8, imgSrc: rose, name: "Rose", price: "13,00", poids: 300, desc: "Super rose"},
      {id: 9,imgSrc: mint, name: "Menthe", price: "15,00", poids: 300, desc: "Super mint"}
    ],
  }

  render() {
 
      return (
        <>
          <div className={classes.news}>
            <h2>Nouveautés</h2>
            <p>Nos derniers produits selectionnés. <br/> Arrivage chaque semaine</p>
          </div>
          {
                this.state.teas.map(tea => {
                    return (
                    <div key={tea.id} className={classes.cardTea} >
                        <CardTea 
                          img={tea.imgSrc}
                          name={tea.name}
                          price={tea.price}
                          poids={tea.poids}
                          desc={tea.desc}      
                        />
                    </div>
                  )}
              )
            
          }     

        </>
    );
  }
}

export default CardsTeas;