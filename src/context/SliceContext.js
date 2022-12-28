import { createContext, useContext, useEffect, useState } from "react";

export const Context = createContext();

export const DataProvider = ({ children }) => {
  const [colors, setColors] = useState("bg-gray-800");
  const [textColor, setTextColor] = useState("text-white");
  const [statusColor, setStatusColor] = useState("false");

  const modeColor = () => {
    setStatusColor(!statusColor);
    if (statusColor) {
      setColors("bg-gray-200");
      setTextColor("text-slate-600");
    } else {
      setColors("bg-gray-800");
      setTextColor("text-white");
    }
  };
  useEffect(() => {}, [statusColor, colors]);
  return (
    <Context.Provider value={{ colors, modeColor, statusColor, textColor }}>
      {children}
    </Context.Provider>
  );
};

export const DataContext = () => {
  const contextData = useContext(Context);
  return contextData;
};
