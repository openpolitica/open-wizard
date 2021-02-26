import { createContext } from 'react';
import { usePersistedReducer } from 'hooks/usePersistedReducer';

export const FavoritesContext = createContext();

const initialFavoritesState = {
  data: [],
};

const reducer = (state, action) => {
  if (action.type === 'addFavorite') {
    return { data: [...state.data, action.value] };
  }
  if (action.type === 'removeFavoriteBySystemId') {
    const favoriteIndex = state.data.findIndex(
      (favorite) => favorite.hoja_vida_id === action.value,
    );
    return {
      data: [
        ...state.data.slice(0, favoriteIndex),
        ...state.data.slice(favoriteIndex + 1),
      ],
    };
  }
  if (action.type === 'resetFavorites') {
    return initialFavoritesState;
  }
};

export const FavoritesProvider = ({ children }) => {
  const [state, dispatch] = usePersistedReducer(
    reducer,
    'op.favorites',
    initialFavoritesState,
  );

  return (
    <FavoritesContext.Provider
      value={{
        favorites: state.data,
        addFavorite: (value) => dispatch({ type: 'addFavorite', value }),
        removeFavoriteBySystemId: (value) =>
          dispatch({ type: 'removeFavoriteBySystemId', value }),
        resetFavorites: (value) => dispatch({ type: 'resetFavorites' }),
      }}>
      {children}
    </FavoritesContext.Provider>
  );
};
