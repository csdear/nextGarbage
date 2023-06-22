import { useState, useEffect } from 'react';

export function useThingyIdentifier() {
  const [isThingy, setIsThingy] = useState(true);

  useEffect(() => {
    const randomBoolean = Math.random() < 0.5;
    setIsThingy(randomBoolean);
  }, []);

  return isThingy;
}