import startCase from 'lodash.startCase';
import lowerCase from 'lodash.lowerCase';

const startCasePeruvianRegions = (
  region,
  { omit = ['de', 'en', 'el'] } = {},
) => {
  return lowerCase(region)
    .split(' ')
    .map((word) => (omit.includes(word) ? word : startCase(word)))
    .join(' ');
};

export default startCasePeruvianRegions;
