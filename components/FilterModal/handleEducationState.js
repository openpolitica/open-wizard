// This function lays down the logic for the visual part of the education
// filter section.
// it handles the click on each checkbox by first asking if a greater grade
// is checked, if true, it will return true as it should be kept checked
// if false, it will ask if the checkbox is checked so it should return false
// for the other cases it should return true as it's just being clicked with
// its state being false.

// It is a really cumbersome logic, that's why it has its own file
// We could try to refactor this but first we could write some tests too.

const handleEducationState = (state) => (value) => (fn) => {
  if (value === 'post') {
    if (state.post) {
      return fn(false);
    }
    return fn(true);
  }
  if (value === 'high') {
    if (state.post) {
      return fn(true);
    }
    if (state.high) {
      return fn(false);
    }
    return fn(true);
  }
  if (value === 'secondary') {
    if (state.high || state.post) {
      return fn(true);
    }
    if (state.secondary) {
      return fn(false);
    }
    return fn(true);
  }
  if (value === 'primary') {
    if (state.high || state.post || state.secondary) {
      return fn(true);
    }
    if (state.primary) {
      return fn(false);
    }
    return fn(true);
  }
};

export default handleEducationState;
