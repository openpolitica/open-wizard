const fromTopicNameToIcon = (text) =>
  text.charAt(0).toUpperCase() + text.slice(1) + 'Icon';

export default fromTopicNameToIcon;
