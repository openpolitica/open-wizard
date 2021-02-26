import { useEffect, useReducer } from 'react';
import ls from 'local-storage';

export function usePersistedReducer(reducer, key, initialState) {
  const init = ls(key) || initialState;
  const [state, dispatch] = useReducer(reducer, init);

  useEffect(() => {
    ls(key, state);
  }, [key, state]);

  return [state, dispatch];
}
