import 'src/styles/userAuth.css';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginUser } from 'src/fetchDB/index';
import { useTask } from '../../context/taskContext';
import { useAuth } from 'src/context';

export default function Login() {
  const { toastErrorSettings } = useTask();
  const { isAuth, setToken } = useAuth();

  const [{ email, password }, setFormState] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setFormState((prev) => ({ ...prev, [target.id]: target.value }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (!email || !password)
        return toast.error('Please fill in all fields', toastErrorSettings);
      const res = await loginUser({ email, password });

      if (res.token) {
        localStorage.setItem('token', res.token);
        return setToken(res.token);
      } else {
        return toast.error(res, toastErrorSettings);
      }
    } catch (error: any) {
      toast.error(
        `I failed to fetch from the DB! ${error.message}`,
        toastErrorSettings
      );
    }
  };

  if (isAuth) return <Navigate to={'../auth/alltasks'} />;
  else
    return (
      <div className='loginWrapper'>
        <h1 className='loginTitle'>Login</h1>
        <form className='loginForm' onSubmit={handleSubmit}>
          <div className='infoWrapper'>
            <div className='loginLabelWrapper'>
              <label htmlFor='email'>E-mail </label>
              <label htmlFor='password'>Password </label>
            </div>
            <div className='loginInputWrapper'>
              <input
                type='text'
                name='email'
                id='email'
                placeholder='E-mail'
                value={email}
                onChange={handleChange}
              />
              <input
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                value={password}
                onChange={handleChange}
              />
            </div>
          </div>
          <button className='mainButton largeButton'>Log in</button>
        </form>
        <span className='changeAuth'>
          Not registered yet?
          <button
            className='fadedButton smallButton'
            onClick={() => setTimeout(() => navigate('/register'), 150)}
          >
            Register
          </button>
        </span>
      </div>
    );
}
