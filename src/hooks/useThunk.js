import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

export const useThunk = (thunk) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const runThunk = useCallback(
    (arg = null) => {
      setIsLoading(true);
      dispatch(thunk(arg))
        .unwrap()
        .catch(() => {
          setError(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [dispatch, thunk]
  );

  return [runThunk, isLoading, error];
};
