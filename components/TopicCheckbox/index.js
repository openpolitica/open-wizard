import * as Styled from './styles.js';
import * as icons from 'public/images/icons/topics';
import fromIconToTopicName from 'components/PresidentialTopics/fromIconToTopicName';

const translationMap = {
  education: 'educación',
  health: 'salud',
  economy: 'economía',
  gobernability: 'gobernanza',
  security: 'seguridad',
  environment: 'medio ambiente',
};

const TopicCheckbox = ({ type, checked, ...props }) => {
  const Icon = icons[type || 'EducationIcon'];

  return (
    <div {...props}>
      <Styled.Checkbox name={type} />
      <Styled.Label checked={checked} htmlFor={type}>
        <Styled.TopicIcon as={Icon} checked={checked} />
        <Styled.TopicTitle>
          {translationMap[fromIconToTopicName(type)]}
        </Styled.TopicTitle>
      </Styled.Label>
    </div>
  );
};

export default TopicCheckbox;
