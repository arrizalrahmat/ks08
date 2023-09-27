import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Member = () => {
  const params = useParams();

  useEffect(() => {
    console.log(params);
  }, [params]);

  return (
    <div>
      <h1>{params.userName}</h1>
      <p>This is the detail page of {params.userName}</p>
    </div>
  );
};

export default Member;
