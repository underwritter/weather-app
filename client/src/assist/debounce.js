import {useCallback} from "react";



export function debounce(func, delay = 300) {
  let timeout;
  const debounced = (...args) => {
    window.clearTimeout(timeout);
    const later = () => {
      window.clearTimeout(timeout);
      func(...args);
    };
    timeout = window.setTimeout(later, delay);
  };

  return debounced;
}

export const useDebounce = (delay) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(
    debounce((func) => func(), delay),
    [delay]
  );
};

