import React from 'react';
import { useState } from 'react';

function Fourth() {
  const [checked, setChecked] = useState(true);
  const [confirm, setConfirm] = useState(true);

  const [checked2, setChecked2] = useState(true);
  const [check1, setCheck1] = useState(true);
  const [check2, setCheck2] = useState(true);
  const [check3, setCheck3] = useState(true);

  let message = 't6y6t6y';
  function mes() {
    if (confirm) {
      setChecked(<p>привет</p>);
    } else {
      setChecked(<p>пока</p>);
    }
  }

  let message2 = '';
  function mes2() {
    return setChecked2(
      `${check1 ? 'JS style' : ''} ${check2 ? 'HTML style' : ''} ${check3 ? 'CSS style' : ''}`,
    );
  }

  const [year18, setYear18] = useState(false);
  let old18;
  if (year18) {
    old18 = <p>вы видите этот текст если вам 18</p>;
  }

  const [visible, setVisible] = useState(false);
  let visibled;
  if (visible) {
    visibled = <p>вы видите этот текст если вы отметили чекбокс</p>;
  }

  return (
    <div>
      <input type="checkbox" checked={confirm} onChange={() => setConfirm(!confirm)} />
      <button onClick={mes}>отправить</button>
      <div>{checked}</div>

      <input type="checkbox" checked={check1} onChange={() => setCheck1(!check1)} />
      <input type="checkbox" checked={check2} onChange={() => setCheck2(!check2)} />
      <input type="checkbox" checked={check3} onChange={() => setCheck3(!check3)} />
      <button onClick={mes2}>отправить</button>
      <div>{checked2}</div>

      <input type="checkbox" checked={year18} onChange={() => setYear18(!year18)} />
      <div>вам есть 18?{old18}</div>
      <input type="checkbox" checked={visible} onChange={() => setVisible(!visible)} />
      <div>отметьте чекбокс{visibled}</div>
    </div>
  );
}

export default Fourth;
