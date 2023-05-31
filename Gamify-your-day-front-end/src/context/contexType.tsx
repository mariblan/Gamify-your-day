type UserContextType = {
  id: string;
  name: string;
  email: string;
  password: string;
  progress: number;
  todayList: string[];
  todayCompleted: string[];
  todayFailed: string[];
  todaySuccess: string[];
  favoriteList: string[];
  active: boolean;
};

type AuthContextType = {
  children?: React.ReactNode;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  user: UserContextType | null;
};

type PetContextType = {
  petId: number;
  name: string;
  classname: string;
  petClicked: boolean;
  btn: string;
  hungerlevel: number;
  mood: string[];
  completion: string;
};

type PetSettingsContextType = {
  selectedPet: PetContextType | null;
  setSelectedPet: React.Dispatch<React.SetStateAction<PetContextType | null>>;
  canChangePet: boolean;
  setCanChangePet: React.Dispatch<React.SetStateAction<boolean>>;
};

type TaskContextType = {
  id: string;
  taskname: string;
  tasktime: string;
  taskDescription: string;
  category: string;
  difficulty: string;
};
type GottenTaskContextType = {
  category: string;
  taskdescription: string;
  difficulty: string;
  taskid: number;
  taskName: string;
  taskTime: string;
};
type Task = {
  children?: React.ReactNode;
  isAuth: boolean;
  user: UserContextType | null;
};

export type {
  AuthContextType,
  UserContextType,
  PetSettingsContextType,
  PetContextType,
  TaskContextType,
  GottenTaskContextType,
  Task,
};
