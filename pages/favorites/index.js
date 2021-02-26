import dynamic from 'next/dynamic';
import { FavoritesProvider } from 'hooks/useFavorites';

const Favorites = dynamic(() => import('components/Favorites'), {
  ssr: false,
});

const nossrFavorites = () => (
  <FavoritesProvider>
    <Favorites />
  </FavoritesProvider>
);
export default nossrFavorites;
