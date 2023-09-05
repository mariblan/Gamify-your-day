import { createContext, useState, useContext, useEffect } from 'react';
// import {
//   addToProgress,
//   clearFailed,
//   clearSuccess,
//   clearToday,
//   clearCompleted,
// } from '../fetchDB/fetchDB.js';
// import { confirm } from 'react-confirm-box';
// import { useNavigate, Navigate } from 'react-router-dom';
// import { toastErrorSettings } from '../components/toastError/toastErrorSettings';
import { AuthContextType, UserType } from 'src/types';
// import { Options } from 'react-confirm-box/dist/types';
import { checkValidToken } from 'src/fetchDB';
import { toast } from 'react-toastify';
// import type { ToastOptions } from 'react-toastify';
import { useSettings } from './settingsContext';

const authContextDefaultValues: AuthContextType = {
  isAuth: false,
  setIsAuth: () => {},
  token: '',
  setToken: () => {},
  login: () => {},
  logout: () => {},
  user: null,
  setUser: () => {},
  loading: false,
  setLoading: () => {},
};

const AuthContext = createContext<AuthContextType>(authContextDefaultValues);

const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { toastErrorSettings } = useSettings();
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [token, setToken] = useState<(() => string) | string>(
    localStorage.getItem('token') || ''
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<UserType | null>(null);
  const [disabled, setDisabled] = useState<boolean>(false);

  // const toastErrorSettings: ToastOptions = {
  //   position: 'top-center',
  //   closeOnClick: true,
  //   hideProgressBar: true,
  //   theme: 'colored',
  //   autoClose: 2000,
  // };

  useEffect(() => {
    const verifyLogin = async (token: string | (() => string)) => {
      try {
        const res = await checkValidToken(token);
        if (!res) throw new Error(`${res}`);
        console.log(res);
        setUser(res);
        setIsAuth(true);
        console.log(res);
      } catch (error: any) {
        return toast.error(error.message, toastErrorSettings);
      }
    };
    console.log(token);

    token && verifyLogin(token);
  }, [token]);
  console.log(user);
  //Create a settings context to pass the settings to the game as pet, disabled, gameFinalScreen, selectedPet, canChangePet
  //and also de log out functions.

  //   const [gameFinalScreen, setGameFinalScreen] = useState<boolean>(false);
  //   const [selectedPet, setSelectedPet] = useState<null | string>(null);
  //   const [canChangePet, setCanChangePet] = useState<boolean>(true);

  //   const navigate = useNavigate();
  //   //The options for the setup of the log out confirm box and the functions of its buttons.
  //   const options: Options = {
  //     render: (message, onConfirm, onCancel) => {
  //       return (
  //         <div className='react-confirm-box'>
  //           <h4>{message}</h4>
  //           <div className='confirm-box-btnWrapper'>
  //             <button
  //               onClick={() => {
  //                 onConfirm();
  //                 setDisabled(false);
  //                 return logOut();
  //               }}
  //             >
  //               Logout
  //             </button>
  //             <button
  //               onClick={() => {
  //                 onCancel();
  //                 setDisabled(false);
  //               }}
  //             >
  //               Continue
  //             </button>
  //           </div>
  //         </div>
  //       );
  //     },
  //   };
  //   //This makes the confirmation box to pop out so you can decide befrore logging out, and upon confirmation runs the logOut function, which
  //   //sets the game to the initial state.
  //   const logOutConfirm = async () => {
  //     if (todaysList.length > 0 || todaysCompleted.length > 0) {
  //       await confirm(
  //         `If you log out you will lose all your progress and personalised
  //       tasks. Are you sure you want to proceed?`,
  //         options
  //       );
  //     } else if (todaysList.length === 0 && todaysCompleted.length === 0) {
  //       logOut();
  //     }
  //   };

  //   const logOut = () => {
  //     addToProgress(user._id, 0);
  //     setUserProgress(0);
  //     clearToday(user._id);
  //     setTodaysCompleted([]);
  //     clearCompleted(user._id);
  //     setUserSettings([]);
  //     setTodaysList([]);
  //     setGottenTask({
  //       category: '',
  //       taskdescription: '',
  //       difficulty: '',
  //       taskid: 0,
  //       taskName: '',
  //       taskTime: {},
  //     });
  //     clearFailed(user._id);
  //     setTodaysFailed([]);
  //     clearSuccess(user._id);
  //     setTodaysSuccess([]);
  //     setGameFinalScreen(true);
  //     setDisabled(false);
  //     setSelectedPet(false);
  //     setCanChangePet(true);
  //     localStorage.removeItem('token');
  //     setIsAuthenticated(false);
  //     setToken('');
  //     setUser(null);
  //     setTimeout(() => <Navigate to={'../login'} />, 150);
  //   };

  //This passes the array of randomize task through the app
  //   const [userSettings, setUserSettings] = useState([]);

  //   // Setting the info from the database in different lists
  //   const [favoriteList, setFavoriteList] = useState(false);
  //   useEffect(() => {
  //     user && setFavoriteList(user.favoriteList);
  //   }, [user]);

  //   //Settings the todayList of the database to the front end todaysList
  //   const [todaysList, setTodaysList] = useState([]);
  //   useEffect(() => {
  //     user && setTodaysList(user.todayList);
  //   }, [user]);

  //   //Settings the todayCompleted of the database to the front end todaysCompleted
  //   const [todaysCompleted, setTodaysCompleted] = useState([]);
  //   useEffect(() => {
  //     user && setTodaysCompleted(user.todayCompleted);
  //   }, [user]);

  //   //Settings the todayFailed of the database to the front end todaysFailed
  //   const [todaysFailed, setTodaysFailed] = useState([]);
  //   useEffect(() => {
  //     user && setTodaysFailed(user.todayFailed);
  //   }, [user]);

  //   //Settings the todaySuccess of the database to the front end todaysSuccess
  //   const [todaysSuccess, setTodaysSuccess] = useState([]);
  //   useEffect(() => {
  //     user && setTodaysSuccess(user.todayFailed);
  //   }, [user]);

  //   //Sets the userProgress to pass it througout the app and render the proper progres in the right place
  //   //and to send this progress back to the database
  //   const [userProgress, setUserProgress] = useState(0);

  //   useEffect(() => {
  //     user && setUserProgress(user.progress);
  //   }, [user]);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        token,
        setToken,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { useAuth, AuthContextProvider };
