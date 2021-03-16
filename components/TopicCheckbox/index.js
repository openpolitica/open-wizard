import * as Styled from './styles.js';
import * as icons from 'public/images/icons/topics';
import fromIconToTopicName from 'components/PresidentialTopics/fromIconToTopicName';

const translationMap = {
  education: 'educación',
  environment: 'ambiente',
  governability: 'gobernabilidad',
  growth: 'crecimiento',
  health: 'salud',
  rights: 'derechos',
  security: 'seguridad',
  taxes: 'impuestos y pensiones',
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
