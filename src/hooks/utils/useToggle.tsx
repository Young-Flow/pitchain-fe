import { useState } from 'react';

export const useToggle = <A, B>(A: A, B: B) => {
  const [toggledState, setToggledState] = useState<A | B>(A);

  const handleToggle = () => {
    setToggledState((prev: A | B) => (prev === A ? B : A));
  };

  return { toggledState, handleToggle };
};
