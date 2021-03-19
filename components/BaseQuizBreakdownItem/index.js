import { TopicIcon, TopicTitle, TopicDetail, TopicItem } from './styles.js';
import * as icons from 'public/images/icons/topics';
import fromTopicNameToIcon from './fromTopicNameToIcon';
import { translationMap } from 'components/TopicCheckbox';

translationMap.taxes = 'impuestos';
const BaseQuizBreakdownItem = ({ type, questions, ...props }) => {
  const Icon = icons[fromTopicNameToIcon(type)];
  const translatedTopic = translationMap[type];
  return (
    <TopicItem {...props}>
      <TopicIcon as={Icon} width="30" height="30" viewBox="0 0 50 50" />
      <TopicTitle>{translatedTopic}:</TopicTitle>
      <TopicDetail>
        {questions[type] ? questions[type].length : 0} preguntas
      </TopicDetail>
    </TopicItem>
  );
};

export default BaseQuizBreakdownItem;
