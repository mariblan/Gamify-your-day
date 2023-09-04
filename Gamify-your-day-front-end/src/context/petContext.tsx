import { createContext, useContext, useState, useEffect } from 'react';
import { SettingsContextType } from 'src/types';
import type { ToastOptions } from 'react-toastify';
import { Options } from 'react-confirm-box/dist/types';
import { PetType } from 'src/types';
import pets from 'src/data/pets';

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
          <div className='react-confirm-box'>
            <h4>{message}</h4>
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
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContextProvider, useSettings };
