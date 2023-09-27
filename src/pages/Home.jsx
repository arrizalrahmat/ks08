import { useSelector } from 'react-redux';

const Home = () => {
  const { count } = useSelector((state) => state.counter);
  return (
    <div>
      <h1>Home</h1>
      <p>This is my home page {count}</p>
    </div>
  );
};

export default Home;
