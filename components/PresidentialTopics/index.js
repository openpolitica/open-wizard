import { useContext } from 'react';
import Router from 'next/router';
import { TopicsContext } from 'hooks/useTopics';
import * as Styled from './styles';
import * as topics from 'public/images/icons/topics';
import fromIconToTopicName from './fromIconToTopicName';

const requiredNumberOfSelectedTopics = 3;
const branch = (fn1) => (fn2) => (value) => (!value ? fn1() : fn2());

export default function PresidentialTopics() {
  const {
    userSelectedTopics,
    addUserSelectedTopic,
    removeUserSelectedTopic,
  } = useContext(TopicsContext);

  return (
    <Styled.Container>
      <Styled.Header />
      <Styled.Step>
        <Styled.Row>
          <Styled.GoBackButton to="/" text="Regresa" />
        </Styled.Row>
        <Styled.Stepper steps="1" of="3" />
        <Styled.Title>¿Qué temas son importantes para ti?</Styled.Title>
        <Styled.SubTitle>
          Selecciona como mínimo 3 opciones para darte un resultado acertado
        </Styled.SubTitle>
        <Styled.Topics>
          {Object.keys(topics).map((topic) => (
            <Styled.TopicCheckbox
              key={topic}
              onClick={() =>
                branch(() =>
                  addUserSelectedTopic(fromIconToTopicName(topic)),
                )(() => removeUserSelectedTopic(fromIconToTopicName(topic)))(
                  userSelectedTopics.includes(fromIconToTopicName(topic)),
                )
              }
              checked={userSelectedTopics.includes(fromIconToTopicName(topic))}
              type={topic}
            />
          ))}
          <Styled.Button
            type={
              userSelectedTopics.length < requiredNumberOfSelectedTopics
                ? 'disabled'
                : 'primary'
            }
            disabled={
              userSelectedTopics.length < requiredNumberOfSelectedTopics
            }
            onClick={() => Router.push('/presidential-steps/2')}
            text="Continuar"
          />
        </Styled.Topics>
      </Styled.Step>
    </Styled.Container>
  );
}
