import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [value, setValueState] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (newValue) => {
    try {
      setValueState(newValue);
      if (newValue === null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    } catch { }
  };

  return [value, setValue];
};
