import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPokemonDetail } from '../store/reducers/pokemon';

const PokemonDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonDetail(id));
  }, []);

  return (
    <div>
      <h1>Pokemon #{id}'s detail</h1>
    </div>
  );
};

export default PokemonDetail;
