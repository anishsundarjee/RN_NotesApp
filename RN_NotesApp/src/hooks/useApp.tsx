import {createContext, useState} from 'react';

export const AppContext = createContext({
  reloadApp: 0,
  setReloadApp: (_reloadApp: number) => {
    // this is intentional
  },
});

export const useApp = () => {
  const [reloadApp, setReloadApp] = useState(0);

  return {reloadApp, setReloadApp};
};
