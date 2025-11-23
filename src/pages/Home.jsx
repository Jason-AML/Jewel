import { LayoutApp } from "../structure/LayoutApp";

import { ClipPathLinks } from "../components/workus/WorkUs";
import { Hero } from "../components/hero/Hero";
import { joyasMockup } from "../data/heroData/Data";
export const Home = () => {
  return (
    <LayoutApp>
      <Hero info={joyasMockup} />
      <ClipPathLinks />
    </LayoutApp>
  );
};
