export const initializeEducationState = (filters) => {
  if (filters.includes('upToPrimary')) {
    return toPrimary();
  } else if (filters.includes('upToSecondary')) {
    return toSecondary();
  } else if (filters.includes('upToHighSchool')) {
    return toHighSchool();
  } else if (filters.includes('upToPostgraduate')) {
    return toPostgraduate();
  } else {
    return toInitialEducationState();
  }
};

export const toInitialEducationState = () => ({
  primary: false,
  secondary: false,
  high: false,
  post: false,
});

export const toPrimary = () => ({
  primary: true,
  secondary: false,
  high: false,
  post: false,
});

export const upToPrimaryFilterIn = () => ['upToPrimary'];
export const upToPrimaryFilterOut = () => [];

export const toSecondary = () => ({
  primary: true,
  secondary: true,
  high: false,
  post: false,
});

export const upToSecondaryFilterIn = () => ['upToSecondary'];
export const upToSecondaryFilterOut = () => ['upToPrimary'];

export const toHighSchool = () => ({
  primary: true,
  secondary: true,
  high: true,
  post: false,
});

export const upToHighSchoolFilterIn = () => ['upToHighSchool'];
export const upToHighSchoolFilterOut = () => ['upToSecondary'];

export const toPostgraduate = () => ({
  primary: true,
  secondary: true,
  high: true,
  post: true,
});

export const upToPostgraduateFilterIn = () => ['upToPostgraduate'];
export const upToPostgraduateFilterOut = () => ['upToHighSchool'];
