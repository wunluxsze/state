import React from 'react';
import { useState } from 'react';

function Five() {
  const [value, setValue] = useState('');

  const towns = ['Чебоксары', 'Елабуга', 'Москва', 'Казань'];

  const options = towns.map((towns, index) => {
    return <option key={index}>{towns}</option>;
  });

  const [value2, setValue2] = useState('');

  const old = ['от 0 до 12', 'от 13 до 17', 'от 18 до 25', 'старше 25'];

  const oldoption = old.map((old, index) => {
    return <option key={index}>{old}</option>;
  });

  //   radio

  const [radio, setRadio] = useState(1);
  const [radio2, setRadio2] = useState(1);

  return (
    <div>
      <select value={value} onChange={(event) => setValue(event.target.value)}>
        <option>Чебоксары</option>
        <option>Елабуга</option>
        <option>Москва</option>
        <option>Казань</option>
      </select>
      <p>ваш выбор {value}</p>
      <p>  города в массиве: {options}</p>
      <select value={value2} onChange={(event) => setValue2(event.target.value)}>
        {oldoption}
      </select>
      <p>ваш выбор: {value2}</p>
      <input
        type="radio"
        name="radio"
        value="1"
        checked={radio === '1' ? true : false}
        onChange={(event) => setRadio(event.target.value)}
      />
      <input
        type="radio"
        name="radio"
        value="2"
        checked={radio === '2' ? true : false}
        onChange={(event) => setRadio(event.target.value)}
      />
      <input
        type="radio"
        name="radio"
        value="3"
        checked={radio === '3' ? true : false}
        onChange={(event) => setRadio(event.target.value)}
      />
      <p>{radio}</p>
      <input
        type="radio"
        name="radio2"
        value="норм"
        checked={radio2 === 'норм' ? true : false}
        onChange={(event) => setRadio2(event.target.value)}
      />
      HTML
      <input
        type="radio"
        name="radio2"
        value="дурак"
        checked={radio2 === 'дурак' ? true : false}
        onChange={(event) => setRadio2(event.target.value)}
      />
      CSS
      <input
        type="radio"
        name="radio2"
        value="умничка"
        checked={radio2 === 'умничка' ? true : false}
        onChange={(event) => setRadio2(event.target.value)}
      />
      JAVASCRIPT
      <p>{radio2}</p>
    </div>
  );
}

export default Five;
