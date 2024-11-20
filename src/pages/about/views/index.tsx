//import { lazy } from "react";
import Mission from "../components/mission/mission";
import Offers from "../components/offers/offers";
import Story from "../components/story/story";
//const LazyCardSection = lazy(() => import("../card-list/card/card"));

const AboutView = () => {
  return (
    <>
      <div>
        <Mission />
        <Offers />
        <Story />
      </div>
    </>
  );
};

export default AboutView;
