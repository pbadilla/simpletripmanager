/* eslint-disable no-empty-function */
import { createContext } from "react";

const driverNameContext = createContext({
  driver: "DRIVER NAME",
  setDriver: () => { }
});

export default driverNameContext;