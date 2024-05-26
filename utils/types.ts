export interface RestaurantTypes {
  id: number;
  name: string;
  availableSeats: number;
  image: string;
  isReserved: boolean;
  isFavorite: boolean;
}

export type ClickFavoriteType = (id: number) => void;
