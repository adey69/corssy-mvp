import { useState } from 'react';

export default () => {
  const [isError, setIsError] = useState(false);

  return {
    isError,
    setIsError,
  };
};