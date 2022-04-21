import { useRef, useEffect } from "react";

export function useKey(key, cb, stateStart,setStart,) {
  const callbackRef = useRef(cb);

  useEffect(() => {
    callbackRef.current = cb;
  });

  useEffect(() => {
    function handle(event) {
      // Any key
      if (!stateStart.start ) {
        callbackRef.current(event);
        stateStart.start= true
        setStart(true)
      }
 
      // Same key
      if (event.code === key && stateStart.start) {
        callbackRef.current(event);
      }

    }
    document.addEventListener("keypress", handle);
    return () => document.removeEventListener("keypress", handle);
  }, [key]);
}
