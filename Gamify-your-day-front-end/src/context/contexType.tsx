type PetType = {
  petId: number;
  name: string;
  classname: string;
  petClicked: boolean;
  btn: string;
  hungerlevel: number;
  mood: string[];
  completion: string;
};

type PetContextType = {
  children?: React.ReactNode;
  selectedPet: PetType | null;
  setSelectedPet: React.Dispatch<React.SetStateAction<PetContextType | null>>;
  canChangePet: boolean;
  setCanChangePet: React.Dispatch<React.SetStateAction<boolean>>;
};

type TaskTimeType = {
  minEasy: number;
  maxEasy: number;
  minMedium: number;
  maxMedium: number;
  minHard: number
  maxHard: number,
}

type TaskDescriptionsType = {
  easy: string;
  medium: string;
  hard: string;
}

type TaskType = {
  id: string;
  taskName: string;
  taskTime: TaskTimeType | number;
  taskDescriptions: TaskDescriptionsType | string;
  category: string;
  difficulty: string;
  user: UserContextType | null;
}

type TaskContextType = {
  children?: React.ReactNode;
  task?: TaskType | null;
  setTask?: React.Dispatch<React.SetStateAction<TaskType | null>>;
  gotenTask?: TaskType | null;
  setGotenTask?: React.Dispatch<React.SetStateAction<TaskType | null>>;
  taskName?: string;
  setTaskName?: React.Dispatch<React.SetStateAction<string>>;
  taskTime?: TaskTimeType | string;
  setTaskTime?: React.Dispatch<React.SetStateAction<TaskTimeType | string>>;
  taskDescription?: TaskDescriptionsType | string;
  setTaskDescription?: React.Dispatch<React.SetStateAction<TaskDescriptionsType | string>>;
  category?: string;
  setCategory?: React.Dispatch<React.SetStateAction<string>>;
  difficulty?: string;
  setDifficulty?: React.Dispatch<React.SetStateAction<string>>;
  user: UserContextType | null;
  setUser: React.Dispatch<React.SetStateAction<UserContextType | null>>;
};

type HistoryItemType = {
  id: string;
  pet: string;
  progress: number;
  todayList: TaskType[] | [];
  todayCompleted: TaskType[] | [];
  todayFailed: TaskType[] | [];
  todaySuccess: TaskType[] | [];
  createdAt: string;
};

type HistoryType = {
  id: string;
  date: string;
  historyItem: HistoryItemType[] | null;
};

type UserType = {
  id: string;
  name: string;
  email: string;
  password: string;
  progress: number;
  todayList: TaskType[] | [];
  todayCompleted: TaskType[] | [];
  todayFailed: TaskType[] | [];
  todaySuccess: TaskType[] | [];
  favoriteList: TaskType[] | [];
  createdTasks: TaskType[] | [];
  history: HistoryType[];
  active: boolean;
};

type UserContextType = {
  children?: React.ReactNode;
  id?: string;
  user?: UserType | null;
  setUser?: React.Dispatch<React.SetStateAction<UserType | null>>;
  todayList?: TaskType[] | [];
  setTodayList?: React.Dispatch<React.SetStateAction<TaskType[] | []>>;
  todayCompleted?: TaskType[] | [];
  setTodayCompleted?: React.Dispatch<React.SetStateAction<TaskType[] | []>>;
  todayFailed?: TaskType[] | [];
  setTodayFailed?: React.Dispatch<React.SetStateAction<TaskType[] | []>>;
  todaySuccess?: TaskType[] | [];
  setTodaySuccess?: React.Dispatch<React.SetStateAction<TaskType[] | []>>;
  favoriteList?: TaskType[] | [];
  setFavoriteList?: React.Dispatch<React.SetStateAction<TaskType[] | []>>;
  createdTasks?: TaskType[] | [];
  setCreatedTasks?: React.Dispatch<React.SetStateAction<TaskType[] | []>>;
  history?: HistoryType[];
  setHistory?: React.Dispatch<React.SetStateAction<HistoryType[]>>;
  active?: boolean;
  setActive?: React.Dispatch<React.SetStateAction<boolean>>;
};


type AuthContextType = {
  children?: React.ReactNode;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  user?: UserContextType | null;
};









export type { 
  PetType,
  PetContextType,
  TaskTimeType,
  TaskDescriptionsType,
  TaskType,
  TaskContextType,
  HistoryItemType,
  HistoryType,
  UserType,
  UserContextType,
  AuthContextType,
};
