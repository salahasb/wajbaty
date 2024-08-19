import { useEffect, useState } from "react";

export default function useLocalStorage(initialState, storageName) {
  const [value, setValue] = useState(() => {
    return JSON.parse(localStorage.getItem(storageName)) || initialState;
  });

  useEffect(() => {
    localStorage.setItem(storageName, JSON.stringify(value));
  }, [value, storageName]);

  return [value, setValue];
}
