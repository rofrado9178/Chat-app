import { useEffect, useState } from "react";
const PREFIX = "Chat-App-";

const useLocalStorage = (key, currentValue) => {
  const prefixKey = PREFIX + key;
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixKey);
    if (jsonValue !== null) return JSON.parse(jsonValue);
    if (typeof currentValue === "function") {
      return currentValue();
    }
    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(prefixKey, JSON.stringify(value));
  }, [prefixKey, value]);

  return [value, setValue];
};

export default useLocalStorage;
