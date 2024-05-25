import Image from "next/image";
import { Inter } from "next/font/google";
import HeroSlider from "@/Components/HeroSlider";
import HeroSlider2 from "@/Components/HeroSlider2";
import TrendingRestaurant from "@/Components/Restaurants/TrendingRestaurant";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={` ${inter.className} `}>
      <HeroSlider2 />
      <TrendingRestaurant />
    </main>
  );
}
