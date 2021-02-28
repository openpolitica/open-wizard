import dynamic from 'next/dynamic';
import { FavoritesProvider } from 'hooks/useFavorites';

const PartyResults = dynamic(() => import('components/Steps/PartyResults'), {
  ssr: false,
});

const nossrPartyResults = () => (
  <FavoritesProvider>
    <PartyResults />
  </FavoritesProvider>
);
export default nossrPartyResults;
