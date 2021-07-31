import React, { useEffect, useState } from 'react';
import './App.scss';
import { decode, encode } from './encoder';

const App = () => {
  const [zero, setZero] = useState('솔브');
  const [one, setOne] = useState('바보');
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');
  const [text, setText] = useState('');
  const [solve, setSolve] = useState('');

  useEffect(() => {
    setText('');
    setSolve('');
  }, [mode]);

  return (
    <div className={'app'}>
      <h1>SolveEncoder</h1>
      <form>
        <ul className={'defaults'}>
          <li>
            <label>
              <span>Zero</span>
              <input
                id={'zero'}
                placeholder={'솔브'}
                value={zero}
                onChange={(e) => setZero(e.target.value)}
              />
            </label>
          </li>
          <li>
            <label>
              <span>One</span>
              <input
                id={'one'}
                placeholder={'바보'}
                value={one}
                onChange={(e) => setOne(e.target.value)}
              />
            </label>
          </li>
          <li>
            <label>
              <span>모드</span>
              <select
                id={'mode'}
                value={mode}
                onChange={(e) => setMode(e.target.value as 'encode' | 'decode')}
              >
                <option value={'encode'}>Encode</option>
                <option value={'decode'}>Decode</option>
              </select>
            </label>
          </li>
        </ul>
        <ul className={'text'}>
          <li>
            <label>
              <span>텍스트</span>
              <textarea
                id={'text'}
                placeholder={'솔바브보'}
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </label>
          </li>
          <li>
            <label>
              <span>솔브</span>
              <textarea
                id={'solve'}
                placeholder={'바보바보...바보솔브솔브'}
                value={solve}
                onChange={(e) => setSolve(e.target.value)}
              />
            </label>
          </li>
        </ul>
        <button
          className={'convert'}
          onClick={(e) => {
            e.preventDefault();
            if (mode === 'encode') setSolve(encode(text, zero, one));
            else setText(decode(solve, zero, one));
          }}
        >
          {mode === 'encode' ? '인코딩' : '디코딩'}
        </button>
      </form>
    </div>
  );
};

export default App;
