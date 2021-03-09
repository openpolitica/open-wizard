import dynamic from 'next/dynamic';
import { FavoritesProvider } from 'hooks/useFavorites';

const CandidateResults = dynamic(
  () => import('components/Steps/CandidateResults'),
  {
    ssr: false,
  },
);

const nossrCandidateResults = () => (
  <FavoritesProvider>
    <CandidateResults />;
  </FavoritesProvider>
);
export default nossrCandidateResults;
