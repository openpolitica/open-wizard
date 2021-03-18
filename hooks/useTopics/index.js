import { createContext } from 'react';
import { usePersistedReducer } from 'hooks/usePersistedReducer';

export const TopicsContext = createContext();

const initialTopicsState = {
  userSelected: [],
};

const reducer = (state, action) => {
  if (action.type === 'addUserSelectedTopic') {
    return { userSelected: [...state.userSelected, action.value] };
  }
  if (action.type === 'removeUserSelectedTopic') {
    const topicIndex = state.userSelected.findIndex(
      (topic) => topic === action.value,
    );
    return {
      userSelected: [
        ...state.userSelected.slice(0, topicIndex),
        ...state.userSelected.slice(topicIndex + 1),
      ],
    };
  }
};

export const TopicsProvider = ({ children }) => {
  const [state, dispatch] = usePersistedReducer(
    reducer,
    'op.topics',
    initialTopicsState,
  );

  return (
    <TopicsContext.Provider
      value={{
        userSelectedTopics: state.userSelected,
        addUserSelectedTopic: (value) =>
          dispatch({ type: 'addUserSelectedTopic', value }),
        removeUserSelectedTopic: (value) =>
          dispatch({ type: 'removeUserSelectedTopic', value }),
      }}>
      {children}
    </TopicsContext.Provider>
  );
};