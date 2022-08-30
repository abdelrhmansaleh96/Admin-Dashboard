import { createTheme } from "@mui/material/styles";
import React, { useContext, useReducer } from "react";
import reducer from "../reducers/main_reducer";

const MainContext = React.createContext();
const initialState = {};
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#b647e6",
    },
    secondary: {
      main: "#c1c1c1",
    },
  },
  typography: {
    fontFamily: ["Cairo", "sans-serif"].join(","),
  },
});
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
export const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MainContext.Provider value={{ ...state, theme, darkTheme }}>
      {children}
    </MainContext.Provider>
  );
};
// make sure use
export const useMainContext = () => {
  return useContext(MainContext);
};
