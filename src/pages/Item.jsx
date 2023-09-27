import { useParams } from 'react-router-dom';
import { getItems } from '../items';

const Item = () => {
  const { id } = useParams();
  const items = getItems();
  const item = items.find((item) => item.id === Number(id));
  return (
    <div>
      <h1>{item.name}</h1>
      <p>Power: {item.power}</p>
    </div>
  );
};

export default Item;
