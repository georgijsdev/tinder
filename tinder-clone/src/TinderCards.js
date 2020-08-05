import React, {useState} from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: 'Steve Jobs',
      url: 'https://imagens.canaltech.com.br/celebridades/2.400.jpg'
    },
    {
      name: 'Elon Musk',
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg'
    },
    {
      name: 'Bill Gates',
      url: 'https://img.olhardigital.com.br/uploads/acervo_imagens/2019/04/r4x3/20190404032207_660_495_-_bill_gates.jpg'
    }
  ]);

  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map(person => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={['up', 'down']}
          d>
            <div
            style={{backgroundImage: `url(${person.url})` }} 
            className="card">
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
