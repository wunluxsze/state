import React from 'react';
import { useState } from 'react';

function Third() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [result, setResult] = useState(0);

  const [dataSum, setDataSum] = useState(0);
  const [dataInput1, setDataInput1] = useState(new Date());
  const [dataInput2, setDataInput2] = useState(new Date());

  const [value3, setValue3] = useState(0);
  const [result2, setResult2] = useState(0);

  const [value4, setValue4] = useState(0);
  const [result3, setResult3] = useState(0);

  function divisors(integer) {
    var result = 1;
    for (let i = 0; i <= integer; i++) {
      if (integer % i === 0) {
        result *= i;
      }
    }

    return result;
  }

  return (
    <div>
      <input value={value1} onChange={(event) => setValue1(event.target.value)} />
      <input value={value2} onChange={(event) => setValue2(event.target.value)} />
      <button onClick={() => setResult(Number(value1) + Number(value2))}>сумма чисел</button>
      <button onClick={() => setResult(Number(value1) * Number(value2))}>произведение чисел</button>
      <p>{result}</p>

      <input
        value={dataInput1}
        onChange={(event) => setDataInput1(event.target.value)}
        type="date"
      />
      <input
        value={dataInput2}
        onChange={(event) => setDataInput2(event.target.value)}
        type="date"
      />
      <button onClick={() => setDataSum(new Date(dataInput2) - new Date(dataInput1))}>
        разница дней
      </button>
      <p>{dataSum / (60 * 60 * 24 * 1000)}</p>

      <input
        value={value3}
        onChange={(event) => setValue3(event.target.value)}
        onBlur={() =>
          setResult2(
            value3
              .toString()
              .split('')
              .reduce(function (a, b) {
                return a + parseInt(b);
              }, 0),
          )
        }
      />
      <p>{result2}</p>

      <input
        value={value4}
        onChange={(event) => setValue4(event.target.value)}
        onBlur={(event) => setResult3(divisors(event.target.value))}
      />
      <p>{result3}</p>
    </div>
  );
}

export default Third;
