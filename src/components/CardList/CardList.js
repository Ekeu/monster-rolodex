import React from 'react';
import Card from '../Card/Card';

const CardList = ({ monsters }) => {
  return (
    <>
      {monsters.map((monster) => (
        <li key={monster.id}>
          <Card monster={monster}></Card>
        </li>
      ))}
    </>
  );
};

export default CardList;
