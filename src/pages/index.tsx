import Image from "next/image";
import { Inter } from "next/font/google";
import HeroSlider from "@/Components/HeroSlider";
import TrendingRestaurant from "@/Components/Restaurants/TrendingRestaurant";
import LoadingScreen from "@/Components/LoadingScreen";
import YourRestaurants from "@/Components/Restaurants/YourRestaurants";
import FavoriteRestaurants from "@/Components/Restaurants/FavoriteRestaurants";
import AllRestaurants from "@/Components/Restaurants/AllRestaurants";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={` ${inter.className} `}>
      <HeroSlider />

      <TrendingRestaurant />
      <YourRestaurants />
      <FavoriteRestaurants />
      <AllRestaurants />
    </main>
  );
}
