import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increaseByValue,
  increment,
} from '../store/reducers/counter';

const AboutMe = () => {
  const { profile, counter } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  const [increaseBy, setIncreaseBy] = useState(0);

  return (
    <div>
      <h1>AboutMe</h1>
      <p>This is {profile.username} AboutMe page</p>
      <h1>{counter.count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <input
        value={increaseBy}
        onChange={(e) =>
          setIncreaseBy(Number(e.target.value))
        }
      />
      <button
        onClick={() => {
          dispatch(increaseByValue(increaseBy));
          setIncreaseBy(0);
        }}
      >
        increase
      </button>
    </div>
  );
};

export default AboutMe;
