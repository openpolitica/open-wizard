import {
  StepBall,
  StepLine,
  Step as StyledStep,
  Stepper as StyledStepper,
} from './styles.js';

const Step = (props) => {
  return (
    <StyledStep>
      <StepBall type={props.type} active={props.active} />
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
        const isActiveStep = index + 1 === props.steps;
        if (isActiveStep && untaken === 0) {
          return <Step key={`taken-${index}`} isLast type="taken" active />;
        }
        return (
          <Step key={`taken-${index}`} type="taken" active={isActiveStep} />
        );
      })}
      {Array.from({ length: untaken }).map((_, index) => {
        if (index === untaken - 1) {
          return <Step key={`untaken-${index}`} isLast type="untaken" />;
        }
        return <Step key={`untaken-${index}`} type="untaken" />;
      })}
    </StyledStepper>
  );
};

export default Stepper;
