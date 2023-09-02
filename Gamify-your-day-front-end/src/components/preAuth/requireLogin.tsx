import { Outlet, Navigate } from 'react-router-dom';
// import { useTask } from '../../taskContext';
import { useAuth } from 'src/context';

const RequireLogin = () => {
  // const { isAuthenticated } = useTask();
  const { isAuth } = useAuth();

  return isAuth ? <Outlet /> : <Navigate to='/login' />;
};

export default RequireLogin;
