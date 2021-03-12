import { Fragment, useState } from 'react';
import * as Styled from './styles.js';
import * as icons from 'public/images/icons/topics';

const startCase = ([first, ...rest]) => [first.toUpperCase(), ...rest].join('');

const translationMap = {
  education: 'educación',
  health: 'salud',
  economy: 'economía',
  gobernability: 'gobernanza',
  security: 'seguridad',
  environment: 'medio ambiente',
};

const TopicCheckbox = ({ type }) => {
  const [checked, setCheckedState] = useState(false);
  const Icon = icons[`${startCase(type)}Icon` || 'EducationIcon'];

  return (
    <Fragment>
      <Styled.Checkbox name={type} />
      <Styled.Label
        checked={checked}
        htmlFor={type}
        onClick={() => setCheckedState((prevState) => !prevState)}>
        <Styled.TopicIcon as={Icon} checked={checked} />
        <span>{startCase(translationMap[type])}</span>
      </Styled.Label>
    </Fragment>
  );
};

export default TopicCheckbox;
