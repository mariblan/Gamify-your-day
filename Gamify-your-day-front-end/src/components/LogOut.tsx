import { useTask } from 'src/context/taskContext';
import { useAuth } from 'src/context';
import {
  addToProgress,
  clearCompleted,
  clearFailed,
  clearSuccess,
  clearToday,
} from 'src/fetchDB';
import { Navigate } from 'react-router-dom';

function LogOut() {
  const {
    setUserProgress,
    setTodaysCompleted,
    setTodaysList,
    setGottenTask,
    setTodaysFailed,
    setTodaysSuccess,
    setUserSettings,
    setGameFinalScreen,
    setDisabled,
    setSelectedPet,
    setCanChangePet,
  } = useTask();
  const { setToken, user, setUser, setIsAuth } = useAuth();

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
  setIsAuth(false);
  setToken('');
  setUser(null);
  setTimeout(() => <Navigate to={'../login'} />, 150);
}

export default LogOut;
