import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SettingsContextType } from 'src/types';
import type { ToastOptions } from 'react-toastify';
import { Options } from 'react-confirm-box/dist/types';
import { PetType } from 'src/types';
import pets from 'src/data/pets';
import ConfirmBox from 'src/components/ConfirmBoxComponents';

const settingsContextDefaultValues: SettingsContextType = {
  pets,
  disabled: false,
  setDisabled: () => {},
  gameFinalScreen: false,
  setGameFinalScreen: () => {},
  selectedPet: null,
  setSelectedPet: () => {},
  canChangePet: false,
  setCanChangePet: () => {},
  toastErrorSettings: {
    position: 'top-center',
    closeOnClick: true,
    hideProgressBar: true,
    theme: 'colored',
    autoClose: 2000,
  },
  // options: {
  //   render: (message, onConfirm, onCancel) => {
  //     return (
  //       <ConfirmBox
  //         onCancel={onCancel}
  //         onConfirm={onConfirm}
  //         taskFailure={false}
  //         startGame={false}
  //         isLogOut={false}
  //         setPaused={() => {}}
  //         setDisabled={() => {}}
  //         navigate={() => {}}
  //         setNextClicked={() => {}}
  //         setCanChangePet={() => {}}
  //       >
  //         {message}
  //       </ConfirmBox>
  //     );
  //   },
  // },
};

const SettingsContext = createContext<SettingsContextType>(
  settingsContextDefaultValues
);

const useSettings = () => useContext(SettingsContext);

const SettingsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [gameFinalScreen, setGameFinalScreen] = useState<boolean>(false);
  const [selectedPet, setSelectedPet] = useState<null | PetType>(null);
  const [canChangePet, setCanChangePet] = useState<boolean>(true);
  const [taskFailure, setTaskFailure] = useState<boolean>(false);
  const [startGame, setStartGame] = useState<boolean>(false);
  const [isLogOut, setIsLogOut] = useState<boolean>(false);
  const [paused, setPaused] = useState<boolean>(false);
  const [nextClicked, setNextClicked] = useState<boolean>(false);
  const navigate = useNavigate();

  const toastErrorSettings: ToastOptions = {
    position: 'top-center',
    closeOnClick: true,
    hideProgressBar: true,
    theme: 'colored',
    autoClose: 2000,
  };

  //  The options for the setup of the log out confirm box and the functions of its buttons.
  const options: Options = {
    render: (message, onConfirm, onCancel) => {
      return (
        <ConfirmBox
          onCancel={onCancel}
          onConfirm={onConfirm}
          taskFailure={taskFailure}
          startGame={startGame}
          isLogOut={isLogOut}
          setPaused={setPaused}
          setDisabled={setDisabled}
          navigate={navigate}
          setNextClicked={setNextClicked}
          setCanChangePet={setCanChangePet}
        >
          {message}
        </ConfirmBox>
      );
    },
  };

  return (
    <SettingsContext.Provider
      value={{
        pets,
        disabled,
        setDisabled,
        gameFinalScreen,
        setGameFinalScreen,
        selectedPet,
        setSelectedPet,
        canChangePet,
        setCanChangePet,
        toastErrorSettings,
        options,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContextProvider, useSettings };
