import { TopicIcon, TopicTitle, TopicDetail, TopicItem } from './styles.js';
import * as icons from 'public/images/icons/topics';
import fromTopicNameToIcon from './fromTopicNameToIcon';

const translationMap = {
  education: 'educación',
  environment: 'ambiente',
  governability: 'gobernabilidad',
  growth: 'crecimiento',
  health: 'salud',
  rights: 'derechos',
  security: 'seguridad',
  taxes: 'impuestos',
};

const BaseListGroupItem = ({ type, questions, ...props }) => {
  const Icon = icons[fromTopicNameToIcon(type)];
  const translatedTopic = translationMap[type];
  return (
    <TopicItem {...props}>
      <TopicIcon
        as={Icon}
        width="30"
        height="30"
        viewBox="0 0 50 50"></TopicIcon>
      <TopicTitle>{translatedTopic}:</TopicTitle>
      <TopicDetail>
        &nbsp;{questions[type] ? questions[type].length : 0} preguntas
      </TopicDetail>
    </TopicItem>
  );
};

export default BaseListGroupItem;
