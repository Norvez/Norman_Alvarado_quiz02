import React from "react";
import MyContext from "./MyContext";

const MyProvider: React.FC = ({ children }) => {
  const products = [
    { id: 1, name: "Mouse", step: 1, price: 60 },
    { id: 2, name: "Monitor", step: 1, price: 70 },
    { id: 4, name: "Keyboard", step: 2, price: 80 },
    { id: 5, name: "Headset", step: 2, price: 90 },
    { id: 6, name: "Tablet", step: 3, price: 100 },
    { id: 7, name: "Hub", step: 3, price: 110 }
  ];

  return (
    <MyContext.Provider value={{ products }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;