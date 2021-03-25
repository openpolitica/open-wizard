import ls from 'local-storage';

const includesAll = (theseValues) => (inTheseValues) =>
  theseValues.every((value) => inTheseValues.includes(value));

const hasPresidentialKeys = () =>
  includesAll(['quizItems', 'userAnswers', 'userSelected'])(
    Object.keys(ls.get('op.topics') || {}),
  );

const comesFromAFinishedPresidentialUserTrip = () =>
  hasPresidentialKeys() &&
  Object.keys(ls.get('op.topics').quizItems).length &&
  Object.keys(ls.get('op.topics').userAnswers).length &&
  Object.keys(ls.get('op.topics').userSelected).length;

export default comesFromAFinishedPresidentialUserTrip;
