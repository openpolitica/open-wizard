import styled from 'styled-components';

const backgroundColorPriority = {
  taken: '#4EB5A2',
  untaken: '#C7CAD1',
};

export const StepBall = styled('div')`
  background-color: ${(props) =>
    backgroundColorPriority[props.type || 'untaken']};
  border-radius: 0.625rem;
  height: 1.25rem;
  width: 1.25rem;
  border: ${({ active }) => (active ? '2px solid #3c9484' : 'none')};
`;

export const StepLine = styled('div')`
  background-color: ${(props) =>
    backgroundColorPriority[props.type || 'untaken']};
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
