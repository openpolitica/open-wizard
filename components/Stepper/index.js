import {
  StepBall,
  StepLine,
  Step as StyledStep,
  Stepper as StyledStepper,
} from './styles.js';

const Step = (props) => {
  return (
    <StyledStep>
      <StepBall type={props.type} />
      {props.isLast ? null : <StepLine type={props.type} />}
    </StyledStep>
  );
};

const Stepper = (props) => {
  if (props.steps === null || props.of === null) {
    throw new Error('Stepper needs valid values');
  }
  if (!(props.of >= props.steps)) {
    throw new Error('Of value should be greater or equal than step values');
  }

  const untaken = props.of - props.steps;
  return (
    <StyledStepper {...props}>
      {Array.from({ length: props.steps }).map((_, index) => {
        if (index === props.steps - 1 && untaken === 0) {
          return <Step isLast type="taken" />;
        }
        return <Step type="taken" />;
      })}
      {Array.from({ length: untaken }).map((_, index) => {
        if (index === untaken - 1) {
          return <Step isLast type="untaken" />;
        }
        return <Step type="untaken" />;
      })}
    </StyledStepper>
  );
};

export default Stepper;
