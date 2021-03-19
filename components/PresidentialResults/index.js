import React from 'react';
import { useTopics } from 'hooks/useTopics';

export default function PresidentialResults() {
  const { userAnswers } = useTopics();

  return (
    <div>
      TODO: results
      {userAnswers.map(({ questionId, answerId }) => (
        <div key={questionId}>
          {questionId} <span>{answerId || 'omitted answer'}</span>
        </div>
      ))}
    </div>
  );
}
