import startCase from 'lodash.startCase';
import lowerCase from 'lodash.lowerCase';

const startCasePeruvianRegions = (
  region,
  { omit = ['de', 'en', 'el', 'la', 'del'] } = {},
) => {
  const lowerRegionArray = lowerCase(region).split(' ');
  return lowerRegionArray
    .map(word =>
      word !== lowerRegionArray[0] && omit.includes(word)
        ? word
        : startCase(word),
    )
    .join(' ');
};

export default startCasePeruvianRegions;
