import ls from 'local-storage';

const includesAll = (theseValues) => (inTheseValues) =>
  theseValues.every((value) => inTheseValues.includes(value));

const comesFromAFinishedUserTrip = () =>
  includesAll(['sentencias'])(Object.keys(ls.get('op.parliament') || {}));

export default comesFromAFinishedUserTrip;
