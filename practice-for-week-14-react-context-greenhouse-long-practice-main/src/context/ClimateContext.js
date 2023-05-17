// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

import { createContext, useContext, useState } from 'react';

export const ClimateContext = createContext();

export const useClimate = () => useContext(ClimateContext);

export default function ClimateProvider({ children }) {
  const [climateName, setClimateName] = useState(50);

  return (
    <ClimateContext.Provider
      value={{
        climateName,
        setClimateName
      }}
    >
      {children}
    </ClimateContext.Provider>
  );
}

export const HumidityContext = createContext();

export const useHumidity = () => useContext(HumidityContext);

export function HumidityProvider({ children }) {
  const [humidityName, setHumidityName] = useState(40);

  return (
    <HumidityContext.Provider
      value={{
        humidityName,
        setHumidityName
      }}
    >
      {children}
    </HumidityContext.Provider>
  );
}
