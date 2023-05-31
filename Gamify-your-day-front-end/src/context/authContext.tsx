import './components/gameProgress/timer/timer.css';
import { createContext, useState, useContext, useEffect } from 'react';
import {
  addToProgress,
  clearFailed,
  clearSuccess,
  clearToday,
  clearCompleted,
} from '../fetchDB/fetchDB';
import { confirm } from 'react-confirm-box';
import { useNavigate, Navigate } from 'react-router-dom';
import { UserContextType } from './contexType';

const AuthContext = createContext();

const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = ({ toastErrorSettings, children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [token, setToken] = useState<string>(localStorage.getItem('token'));
  const [user, setUser] = useState<UserContextType | null>(null);
  //The options for the setup of the log out confirm box and the functions of its buttons.
  const options = {
    render: (message, onConfirm, onCancel) => {
      return (
        <div className='react-confirm-box'>
          <h4>
            If you log out you will lose all your progress and personalised
            tasks. Are you sure you want to proceed?
          </h4>
          <div className='confirm-box-btnWrapper'>
            <button
              onClick={() => {
                onConfirm();
                setDisabled(false);
                return logOut();
              }}
            >
              Logout
            </button>
            <button
              onClick={() => {
                onCancel();
                setDisabled(false);
              }}
            >
              Continue
            </button>
          </div>
        </div>
      );
    },
  };
  //This makes the confirmation box to pop out so you can decide befrore logging out, and upon confirmation runs the logOut function, which
  //sets the game to the initial state.
  const logOutConfirm = async () => {
    if (todaysList.length > 0 || todaysCompleted.length > 0) {
      await confirm('Are you sure?', options);
    } else if (todaysList.length === 0 && todaysCompleted.length === 0) {
      logOut();
    }
  };

  const logOut = () => {
    addToProgress(user._id, 0);
    setUserProgress(0);
    clearToday(user._id);
    setTodaysCompleted([]);
    clearCompleted(user._id);
    setUserSettings([]);
    setTodaysList([]);
    setGottenTask({
      category: '',
      taskdescription: '',
      difficulty: '',
      taskid: 0,
      taskName: '',
      taskTime: {},
    });
    clearFailed(user._id);
    setTodaysFailed([]);
    clearSuccess(user._id);
    setTodaysSuccess([]);
    setGameFinalScreen(true);
    setDisabled(false);
    setSelectedPet(false);
    setCanChangePet(true);
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setToken('');
    setUser(null);
    setTimeout(() => <Navigate to={'../login'} />, 150);
  };

  //Thisn passes the array of randomize task through the app
  const [userSettings, setUserSettings] = useState([]);

  // Setting the info from the database in different lists
  const [favoriteList, setFavoriteList] = useState(false);
  useEffect(() => {
    user && setFavoriteList(user.favoriteList);
  }, [user]);

  //Settings the todayList of the database to the front end todaysList
  const [todaysList, setTodaysList] = useState([]);
  useEffect(() => {
    user && setTodaysList(user.todayList);
  }, [user]);

  //Settings the todayCompleted of the database to the front end todaysCompleted
  const [todaysCompleted, setTodaysCompleted] = useState([]);
  useEffect(() => {
    user && setTodaysCompleted(user.todayCompleted);
  }, [user]);

  //Settings the todayFailed of the database to the front end todaysFailed
  const [todaysFailed, setTodaysFailed] = useState([]);
  useEffect(() => {
    user && setTodaysFailed(user.todayFailed);
  }, [user]);

  //Settings the todaySuccess of the database to the front end todaysSuccess
  const [todaysSuccess, setTodaysSuccess] = useState([]);
  useEffect(() => {
    user && setTodaysSuccess(user.todayFailed);
  }, [user]);

  //Sets the userProgress to pass it througout the app and render the proper progres in the right place
  //and to send this progress back to the database
  const [userProgress, setUserProgress] = useState(0);

  useEffect(() => {
    user && setUserProgress(user.progress);
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        token,
        setToken,
        logOutConfirm,
        toastErrorSettings,
        user,
        userProgress,
        setUserProgress,
        favoriteList,
        setFavoriteList,
        todaysList,
        setTodaysList,
        userSettings,
        setUserSettings,
        todaysCompleted,
        setTodaysCompleted,
        todaysSuccess,
        setTodaysSuccess,
        todaysFailed,
        setTodaysFailed,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { useAuthContext, AuthContext, AuthContextProvider };
