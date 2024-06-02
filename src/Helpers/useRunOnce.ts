import { useRef, useEffect } from "react";

type useRunOnceCallback = () => void;

const useRunOnce = (callback: useRunOnceCallback) => {
  const runOnce = useRef<boolean>(false);

  useEffect(() => {
    if (runOnce.current) return;
    runOnce.current = true;
    callback();
  }, []);
};

export default useRunOnce;
