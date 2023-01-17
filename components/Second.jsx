import React from 'react';
import { useState } from 'react';

function Second() {
  const [valueA, setValueA] = useState('имя');
  const [valueB, setValueB] = useState('фамилия');
  const [inputLength, setInputLength] = useState('');
  const [year, setYear] = useState(0);
  const [temp, setTemp] = useState(32);

  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [third, setThird] = useState(0);
  const [fourth, setFourth] = useState(0);
  const [five, setFive] = useState(0);

  return (
    <div>
      <input value={valueA} onChange={(event) => setValueA(event.target.value)} />
      <p> {valueA}</p>
      <input value={valueB} onChange={(event) => setValueB(event.target.value)} />
      <p> {valueB}</p>
      <input value={inputLength} onChange={(event) => setInputLength(event.target.value)} />
      <p>{inputLength.length}</p>
      <input value={year} onChange={(event) => setYear(event.target.value)} />
      <p>год рождения: {2023 - year}</p>
      <input value={temp} onChange={(event) => setTemp(event.target.value)} />
      <p> {(temp - 32) / 1.8} градусов по цельсию</p>

      <input value={first} onChange={(event) => setFirst(event.target.value)} />
      <input value={second} onChange={(event) => setSecond(event.target.value)} />
      <input value={third} onChange={(event) => setThird(event.target.value)} />
      <input value={fourth} onChange={(event) => setFourth(event.target.value)} />
      <input value={five} onChange={(event) => setFive(event.target.value)} />

      <p>{(+first + +second + +third + +fourth + +five) / 5}</p>
    </div>
  );
}

export default Second;
