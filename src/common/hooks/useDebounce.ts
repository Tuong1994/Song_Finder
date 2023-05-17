import React from "react";

const useDebounce = (value: string) => {
  const [debounce, setDebounce] = React.useState<string>("");

  const typingRef = React.useRef<any>(null);

  React.useEffect(() => {
    if (typingRef.current) clearTimeout(typingRef.current);

    typingRef.current = setTimeout(() => setDebounce(value), 500);
  }, [value]);

  return debounce;
};

export default useDebounce;
