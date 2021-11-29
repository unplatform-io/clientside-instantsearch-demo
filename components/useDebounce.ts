import { useRef } from "react";

export function useDebounceCallback(timeout = 250) {
  const timerId: any = useRef(null);

  function debounceCallback(cbFun: any) {
    window.clearTimeout(timerId.current);

    timerId.current = window.setTimeout(cbFun, timeout);
  }

  return [debounceCallback];
}
