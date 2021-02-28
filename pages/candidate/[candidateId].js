import dynamic from 'next/dynamic';
import { FavoritesProvider } from 'hooks/useFavorites';

const CandidateSingle = dynamic(
  () => import('components/Steps/CandidateSingle'),
  {
    ssr: false,
  },
);

const nossrCandidateSingle = () => (
  <FavoritesProvider>
    <CandidateSingle />
  </FavoritesProvider>
);
export default nossrCandidateSingle;
