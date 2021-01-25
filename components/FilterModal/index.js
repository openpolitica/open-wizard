import { useState } from 'react';
import Image from 'next/image';
import BaseModal from 'components/BaseModal';
import * as Styled from './styles';
import {
  toInitialEducationState,
  toPrimary,
  toSecondary,
  toHighSchool,
  toPostgraduate,
} from './logicMaps';
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

const FilterModal = (props) => {
  const [isMaleChecked, setMaleGenre] = useState(true);
  const [isFemaleChecked, setFemaleGenre] = useState(true);
  const [isJNEIncomeChecked, setJNEIncome] = useState(false);
  const [educationState, setEducationState] = useState(
    toInitialEducationState(),
  );
  const [hasPublicServiceExperience, setPublicServiceExperience] = useState(
    false,
  );
  const [hasPrivateWorkExperience, setPrivateWorkExperience] = useState(false);
  const [sanctionsState, setSanctionsState] = useState({
    defaulter: false,
    sunat: false,
    servir: false,
    driving: false,
  });

  const branchWithSetEducationState = branchWithSideEffect(setEducationState);
  const setSanctionsStateWithValue = (state, propertyName) => (value) =>
    setSanctionsState({ ...state, [propertyName]: value });

  return (
    <BaseModal {...props}>
      <Styled.Header>
        <Styled.CloseButton>
          <Image
            onClick={props.onCloseButtonClick}
            src="/images/icons/filter-x.svg"
            width="14"
            height="14"
          />
        </Styled.CloseButton>
      </Styled.Header>
      <Styled.GenreSection>
        <Styled.FilterTitle>Género</Styled.FilterTitle>
        <Styled.Tag name="female" id="female" />
        <Styled.TagLabel
          checked={isFemaleChecked}
          onClick={() =>
            toggle(setFemaleGenre)(isFemaleChecked) ||
            props.setFilters(toggleFilter(props.filters)('onlyMale'))
          }
          htmlFor="female">
          Mujer
        </Styled.TagLabel>
        <Styled.Tag name="male" id="male" />
        <Styled.TagLabel
          checked={isMaleChecked}
          onClick={() =>
            toggle(setMaleGenre)(isMaleChecked) ||
            props.setFilters(toggleFilter(props.filters)('onlyFemale'))
          }
          htmlFor="male">
          Hombre
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
              toggle(setPrivateWorkExperience)(hasPrivateWorkExperience)
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
          <Styled.CheckboxLabel htmlFor="sanctionsDefaulter">
            No es moroso en deudas judiciales y/o alimentarias
          </Styled.CheckboxLabel>
          <Styled.Checkbox
            id="sanctionsMoratory"
            name="sanctionsMoratory"
            isChecked={sanctionsState.defaulter}
            onClick={() =>
              toggle(setSanctionsStateWithValue(sanctionsState, 'defaulter'))(
                sanctionsState.defaulter,
              )
            }
          />
        </Styled.CheckboxRow>
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
    </BaseModal>
  );
};

export default FilterModal;
