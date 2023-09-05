import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import GameIntro from 'src/components/GameIntroScreen';
// import Login from 'src/components/Login';
// import Register from 'src/components/Register';
// import RequireLogin from 'src/components/RequireLogin';
// import AllTasks from 'src/components/FullTaskList';
// import AnimalSelection from 'src/components/SetUpPet';
// import GetTask from 'src/components/GameGo';
// import TaskTimer from 'src/components/Timer';
// import MyTaskList from 'src/components/SetUpTodayList';
// import TaskSuccess from 'src/components/TaskSuccess';
// import TaskFailure from 'src/components/TaskFailure';
// import GameOver from 'src/components/GameEndScreen';
import { GameIntro, Login, Register, RequireLogin, AllTasks, AnimalSelection, GetTask, TaskTimer, MyTaskList, TaskSuccess, TaskFailure, GameOver } from 'src/components';
import { TaskProvider } from 'src/context/taskContext';
import { checkValidToken } from 'src/DB/fetchDB';
import { useAuth, AuthContextProvider } from 'src/context';

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
