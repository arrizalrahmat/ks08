import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  if (!localStorage.getItem('token')) {
    console.log(location, 'ini location protectedroute');
    return (
      <Navigate to="/login" state={{ from: location }} />
    );
  }

  return children;
};

export default ProtectedRoute;
