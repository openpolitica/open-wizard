import { Fragment, useState } from 'react';
import * as Styled from './styles.js';

const toggle = (fn) => (arg) => fn(!arg);
const startCase = ([first, ...rest]) => [first.toUpperCase(), ...rest].join('');

const translationMap = {
  education: 'educación',
  health: 'salud',
  economy: 'economía',
  gobernability: 'gobernanza',
  security: 'seguridad',
  environment: 'medio ambiente',
};

const TopicCheckbox = (props) => {
  const [checked, setCheckedState] = useState(false);
  const Icon =
    Styled.iconMap[`${startCase(props.type)}Icon` || 'EducationIcon'];

  return (
    <Fragment>
      <Styled.Checkbox name={props.type} />
      <Styled.Label
        checked={checked}
        htmlFor={props.type}
        onClick={() => toggle(setCheckedState)(checked)}>
        <Icon checked={checked} />
        <span>{startCase(translationMap[props.type])}</span>
      </Styled.Label>
    </Fragment>
  );
};

export default TopicCheckbox;
