import { useContext } from 'react';
import { FavoritesContext } from 'hooks/useFavorites';
import GoBackButton from 'components/GoBackButton';
import * as Styled from './styles';

export default function Favorites(props) {
  const { favorites } = useContext(FavoritesContext);

  return (
    <Styled.Container>
      <Styled.Header />
      <Styled.Step>
        <Styled.Row>
          <GoBackButton />
        </Styled.Row>
        <Styled.Title>Mis candidatxs favoritxs</Styled.Title>
        <Styled.Candidates>
          {favorites ? (
            favorites.map((favorite, index) => (
              <Styled.CandidateCard
                key={`Candidate-${index}`}
                candidateParty={favorite.org_politica_nombre}
                candidateNumber={favorite.posicion}
                candidateFullname={`${favorite.id_nombres} ${favorite.id_apellido_paterno}`}
                profileImageId={favorite.hoja_vida_id}
                systemId={favorite.hoja_vida_id}
              />
            ))
          ) : (
            <p>No tienes candidatxs favoritxs</p>
          )}
        </Styled.Candidates>
      </Styled.Step>
    </Styled.Container>
  );
}
