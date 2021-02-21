import { useState } from 'react';
import ls from 'local-storage';
import groupBy from 'lodash.groupby';
import Image from 'next/image';
import BaseModal from 'components/BaseModal';
import * as Styled from './styles';
import {
  initializeEducationState,
  toInitialEducationState,
  toPrimary,
  toSecondary,
  toHighSchool,
  toPostgraduate,
} from './logicMaps';
import { applyFilters } from '../Steps/PartyResults/filters';
import * as logicMaps from './logicMaps';
import handleEducationState from './handleEducationState';

const toggle = (fn) => (arg) => fn(!arg);

const branchFn = (fn1, fn2) => (value) => (value ? fn1 : fn2);
const branchWithSideEffect = (sideEffect) => (fn1, fn2) => (value) =>
  sideEffect(branchFn(fn1, fn2)(value));

const toggleFilter = (filters) => (filterName) =>
  filters.includes(filterName)
    ? filters.filter((filter) => filter !== filterName)
    : [...filters, filterName];

const emptyFiltersFromEducation = (filters) =>
  filters.filter(
    function (filter) {
      return this.indexOf(filter) < 0;
    },
    ['upToPrimary', 'upToSecondary', 'upToHighSchool', 'upToPostgraduate'],
  );
const toggleEducationFilter = (filters) => (filterName) => {
  if (filters.includes(filterName)) {
    return [
      ...emptyFiltersFromEducation(filters),
      ...logicMaps[`${filterName}FilterOut`](),
    ];
  }
  return [
    ...emptyFiltersFromEducation(filters),
    ...logicMaps[`${filterName}FilterIn`](),
  ];
};

const groupCandidatesByPartyNameAndLS = (candidates, keyName) => {
  const groupedCandidates = groupBy(candidates, 'org_politica_nombre');
  ls('op.wizard', { ...ls('op.wizard'), [keyName]: groupedCandidates });
  return groupedCandidates;
};

