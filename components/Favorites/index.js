import { useContext } from 'react';
import Router from 'next/router';
import { FavoritesContext } from 'hooks/useFavorites';
import GoBackButton from 'components/GoBackButton';
import Chip from 'components/Chip';
import * as Styled from './styles';
import comesFromAFinishedUserTrip from './comesFromAFinishedUserTrip';

const goBackToPartyResults = (event) => {
  if (comesFromAFinishedUserTrip) {
    Router.push('results/grouped-by-party');
    return;
  }
  Router.push('/');
};

export default function Favorites(props) {
  const { favorites } = useContext(FavoritesContext);

  return (
    <Styled.Container>
      <Styled.Header />
      <Styled.Step>
        <Styled.Row>
          <GoBackButton
            text={comesFromAFinishedUserTrip ? 'Regresa' : 'Ir al Home'}
            onClick={goBackToPartyResults}
          />
        </Styled.Row>
        <Styled.Title>Mis posibles opciones</Styled.Title>
        <Styled.Candidates>
          {favorites.length ? (
            favorites.map((favorite, index) => (
              <Styled.CandidateCard
                key={`Candidate-${index}`}
                type="secondary"
                candidateParty={favorite.org_politica_nombre}
                candidateNumber={favorite.posicion}
                candidateFullname={`${favorite.id_nombres} ${favorite.id_apellido_paterno}`}
                profileImageId={favorite.hoja_vida_id}
                systemId={favorite.hoja_vida_id}
              />
            ))
          ) : (
            <Chip type={'info'}>Todavía no tienes opciones guardadas.</Chip>
          )}
        </Styled.Candidates>
        <Styled.KeepLookingButton
          text="Sigue buscando"
          onClick={goBackToPartyResults}
        />
      </Styled.Step>
    </Styled.Container>
  );
}
