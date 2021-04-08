import React from 'react';

const Card = ({ monster }) => {
  return (
    <div className='space-y-4'>
      <div className='aspect-w-3 aspect-h-2'>
        <img
          className='object-cover shadow-lg rounded-lg bg-gray-100'
          src={`https://robohash.org/${monster.id}.png?set=set3&size=1024x1024`}
          alt={monster.name}
        />
      </div>
      <div className='space-y-2'>
        <div className='text-lg leading-6 font-medium space-y-1'>
          {monster.name}
          <p className='text-red-800'>{monster.email.toLowerCase()}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