const FilterModal = (props) => {
  const [isMaleChecked, setMaleGenre] = useState(
    props.filters.includes('onlyMale'),
  );
  const [isFemaleChecked, setFemaleGenre] = useState(
    props.filters.includes('onlyFemale'),
  );

  const [isJNEIncomeChecked, setJNEIncome] = useState(
    props.filters.includes('hasJNEIncome'),
  );
  const [educationState, setEducationState] = useState(
    initializeEducationState(props.filters),
  );
  const [hasPublicServiceExperience, setPublicServiceExperience] = useState(
    props.filters.includes('hasPublicServiceExperience'),
  );
  const [hasPrivateWorkExperience, setPrivateWorkExperience] = useState(
    props.filters.includes('hasPrivateWorkExperience'),
  );
  const [sanctionsState, setSanctionsState] = useState({
    sunat: props.filters.includes('doesntHaveSanctionsWithSunat'),
    servir: props.filters.includes('doesntHaveSanctionsWithServir'),
    driving: props.filters.includes('doesntHaveSanctionsWithDriving'),
  });

  const branchWithSetEducationState = branchWithSideEffect(setEducationState);
  const setSanctionsStateWithValue = (state, propertyName) => (value) =>
    setSanctionsState({ ...state, [propertyName]: value });
  if (props.filters.length) {
    const groupedCandidates = applyFilters(ls('op.wizard').rawCandidates)(
      props.filters,
    );
    groupCandidatesByPartyNameAndLS(groupedCandidates, 'filteredCandidates');
  } else {
    groupCandidatesByPartyNameAndLS(
      ls('op.wizard').rawCandidates,
      'filteredCandidates',
    );
  }

  ls('op.wizard', { ...ls('op.wizard'), filters: props.filters });

  return (
    <BaseModal {...props}>
      <Styled.Header>
        <Styled.CloseButton onClick={props.onCloseButtonClick}>
          <Image src="/images/icons/filter-x.svg" width="14" height="14" />
        </Styled.CloseButton>
      </Styled.Header>
      <Styled.GenreSection>
        <Styled.FilterTitle>Género</Styled.FilterTitle>
        <Styled.Tag name="female" id="female" />
        <Styled.TagLabel
          checked={isFemaleChecked}
          onClick={() => {
            if (isMaleChecked) {
              setMaleGenre(!isMaleChecked);
              setFemaleGenre(!isFemaleChecked);
              props.setFilters([
                ...props.filters.filter((f) => f !== 'onlyMale'),
                'onlyFemale',
              ]);
            } else {
              setFemaleGenre(!isFemaleChecked);
              props.setFilters(toggleFilter(props.filters)('onlyFemale'));
            }
          }}
          htmlFor="female">
          Solo mujeres
        </Styled.TagLabel>
        <Styled.Tag name="male" id="male" />
        <Styled.TagLabel
          checked={isMaleChecked}
          onClick={() => {
            if (isFemaleChecked) {
              setFemaleGenre(!isFemaleChecked);
              setMaleGenre(!isMaleChecked);
              props.setFilters([
                ...props.filters.filter((f) => f !== 'onlyFemale'),
                'onlyMale',
              ]);
            } else {
              setMaleGenre(!isMaleChecked);
              props.setFilters(toggleFilter(props.filters)('onlyMale'));
            }
          }}
          htmlFor="male">
          Solo hombres
        </Styled.TagLabel>
      </Styled.GenreSection>
      <Styled.ModalSection>
        <Styled.FilterTitle>Experiencia declarada</Styled.FilterTitle>
        <Styled.CheckboxRow>
          <Styled.CheckboxLabel htmlFor="publicServiceExperience">
            Trabajó en el sector público
          </Styled.CheckboxLabel>
          <Styled.Checkbox
            id="publicServiceExperience"
            name="publicServiceExperience"
            isChecked={hasPublicServiceExperience}
            onClick={() =>
              toggle(setPublicServiceExperience)(hasPublicServiceExperience) ||
              props.setFilters(
                toggleFilter(props.filters)('hasPublicServiceExperience'),
              )
            }
          />
        </Styled.CheckboxRow>
        <Styled.CheckboxRow>
          <Styled.CheckboxLabel htmlFor="privateWorkExperience">
            Trabajó en el sector privado
          </Styled.CheckboxLabel>
          <Styled.Checkbox
            id="privateWorkExperience"
            name="privateWorkExperience"
            isChecked={hasPrivateWorkExperience}
            onClick={() =>
              toggle(setPrivateWorkExperience)(hasPrivateWorkExperience) ||
              props.setFilters(
                toggleFilter(props.filters)('hasPrivateWorkExperience'),
              )
            }
          />
        </Styled.CheckboxRow>
      </Styled.ModalSection>
      <Styled.ModalSection>
        <Styled.FilterTitle>Declaró ingresos en el 2019</Styled.FilterTitle>
        <Styled.CheckboxRow>
          <Styled.CheckboxLabel htmlFor="JNEincome">
            Muestra los candidatos que declararon sus ingresos al JNE.
          </Styled.CheckboxLabel>
          <Styled.Checkbox
            id="JNEincome"
            name="JNEincome"
            isChecked={isJNEIncomeChecked}
            onClick={() =>
              toggle(setJNEIncome)(isJNEIncomeChecked) ||
              props.setFilters(toggleFilter(props.filters)('hasJNEIncome'))
            }
          />
        </Styled.CheckboxRow>
      </Styled.ModalSection>
      <Styled.ModalSection>
        <Styled.FilterTitle>Educación</Styled.FilterTitle>
        <Styled.CheckboxRow>
          <Styled.CheckboxLabel htmlFor="primarySchool">
            Primaria Completa
          </Styled.CheckboxLabel>
          <Styled.Checkbox
            id="primarySchool"
            name="primarySchool"
            isChecked={educationState.primary}
            onClick={() =>
              handleEducationState(educationState)('primary')(
                branchWithSetEducationState(toPrimary, toInitialEducationState),
              ) ||
              props.setFilters(
                toggleEducationFilter(props.filters)('upToPrimary'),
              )
            }
          />
        </Styled.CheckboxRow>
        <Styled.CheckboxRow>
          <Styled.CheckboxLabel htmlFor="secondarySchool">
            Secundaria Completa
          </Styled.CheckboxLabel>
          <Styled.Checkbox
            id="secondarySchool"
            name="secondarySchool"
            isChecked={educationState.secondary}
            onClick={() =>
              handleEducationState(educationState)('secondary')(
                branchWithSetEducationState(toSecondary, toPrimary),
              ) ||
              props.setFilters(
                toggleEducationFilter(props.filters)('upToSecondary'),
              )
            }
          />
        </Styled.CheckboxRow>
        <Styled.CheckboxRow>
          <Styled.CheckboxLabel htmlFor="highSchool">
            Universitario/Técnico superior
          </Styled.CheckboxLabel>
          <Styled.Checkbox
            id="highSchool"
            name="highSchool"
            isChecked={educationState.high}
            onClick={() =>
              handleEducationState(educationState)('high')(
                branchWithSetEducationState(toHighSchool, toSecondary),
              ) ||
              props.setFilters(
                toggleEducationFilter(props.filters)('upToHighSchool'),
              )
            }
          />
        </Styled.CheckboxRow>
        <Styled.CheckboxRow>
          <Styled.CheckboxLabel htmlFor="postSchool">
            Postgrado
          </Styled.CheckboxLabel>
          <Styled.Checkbox
            id="postSchool"
            name="postSchool"
            isChecked={educationState.post}
            onClick={() =>
              handleEducationState(educationState)('post')(
                branchWithSetEducationState(toPostgraduate, toHighSchool),
              ) ||
              props.setFilters(
                toggleEducationFilter(props.filters)('upToPostgraduate'),
              )
            }
          />
        </Styled.CheckboxRow>
      </Styled.ModalSection>
      <Styled.ModalSection>
        <Styled.FilterTitle>Sanciones e Infracciones</Styled.FilterTitle>
        <Styled.CheckboxRow>
          <Styled.CheckboxLabel htmlFor="sanctionsSUNAT">
            No tiene deuda en la SUNAT
          </Styled.CheckboxLabel>
          <Styled.Checkbox
            id="sanctionsSUNAT"
            name="sanctionsSUNAT"
            isChecked={sanctionsState.sunat}
            onClick={() =>
              toggle(setSanctionsStateWithValue(sanctionsState, 'sunat'))(
                sanctionsState.sunat,
              ) ||
              props.setFilters(
                toggleFilter(props.filters)('doesntHaveSanctionsWithSunat'),
              )
            }
          />
        </Styled.CheckboxRow>
        <Styled.CheckboxRow>
          <Styled.CheckboxLabel htmlFor="sanctionsSERVIR">
            No tiene sanciones en SERVIR
          </Styled.CheckboxLabel>
          <Styled.Checkbox
            id="sanctionsSERVIR"
            name="sanctionsSERVIR"
            isChecked={sanctionsState.servir}
            onClick={() =>
              toggle(setSanctionsStateWithValue(sanctionsState, 'servir'))(
                sanctionsState.servir,
              ) ||
              props.setFilters(
                toggleFilter(props.filters)('doesntHaveSanctionsWithServir'),
              )
            }
          />
        </Styled.CheckboxRow>
        <Styled.CheckboxRow>
          <Styled.CheckboxLabel htmlFor="sanctionsDriving">
            No tiene infracciones como conductor
          </Styled.CheckboxLabel>
          <Styled.Checkbox
            id="sanctionsDriving"
            name="sanctionsDriving"
            isChecked={sanctionsState.driving}
            onClick={() =>
              toggle(setSanctionsStateWithValue(sanctionsState, 'driving'))(
                sanctionsState.driving,
              ) ||
              props.setFilters(
                toggleFilter(props.filters)('doesntHaveSanctionsWithDriving'),
              )
            }
          />
        </Styled.CheckboxRow>
      </Styled.ModalSection>
      <Styled.Footer>
        <Styled.ApplyFiltersButton onClick={props.onCloseButtonClick}>
          Aplicar filtros
        </Styled.ApplyFiltersButton>
      </Styled.Footer>
    </BaseModal>
  );
};

export default FilterModal;
