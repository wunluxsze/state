import React from 'react';
import { useState } from 'react';

function First() {
  const [name, setName] = useState('Костя');
  const [lastname, setLastName] = useState('Рыжков');
  const [old, setOld] = useState(5);
  const [ban, setBan] = useState(true);

  return (
    <div>
      <p>{name}</p>
      <p>{lastname}</p>
      <p>{old} лет</p>
      <p>{ban ? 'забанен' : 'не забанен'}</p>
      <button onClick={() => setName('Азат')}>поменять имя</button>
      <button onClick={() => setLastName('Свешников')}>поменять фамилию</button>
      <button onClick={() => setBan(!ban)}>{ban ? 'разабанить' : 'забанить'}</button>
      <button onClick={() => setOld(old + 1)}> добавить лет </button>
      <button onClick={() => setOld(old - 1)}> убавить лет </button>
    </div>
  );
}

export default First;
