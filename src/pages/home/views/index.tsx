//import { lazy } from "react";
import MyCard from "../components/card-list/card/card";
//const LazyCardSection = lazy(() => import("../card-list/card/card"));

const HomeView = () => {
  return (
    <>
      <div>
        <MyCard width="w-3/5" />
      </div>
    </>
  );
};

export default HomeView;
