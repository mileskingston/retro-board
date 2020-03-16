import React, { useState } from 'react';
import Card from './Card';
import BoardContext from './BoardContext';

const Column = () => {
  const colors = [
    {
      name: 'blue',
      value: '#0984e3'
    },
    {
      name: 'green',
      value: '#00cec9'
    },
    {
      name: 'orange',
      value: '#e17055'
    },
  ];
  const [cards, setCards] = useState([
    {
      "id": 1,
      "text": "Example text",
      "likes": 0,
    },
  ])
  const [color, setColor] = useState({
    name: 'blue',
    value: '#0984e3'
  });

  const updateLikeCount = (cards, currentId) => {
    const newCards = cards.map(card => {
      if (card.id === currentId) {
        return {
          ...card,
          likes: card.likes + 1,
        }
      }

      return card;
    })

    setCards(newCards);
  }

  return (
    <BoardContext.Consumer>
      <div className="column">
        <div className="color-picker">
        {colors.map(color =>
          <button
            key={color.name}
            className={`btn btn--color btn--color-${color.name}`}
            onClick={() => setColor({
              name: color.name,
              value: color.value
            })}
          >
            {color.name}
          </button>
        )}
        </div>
        <header className="column__header">
          <h2 className="column__title">Title</h2>
          <button
            className={`btn btn--add btn--color-${color.name}`} type="button" onClick={() => setCards([...cards, { id: cards.length + 1, text: "add text here...", likes: 0 }])}>Add</button>
        </header>
        <section className="column__body">
          {cards.length === 0 && <div className="message message--info">No cards</div>}
          {cards.map((card, index) => 
            <Card
              key={index}
              id={card.id}
              text={card.text}
              likes={card.likes}
              deleteClick={() => setCards(cards.filter(value => value.id !== card.id))}
              likeClick={() => updateLikeCount(cards, card.id)}
            />
          )}
        </section>
      </div>
    </BoardContext.Consumer>
  );
}

export default Column;
