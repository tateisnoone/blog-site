import AuthGuard from "@/components/route-guards/auth";
import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { DASHBOARD_PATHS } from "./index.enum";

const CreateBlogLazy = lazy(() => import("@/pages/create-blog/create-blog"));
const HomeViewLazy = lazy(() => import("@/pages/home/views"));
const AboutViewLazy = lazy(() => import("@/pages/about/views"));
const ProfileViewLazy = lazy(() => import("@/pages/profile/views"));
const AuthorViewLazy = lazy(() => import("@/pages/author/views"));
const SignInLazy = lazy(() => import("@/pages/sing-in/sign-in"));
const RegisterLazy = lazy(() => import("@/pages/register/register"));

export const DASHBOARD_ROUTES = [
  <>
    <Route
      path="/"
      element={
        <Suspense fallback={<div>Loading...</div>}>
          <HomeViewLazy />
        </Suspense>
      }
    />
    <Route
      path={DASHBOARD_PATHS.SIGN_IN}
      element={
        <AuthGuard>
          <Suspense fallback={<div>Loading...</div>}>
            <SignInLazy />
          </Suspense>
        </AuthGuard>
      }
    />
    <Route
      path={DASHBOARD_PATHS.SIGN_UP}
      element={
        <AuthGuard>
          <Suspense fallback={<div>Loading...</div>}>
            <RegisterLazy />
          </Suspense>
        </AuthGuard>
      }
    />
    <Route
      path={DASHBOARD_PATHS.FOR_ABOUT}
      element={
        <Suspense fallback={<div>Loading...</div>}>
          <AboutViewLazy />
        </Suspense>
      }
    />
    <Route
      path={DASHBOARD_PATHS.FOR_AUTHOR}
      element={
        <Suspense fallback={<div>Loading...</div>}>
          <AuthorViewLazy />
        </Suspense>
      }
    />
    <Route
      path={DASHBOARD_PATHS.FOR_PROFILE}
      element={
        <Suspense fallback={<div>Loading...</div>}>
          <ProfileViewLazy />
        </Suspense>
      }
    />
    <Route
      path={DASHBOARD_PATHS.CREATE_BLOG}
      element={
        <Suspense fallback={<div>Loading...</div>}>
          <CreateBlogLazy />
        </Suspense>
      }
    />
  </>,
];
