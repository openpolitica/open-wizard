// Receives a single license or a concatenation of various licenses
// Looks for the occurences of words in licensesIssues
// returns true if there is a match (issue with any license)
const licenseIssues = ['inhabilita', 'retenida', 'Suspendida'];

const hasDriverLicenseIssue = (license) =>
  new RegExp(licenseIssues.join('|')).test(license);

export default hasDriverLicenseIssue;
