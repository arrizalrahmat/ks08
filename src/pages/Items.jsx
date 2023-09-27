import { Outlet, useNavigate } from 'react-router-dom';
import { getItems } from '../items';

const Items = () => {
  const items = getItems();
  const navigate = useNavigate();

  const onDetail = (id) => {
    console.log(id);
    navigate(id.toString());
  };

  return (
    <div>
      <h1>Items</h1>
      <p>Select an item to be shown</p>
      <table border={1}>
        <thead>
          <tr>
            <th>Item</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>
                <button onClick={() => onDetail(item.id)}>
                  Show detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Outlet />
    </div>
  );
};

export default Items;
