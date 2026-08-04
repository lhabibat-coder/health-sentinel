import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

import {
  healthProgrammes,
  type HealthProgramme,
} from "../data/programmes";

type ProgrammeContextType = {
  programmes: HealthProgramme[];
  selectedProgramme: HealthProgramme;
  selectProgramme: (id: string) => void;
};

const ProgrammeContext =
  createContext({} as ProgrammeContextType);

export function ProgrammeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [selectedProgramme, setSelectedProgramme] =
    useState(healthProgrammes[0]);

  function selectProgramme(id: string) {
    const programme = healthProgrammes.find(
      (p) => p.id === id
    );

    if (programme) {
      setSelectedProgramme(programme);
    }
  }

  return (
    <ProgrammeContext.Provider
      value={{
        programmes: healthProgrammes,
        selectedProgramme,
        selectProgramme,
      }}
    >
      {children}
    </ProgrammeContext.Provider>
  );
}

export function useProgramme() {
  return useContext(ProgrammeContext);
}