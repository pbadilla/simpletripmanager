/* eslint-disable no-empty-function */
import React, { createContext, useState } from "react";

export const DriverStateContext = React.createContext();
export const DriverSetContext = React.createContext();

function DriverProvider({children}) {
  const [driverName, setDriverName] = useState();
  return (
    <DriverStateContext.Provider value={driverName}>
      <DriverSetContext.Provider value={setDriverName}>
        {children}
      </DriverSetContext.Provider>
    </DriverStateContext.Provider>
  )
}
export default DriverProvider;