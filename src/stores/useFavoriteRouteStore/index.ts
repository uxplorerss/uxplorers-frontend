import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface FavoriteRoute {
  startId: string; // NAEK 없는 ID
  destId: string; // NAEK 없는 ID
}

interface FavoriteRouteState {
  favoriteRouteList: FavoriteRoute[];
  addRoute: (newFavoriteRoute: FavoriteRoute) => void;
  deleteRoute: (route: FavoriteRoute) => void;
  reset: () => void;
}

const useFavoriteRouteStore = create<FavoriteRouteState>()(
  persist(
    devtools((set) => ({
      favoriteRouteList: [{ startId: '032', destId: '300' }],
      addRoute: (newFavoriteRoute) =>
        set((state) => ({
          favoriteRouteList: state.favoriteRouteList.some(
            (favoriteRoute) =>
              favoriteRoute.startId === newFavoriteRoute.startId &&
              favoriteRoute.destId === newFavoriteRoute.destId
          )
            ? state.favoriteRouteList
            : [...state.favoriteRouteList, newFavoriteRoute],
        })),
      deleteRoute: (route) =>
        set((state) => ({
          favoriteRouteList: state.favoriteRouteList.filter(
            (favoriteRoute) =>
              favoriteRoute.startId !== route.startId &&
              favoriteRoute.destId !== route.destId
          ),
        })),
      reset: () => set({ favoriteRouteList: [] }),
    })),
    {
      name: 'favorite-route',
    }
  )
);

export default useFavoriteRouteStore;
