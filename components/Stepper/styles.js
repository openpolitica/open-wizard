import styled from 'styled-components';

const stepBallColorPriority = {
  taken: '#4EB5A2',
  untaken: '#F3F8F7',
};
const stepLineColorPriority = {
  taken: '#3C9484',
  untaken: '#CEE6E1',
};

export const StepBall = styled('div')`
  background-color: ${(props) =>
    stepBallColorPriority[props.type || 'untaken']};
  border-radius: 0.625rem;
  height: 1.25rem;
  width: 1.25rem;
  border: ${({ active, type }) =>
    active
      ? `2px solid ${stepLineColorPriority[type || 'taken']}`
      : `1px solid ${stepLineColorPriority[type || 'untaken']}`};
`;

export const StepLine = styled('div')`
  background-color: ${(props) =>
    stepLineColorPriority[props.type || 'untaken']};
  height: 0.0625rem;
  width: 4.0625rem;
`;

export const Step = styled('div')`
  align-items: center;
  display: flex;
`;

export const Stepper = styled('div')`
  align-items: center;
  display: flex;
`;
