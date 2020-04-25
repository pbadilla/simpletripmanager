/* eslint-disable no-empty-function */
import React, { createContext } from "react";

const driverNameContext = createContext({
  driver: "DRIVER NAME",
  setDriver: () => { }
});

export default driverNameContext;