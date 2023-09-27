import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons } from '../store/reducers/pokemon';

const Pokemons = () => {
  const dispatch = useDispatch();
  const { pokemons, isLoading, next, previous } =
    useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(
      fetchPokemons('https://pokeapi.co/api/v2/pokemon/')
    );
  }, []);

  const handleNext = () => {
    dispatch(fetchPokemons(next));
  };

  const handlePrevious = () => {
    dispatch(fetchPokemons(previous));
  };

  return (
    <div>
      <h1>Pokemon's page</h1>
      {isLoading ? (
        <h1>Loading ....</h1>
      ) : (
        <div>
          <table border={1}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pokemons.length &&
                pokemons.map((pokemon, index) => (
                  <tr key={index}>
                    <td>{pokemon.name}</td>
                    <td>
                      <button>see details</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <button
            disabled={!previous}
            onClick={handlePrevious}
          >
            previous
          </button>
          <button disabled={!next} onClick={handleNext}>
            next
          </button>
        </div>
      )}
    </div>
  );
};

export default Pokemons;
