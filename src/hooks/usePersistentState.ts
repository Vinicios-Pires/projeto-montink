import { useState, useEffect } from "react";

interface StoredData<T> {
  value: T;
  timestamp: number;
}

export const usePersistentState = <T>(
  key: string,
  initialValue: T,
  expirationMinutes: number = 15
): [T, (value: T) => void] => {
  const [state, setState] = useState<T>(initialValue);
  const expirationTime = expirationMinutes * 60 * 1000;

  const saveToStorage = (value: T) => {
    try {
      const dataToStore: StoredData<T> = {
        value,
        timestamp: Date.now(),
      };
      localStorage.setItem(key, JSON.stringify(dataToStore));
    } catch (error) {
      console.error(`Error saving in localStorage (${key}):`, error);
    }
  };

  const getFromStorage = (): T | null => {
    try {
      const storedData = localStorage.getItem(key);
      if (!storedData) return null;

      const { value, timestamp }: StoredData<T> = JSON.parse(storedData);
      const now = Date.now();

      if (now - timestamp < expirationTime) {
        return value;
      } else {
        localStorage.removeItem(key);
        return null;
      }
    } catch (error) {
      console.error(`Error recovering from localStorage (${key}):`, error);
      localStorage.removeItem(key);
      return null;
    }
  };

  useEffect(() => {
    const savedValue = getFromStorage();
    if (savedValue !== null) {
      setState(savedValue);
    }
  }, []);

  const setPersistentState = (value: T) => {
    setState(value);
    saveToStorage(value);
  };

  return [state, setPersistentState];
};
