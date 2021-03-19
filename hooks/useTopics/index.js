import { createContext, useContext } from 'react';
import { usePersistedReducer } from 'hooks/usePersistedReducer';

export const TopicsContext = createContext();

const initialTopicsState = {
  userSelected: [],
  quizItems: {},
  userAnswers: [],
};

const reducer = (state, action) => {
  if (action.type === 'addUserSelectedTopic') {
    return {
      ...state,
      userSelected: [...state.userSelected, action.value],
    };
  }
  if (action.type === 'removeUserSelectedTopic') {
    const topicIndex = state.userSelected.findIndex(
      (topic) => topic === action.value,
    );
    return {
      ...state,
      userSelected: [
        ...state.userSelected.slice(0, topicIndex),
        ...state.userSelected.slice(topicIndex + 1),
      ],
    };
  }
  if (action.type === 'addQuizItems') {
    return { ...state, quizItems: action.value };
  }
  if (action.type === 'addUserAnswers') {
    const answerIndex = state.userAnswers.findIndex(
      (answer) => answer.questionId === action.value.questionId,
    );

    if (answerIndex === -1) {
      return {
        ...state,
        userAnswers: [...state.userAnswers, action.value],
      };
    } else {
      const newUserAnswers = [...state.userAnswers];
      newUserAnswers[answerIndex] = action.value;
      return {
        ...state,
        userAnswers: newUserAnswers,
      };
    }
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
        quizItems: state.quizItems,
        addQuizItems: (value) => dispatch({ type: 'addQuizItems', value }),
        userAnswers: state.userAnswers,
        addUserAnswers: (value) => dispatch({ type: 'addUserAnswers', value }),
      }}>
      {children}
    </TopicsContext.Provider>
  );
};

export function useTopics() {
  const context = useContext(TopicsContext);
  if (!context) {
    throw new Error(`useTopics must be used within a TopicsProvider`);
  }
  return context;
}
