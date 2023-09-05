import type { ToastOptions } from 'react-toastify';
import type { Options } from 'react-confirm-box/dist/types';

// Definition of the types used in the context of the application

// Pet types and pet context types
// The types for the pet and pet context, although the pet context is not used yet and maybe it woudl be better to
// use a settings context to pass the pet information of the pets and tasks through the game.

type PetType = {
  petId: number;
  name: string;
  classname: string;
  petClicked: boolean;
  btn: string;
  hungerlevel: number;
  mood: string[] | string;
  completion: string;
};

type PetContextType = {
  children?: React.ReactNode;
  selectedPet: PetType | null;
  setSelectedPet: React.Dispatch<React.SetStateAction<PetContextType | null>>;
  canChangePet: boolean;
  setCanChangePet: React.Dispatch<React.SetStateAction<boolean>>;
};

// Task types and  task context types
// The types for the tasks and task context, although the task context is not used yet and maybe it woudl be better to
// use a settings context to pass the information of the pets and tasks through the game.

//A task time type to define the time of the task, it will be a number for the tasks already in the todaysList and
// an object for the database tasks (that is the task we are fetching at the beginning and the created tasks for
// premium users).
type TaskTimeType = {
  minEasy: number;
  maxEasy: number;
  minMedium: number;
  maxMedium: number;
  minHard: number;
  maxHard: number;
};

//A task description type to define the description of the task, it will be a string for the tasks
// already in the todaysList and an object for the database tasks (that is the task we are fetching at the beginning
type TaskDescriptionsType = {
  easy: string;
  medium: string;
  hard: string;
};

//A task type to define the task that can be used for all the task items in the game, whether they are
// already randomize by the user or not.
type TaskType = {
  _id: string;
  taskName: string;
  taskTime: TaskTimeType | number;
  taskDescriptions: TaskDescriptionsType | string;
  category: string;
  difficulty: string;
  user: UserContextType | null;
};

type TaskContextType = {
  children?: React.ReactNode;
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
  task?: TaskType | null;
  setTask?: React.Dispatch<React.SetStateAction<TaskType | null>>;
  gotenTask?: TaskType | null;
  setGotenTask?: React.Dispatch<React.SetStateAction<TaskType | null>>;
  todaysList?: TaskType[] | [];
  setTodaysList?: React.Dispatch<React.SetStateAction<TaskType[] | []>>;
  todaysCompleted?: TaskType[] | [];
  setTodaysCompleted?: React.Dispatch<React.SetStateAction<TaskType[] | []>>;
  todaysFailed?: TaskType[] | [];
  setTodaysFailed?: React.Dispatch<React.SetStateAction<TaskType[] | []>>;
  todaysSuccess?: TaskType[] | [];
  setTodaysSuccess?: React.Dispatch<React.SetStateAction<TaskType[] | []>>;
  favoriteList?: TaskType[] | [];
  setFavoriteList?: React.Dispatch<React.SetStateAction<TaskType[] | []>>;
  createdTasks?: TaskType[] | [];
  setCreatedTasks?: React.Dispatch<React.SetStateAction<TaskType[] | []>>;
};

//Brainstorming of a history item type for expanded user settings so that the user can see their history
//  of the day in case they want to play more than once a day.

type HistoryItemType = {
  _id?: string;
  pet: string;
  progress: number;
  toDoList: TaskType[] | [];
  completed: TaskType[] | [];
  failed: TaskType[] | [];
  success: TaskType[] | [];
  createdAt: string;
};

//Brainstorming of a history type for expanded user settings so that the user can see their history of the past
// days and how they did in each day.
type HistoryType = {
  _id?: string;
  date: string;
  historyItem: HistoryItemType[] | [];
  createdAt: string;
  updatedAt: string;
};

