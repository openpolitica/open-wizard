import { Fragment, useState } from 'react';
import * as Styled from './styles.js';
import {
  EducationIcon,
  HealthIcon,
  EnvironmentIcon,
  SecurityIcon,
  GobernabilityIcon,
  EconomyIcon,
} from '../../public/images/icons/topics';

const startCase = ([first, ...rest]) => [first.toUpperCase(), ...rest].join('');

const topicsMap = {
  education: { label: 'educación', icon: EducationIcon },
  health: { label: 'salud', icon: HealthIcon },
  economy: { label: 'economía', icon: EconomyIcon },
  gobernability: { label: 'gobernanza', icon: GobernabilityIcon },
  security: { label: 'seguridad', icon: SecurityIcon },
  environment: { label: 'medio ambiente', icon: EnvironmentIcon },
};

const TopicCheckbox = ({ type }) => {
  const [checked, setChecked] = useState(false);
  const Icon = topicsMap[type]?.icon || EducationIcon;

  return (
    <Fragment>
      <Styled.Checkbox name={type} />
      <Styled.Label
        checked={checked}
        htmlFor={type}
        onClick={() => setChecked((prev) => !prev)}>
        <Styled.TopicIcon as={Icon} checked={checked} />
        <Styled.TopicLabel>
          {topicsMap[type]?.label || 'No topic found'}
        </Styled.TopicLabel>
      </Styled.Label>
    </Fragment>
  );
};

export default TopicCheckbox;
