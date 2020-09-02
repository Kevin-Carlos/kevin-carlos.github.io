import React, { useEffect } from "react";

export const useClickOutside = (
  ref: React.MutableRefObject<any>,
  funcHandler: Function
) => {
  useEffect(() => {
    const clickHandler = (ev: MouseEvent) => {
      if (!ref.current || ref.current.contains!(ev.target as any)) {
        return;
      }

      funcHandler();
    }

    
    document.addEventListener("mousedown", clickHandler);

    return () => document.removeEventListener("mousedown", clickHandler);
  }, [ref, funcHandler])
}