import { createContext, useState, useContext } from 'react';
import { PetContextType, PetSettingsContextType } from './contexType';

const pets : PetContextType[] = [
    {
      petId: 1,
      name: 'tortoise',
      classname: 'petbtn',
      petClicked: false,
      btn: 'tortoisebtn',
      hungerlevel: 2,
      mood: [tortoiseNorm, tortoiseHappy, tortoiseSad],
      completion:
        "The tortoise chomps happily on a couple of apples. You've done well for today!",
    },
    {
      petId: 2,
      name: 'canary',
      classname: 'petbtn',
      petClicked: false,
      btn: 'canarybtn',
      hungerlevel: 4,
      mood: [canaryNorm, canaryHappy, canarySad],
      completion:
        "The canary sings joyfully, satisfied! You've done an amazing job!",
    },
    {
      petId: 3,
      name: 'hamster',
      classname: 'petbtn',
      petClicked: false,
      btn: 'hamsterbtn',
      hungerlevel: 8,
      mood: [hamsterNorm, hamsterHappy, hamsterSad],
      completion:
        "After so many apples, the hamster seems to be finally full as it snoozes peacefully. It wasn't easy but you did it!",
    },
  ];

const PetContext = createContext<PetSettingsContextType>();

const usePetContext = () => useContext(PetContext);

const PetContextProvider = ({ children }) => {
  //To pass the infor of the selected pet to the timer components
  const [selectedPet, setSelectedPet] = useState<PetContextType | null>(null);

  //To establish that the pet cannot be change once the game starts.
  const [canChangePet, setCanChangePet] = useState(true);

  return (
    <PetContext.Provider
      value={{
        selectedPet,
        setSelectedPet,
        canChangePet,
        setCanChangePet,
      }}
    >
      {children}
    </PetContext.Provider>
  );
};
export { usePetContext, PetContext, PetContextProvider };
