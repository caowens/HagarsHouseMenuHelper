import { useState, useEffect } from "react";

const usePersistedState = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    const savedState = JSON.parse(localStorage.getItem(key));
    return savedState !== null ? savedState : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default usePersistedState;
