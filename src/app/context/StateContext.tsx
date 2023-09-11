'use client';

import type { Dispatch, SetStateAction } from 'react';
import { createContext, useContext, useState } from 'react';

interface JobProps {
  isOpen: string;
  setIsOpen: Dispatch<SetStateAction<string>>;
}

const JobContext = createContext<JobProps>({
  isOpen: 'Chemtron Enterprise',
  setIsOpen: (): string => 'Chemtron Enterprise',
});

export const JobContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState('Chemtron Enterprise');

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <JobContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </JobContext.Provider>
  );
};

export const UseJobContext = () => useContext(JobContext);
