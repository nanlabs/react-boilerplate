import { useState, useEffect } from 'react';

/**
 * This hook is for listen the scroll event and returns
 * a booolean if it's outside a threshold
 * @returns boolean If the scroll exceeds the threshold
 */
const useScroll = (threshold = 20) => {
  const [isFixed, setIsFixed] = useState(false);

  const update = () => (window.scrollY >= threshold ? setIsFixed(true) : setIsFixed(false));

  useEffect(() => {
    window.addEventListener('scroll', update);
    return () => {
      window.removeEventListener('scroll', update);
    };
  }, []);

  return isFixed;
};

export default useScroll;
