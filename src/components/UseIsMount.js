import { useEffect, useRef } from "react";

export default function UseIsMount() {
  let isMount = useRef(false);

  useEffect(() => {
    isMount.current = true;

    return () => {
      isMount.current = false;
    };
  }, []);

return UseIsMount;
}