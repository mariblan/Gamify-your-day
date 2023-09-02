import { createContext, useContext, useState } from "react";
import { UserContextType, UserType } from "./contexType";

const UserContext = createContext<UserContextType>({} as UserContextType);

const useUser = () => useContext(UserContext);

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
    //Setting the user info from the database
    const [user, setUser] = useState<UserType | null>(null);
    
     //Sets the userProgress to pass it througout the app and render the proper progres in the right place
  //and to send this progress back to the database
    const [progress, setProgress] = useState<number>(0);

    //Setting the user account settings to pass them throughout the app and render the proper settings in the right place   
    //and to send this settings back to the database
    const [userSettings, setUserSettings] = useState<number>(0);
    //Setting the user info from the database
    const [userHistory, setUserHistory] = useState<number>(0);
    //Setting the user info from the database
    const [userCompleted, setUserCompleted] = useState<number>(0);
    //Setting the user info from the database
    const [userFailed, setUserFailed] = useState<number>(0);
    //Setting the user info from the database
    const [userSuccess, setUserSuccess] = useState<number>(0);
    //Setting the user info from the database
    const [userFavorite, setUserFavorite] = useState<number>(0);
    //Setting the user info from the database
    const [userCreated, setUserCreated] = useState<number>(0);
    //Setting the user info from the database
    const [userActive, setUserActive] = useState<boolean>(false);
    //Setting the user info from the database
    const [userPet, setUserPet] = useState<string>('');
    //Setting the user info from the database
    const [userPetMood, setUserPetMood] = useState<number>(0);
    //Setting the user info from the database
    const [userPetHunger, setUserPetHunger] = useState<number>(0);
    //Setting the user info from the database
    const [userPetCompletion, setUserPetCompletion] = useState<string>('');
    //Setting the user info from the database
    const [userPetBtn, setUserPetBtn] = useState<string>('');
    //Setting the user info from the database

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                progress,
                setProgress,
                userSettings,
                setUserSettings,
                userHistory,
                setUserHistory,
                userCreated,
                setUserCreated,
                userActive,
                setUserActive,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}