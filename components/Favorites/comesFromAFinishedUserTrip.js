import ls from 'local-storage';

const includesAll = (theseValues) => (inTheseValues) =>
  theseValues.every((value) => inTheseValues.includes(value));

const comesFromAFinishedUserTrip = () =>
  includesAll(['location', 'impeachment', 'withSentence'])(
    Object.keys(ls.get('op.wizard') || {}),
  );

export default comesFromAFinishedUserTrip;
