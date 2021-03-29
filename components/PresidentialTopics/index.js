import Router from 'next/router';
import { useEffect } from 'react';
import * as Styled from './styles';
import * as topics from 'public/images/icons/topics';
import fromIconToTopicName from './fromIconToTopicName';
import { useTopics } from 'hooks/useTopics';
import MainLayout from 'components/layouts/MainLayout';
import Chip from 'components/Chip';

const requiredNumberOfSelectedTopics = 1;
const branch = (fn1) => (fn2) => (value) => (!value ? fn1() : fn2());

export default function PresidentialTopics() {
  const {
    userSelectedTopics,
    addUserSelectedTopic,
    removeUserSelectedTopic,
    resetTopics,
  } = useTopics();

  useEffect(() => {
    resetTopics();
  }, [Router.pathname]);

  return (
    <MainLayout>
      <Styled.Row>
        <Styled.GoBackButton to="/" text="Regresa" />
      </Styled.Row>
      <Chip type={'info'}>Este cuestionario sólo te ayudará a encontrar los <b>planes de gobierno</b> con los que tienes <b>más posiciones en común.</b></Chip>
      <Styled.Title>¿Qué temas son importantes para ti?</Styled.Title>
      <Styled.SubTitle>Selecciona al menos un tema</Styled.SubTitle>
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
          disabled={userSelectedTopics.length < requiredNumberOfSelectedTopics}
          onClick={() => Router.push('/presidential-steps/2')}
          text="Continuar"
        />
      </Styled.Topics>
    </MainLayout>
  );
}