//Brainstorming of a user type for expanded user settings
type UserDocType = {
  _id: string;
  accountSettings: {
    name: string;
    email: string;
    password: string;
    premium: {
      premium: boolean;
      premiumDate?: string;
      premiumDays?: number;
      premiumExpired?: boolean;
      premiumExpiredDate?: string;
      plan?: string;
      hasHistory: boolean;
    };
    freeTrial: {
      freeTrial: boolean;
      freeTrialDate?: string;
      freeTrialDays: number;
      freeTrialExpired: boolean;
      freeTrialExpiredDate?: string;
    };
    freePlan: {
      freePlan: boolean;
      hasHistory: boolean;
    };
    createdAt: string;
    updatedAt: string;
  };
  gameSettings: {
    pet: {
      petId: number;
      name: string;
      classname: string;
      btn: string;
      hungerlevel: number;
      completion: string;
    };
    progress: number;
    todaysList: TaskType[] | [];
    todaysCompleted: TaskType[] | [];
    todaysFailed: TaskType[] | [];
    todaysSuccess: TaskType[] | [];
    favoriteList: TaskType[] | [];
    //created task are for the task created by the user
    createdTasks?: TaskType[] | [];
    //history is for the history of the user, it will be an array of objects where each object is a day
    history?: HistoryType[];
    active: boolean;
    createdAt: string;
    updatedAt: string;
  };
};

// Old user type and user context

// The user and user context is not used yet, but it will be used to pass the user information of the user
// through the game.

type UserType = {
  _id: string;
  name: string;
  email: string;
  password: string;
  progress: number;
  todaysList: TaskType[] | [];
  todaysCompleted: TaskType[] | [];
  todaysFailed: TaskType[] | [];
  todaysSuccess: TaskType[] | [];
  favoriteList: TaskType[] | [];
  createdTasks: TaskType[] | [];
  history?: HistoryType[];
  active: boolean;
};

// User context types maybe not needed, as most of this are related to the tasks, so maybe it would be better
// to use a settings context to pass the information of the pets and tasks through the game.
type UserContextType = {
  children?: React.ReactNode;
  user?: UserType | null;
  setUser?: React.Dispatch<React.SetStateAction<UserType | null>>;
  history?: HistoryType[];
  setHistory?: React.Dispatch<React.SetStateAction<HistoryType[]>>;
  active?: boolean;
  setActive?: React.Dispatch<React.SetStateAction<boolean>>;
};

// Auth context types
// The auth context is used to pass the authentication the user through the game.
// A test trial is on the way to test the authentication of the user in this branch.
type AuthContextType = {
  children?: React.ReactNode;
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  token?: string | (() => string);
  setToken: React.Dispatch<React.SetStateAction<string | (() => string)>>;
  login?: () => void;
  logout?: () => void;
  disabled?: boolean;
  setDisabled?: React.Dispatch<React.SetStateAction<boolean>>;
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
  loading?: boolean;
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
};

type SettingsContextType = {
  children?: React.ReactNode;
  pets: PetType[] | null;
  disabled: boolean;
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  gameFinalScreen: boolean;
  setGameFinalScreen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPet: PetType | null;
  setSelectedPet: React.Dispatch<React.SetStateAction<PetType | null>>;
  canChangePet: boolean;
  setCanChangePet: React.Dispatch<React.SetStateAction<boolean>>;
  toastErrorSettings: ToastOptions;
  options?: Options;
};

type ConfirmBoxType = {
  children?: React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
  taskFailure: boolean;
  startGame: boolean;
  isLogOut: boolean;
  setPaused: React.Dispatch<React.SetStateAction<boolean>>;
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  navigate: (path: string) => void;
  setNextClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setCanChangePet: React.Dispatch<React.SetStateAction<boolean>>;
  logOut?: () => void;
};

type ConfirmBoxButtonsType = {
  onCancel: () => void;
  onConfirm: () => void;
  taskFailure: boolean;
  startGame: boolean;
  isLogOut: boolean;
  setPaused: React.Dispatch<React.SetStateAction<boolean>>;
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  navigate: (path: string) => void;
  setNextClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setCanChangePet: React.Dispatch<React.SetStateAction<boolean>>;
  logOut: () => void;
};

type CategoryType = {
  name: string;
  alt: string;
  icon: string;
};
type CategoriesType = {
  index: number;
  e: React.MouseEvent<HTMLImageElement, MouseEvent>;
  noFilterBtn: HTMLImageElement;
  filterContainer: HTMLDivElement;
  changeClassName: ChangeClassName;
  filterByCategory: (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
  category: CategoryType;
};

type ChangeClassName = (
  e: React.MouseEvent<HTMLImageElement, MouseEvent>,
  noFilterBtn: HTMLImageElement,
  filterContainer: HTMLDivElement,
  boolean: boolean
) => void;

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
  SettingsContextType,
  ConfirmBoxType,
  ConfirmBoxButtonsType,
  CategoriesType,
};
