import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameIntro from './components/GameIntroScreen';
import Login from './components/Login';
import Register from './components/Register';
import RequireLogin from './components/RequireLogin';
import AllTasks from './components/FullTaskList';
import AnimalSelection from './components/SetUpPet';
import GetTask from './components/GameGo';
import TaskTimer from './components/Timer';
import MyTaskList from './components/SetUpTodayList';
import TaskSuccess from './components/TaskSuccess';
import TaskFailure from './components/TaskFailure';
import GameOver from './components/GameEndScreen';
import { TaskProvider } from './context/taskContext';
import { checkValidToken } from './DB/fetchDB';
import { useAuth, AuthContextProvider } from './context';

function App() {
  const { isAuth, setIsAuth, user, setUser, token, setToken } = useAuth();
  const toastErrorSettings = {
    position: 'top-center',
    closeOnClick: true,
    hideProgressBar: true,
    theme: 'colored',
    autoClose: 2000,
  };

  return (
    <Router>
      <AuthContextProvider>
        <TaskProvider
          toastErrorSettings={toastErrorSettings}
          user={user}
          setUser={setUser}
        >
          <Routes>
            <Route path='/' element={<GameIntro />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='auth' element={<RequireLogin />}>
              <Route path='alltasks' element={<AllTasks />} />
              <Route path='mytasks' element={<MyTaskList />} />
              <Route path='petselection' element={<AnimalSelection />} />
              <Route path='gamego' element={<GetTask />} />
              <Route path='tasktimer' element={<TaskTimer />} />
              <Route path='tasksuccess' element={<TaskSuccess />} />
              <Route path='taskfailure' element={<TaskFailure />} />
              <Route path='gameover' element={<GameOver />} />
            </Route>
          </Routes>
        </TaskProvider>
      </AuthContextProvider>
      <ToastContainer />
    </Router>
  );
}

export default App;
