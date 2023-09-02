import { createContext, useState, useContext } from 'react';
import { TaskContextType } from './contexType';


const TaskContext = createContext<TaskContextType>({} as TaskContextType);

const useTask = () => useContext(TaskContext);

const TaskContextProvider = ({ children }: {children: React.ReactNode}) => {
  //Thisn passes the array of randomize task through the app
  const [userSettings, setUserSettings] = useState([]);

  // Setting the info from the database in different lists
  const [favoriteList, setFavoriteList] = useState([]);
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


  return (
    <TaskContext.Provider
      value={{
        favoriteList,
        setFavoriteList,
        todaysList,
        setTodaysList,
        todaysCompleted,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
export { useTask, TaskContextProvider };