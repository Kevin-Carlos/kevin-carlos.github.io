import { RefObject, useEffect } from "react";

export const useClickOutside = (
  ref: RefObject<Element>,
  funcHandler: (ev: MouseEvent) => void
): void => {
  useEffect(() => {
    const clickHandler = (ev: MouseEvent) => {
      if (!ref.current || ref.current.contains(ev.target as Node)) {
        return;
      }

      funcHandler(ev);
    };

    document.addEventListener("mousedown", clickHandler);

    return () => document.removeEventListener("mousedown", clickHandler);
  }, [ref, funcHandler]);
};
