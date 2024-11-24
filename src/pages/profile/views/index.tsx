import { lazy } from "react";
const LazyProfileInfo = lazy(
  () => import("../components/profile-info/profile-info")
);

const ProfileView = () => {
  return (
    <>
      <LazyProfileInfo />
    </>
  );
};

export default ProfileView;
