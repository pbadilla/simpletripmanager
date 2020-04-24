/* eslint-disable no-empty-function */
import { createContext } from "react";

// set the defaults
const driverNameContext = createContext({
  driverNameBanner: 'DRIVER',
  setDriverNameBanner: () => { },
});

export const driverNameProvider = driverNameContext.Provider;
export const driverNameConsumer = driverNameContext.Consumer;

export default driverNameContext;
