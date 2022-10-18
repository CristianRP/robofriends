import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    robots.map(({ id, name, email}, i) => {
      return <Card
        key={id}
        id={id}
        name={name}
        email={email} />;
    })
  );
}

export default CardList;
