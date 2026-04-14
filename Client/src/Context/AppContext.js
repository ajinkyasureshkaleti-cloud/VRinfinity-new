import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

const AppProvider = ({ children }) => {

  const [data, setData] = useState({});

  //connect to backend
  useEffect(() => {
    axios.get("http://localhost:5000/api/content")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;