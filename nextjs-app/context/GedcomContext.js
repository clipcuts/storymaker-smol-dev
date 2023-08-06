import { createContext, useContext, useState } from 'react';
import { processGedcomData } from '../utils/gedcomProcessor';

const GedcomContext = createContext();

export function useGedcom() {
  return useContext(GedcomContext);
}

export function GedcomProvider({ children }) {
  const [gedcomData, setGedcomData] = useState(null);

  const loadGedcomData = async (gedcomFile) => {
    const data = await processGedcomData(gedcomFile);
    setGedcomData(data);
  };

  const value = {
    gedcomData,
    loadGedcomData,
  };

  return <GedcomContext.Provider value={value}>{children}</GedcomContext.Provider>;
}