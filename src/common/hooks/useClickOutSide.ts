import React from "react";

const useClickOutSide = (
  ref: any,
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>
) => {
  React.useEffect(() => {
    const handleClickOutSide = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setTrigger(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutSide);
    return () => window.removeEventListener("mousedown", handleClickOutSide);
  });
};

export default useClickOutSide;
