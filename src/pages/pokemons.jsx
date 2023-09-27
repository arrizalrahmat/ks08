import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons } from '../store/reducers/pokemon';
import { useNavigate } from 'react-router-dom';

const Pokemons = () => {
  const dispatch = useDispatch();
  const { pokemons, isLoading, next, previous } =
    useSelector((state) => state.pokemon);
  const navigate = useNavigate();

  const handleNext = () => {
    dispatch(fetchPokemons(next));
  };

  const handlePrevious = () => {
    dispatch(fetchPokemons(previous));
  };

  const handleDetail = (url) => {
    const splitted = url.split('/');
    const id = splitted[splitted.length - 2];

    navigate(id);
  };

  useEffect(() => {
    dispatch(
      fetchPokemons('https://pokeapi.co/api/v2/pokemon/')
    );
  }, []);

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
                      <button
                        onClick={() => {
                          handleDetail(pokemon.url);
                        }}
                      >
                        see details
                      </button>
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
