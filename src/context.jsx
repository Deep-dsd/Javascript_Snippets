import { createContext, useContext, useReducer } from "react";
import projectData from "./data";

const appContext = createContext();

const initialState = {
  projects: projectData,
  filteredProjects: projectData,
  filterTag: "all",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "PROJECT_FILTER":
      state.filteredProjects = [...state.projects];
      if (action.payload === "all") {
        return { ...state, filterTag: "all" };
      } else {
        const newFilteredProjects = state.filteredProjects.filter(
          (project) => project.tag === action.payload
        );
        return {
          ...state,
          filteredProjects: newFilteredProjects,
          filterTag: action.payload,
        };
      }
    default:
      throw new Error(`No Action Found Named: ${action.type}`);
  }
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const filterHandler = (value) => {
    dispatch({ type: "PROJECT_FILTER", payload: value });
  };
  return (
    <appContext.Provider value={{ ...state, filterHandler }}>
      {children}
    </appContext.Provider>
  );
};

export default Context;

export const useAppContext = () => {
  return useContext(appContext);
};
