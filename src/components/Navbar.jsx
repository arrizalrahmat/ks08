import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link> |{' '}
      <Link to="/about">About</Link> |{' '}
      <Link to="/members">Members</Link> |{' '}
      <Link to="/items">Items</Link> |{' '}
      <Link to="/pokemons">Pokemons</Link> |{' '}
      <Link to="/profile">Profile</Link> |{' '}
      <Link to="/students">Students</Link> |{' '}
      <Link to="/banking">Banking</Link> |{' '}
      <Link to="/hospital">hospital</Link>
    </nav>
  );
};

export default Navbar;
