import { HeroCarousel } from "@/components/HeroCarousel";
import { HomeSections } from "@/components/HomeSections";

export default function HomePage() {
  return (
    <div className="home-deck">
      <HeroCarousel />
      <HomeSections />
    </div>
  );
}
