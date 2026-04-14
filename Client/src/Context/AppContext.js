import { createContext, useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "../config/api";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState({});

  //connect to backend
  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/content`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
