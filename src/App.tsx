import { Suspense, useEffect } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./layout/dashboard";
import HomeView from "./pages/home/views";
import SignIn from "./pages/sing-in/sign-in";
import Register from "./pages/register/register";
import { ThemeProvider } from "./components/theme-provider";
import AboutView from "./pages/about/views";
import AuthorView from "./pages/author/views";
import { supabase } from "./supabase";
import { useAuthContext } from "./context/auth/hooks/useAuthContext";
import AuthGuard from "./components/route-guards/auth";
import ProfileView from "./pages/profile/views";

const App: React.FC = () => {
  const { handleSetUser } = useAuthContext();
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      handleSetUser(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      handleSetUser(session);
    });

    return () => subscription.unsubscribe();
  }, []);
  return (
    <>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Routes>
            <Route path="/" element={<Dashboard />}>
              <Route
                path="/"
                element={
                  <Suspense
                    fallback={<div style={{ color: "#fff" }}>Loading...</div>}
                  >
                    <HomeView />
                  </Suspense>
                }
              />
              <Route
                path="sign-in"
                element={
                  <AuthGuard>
                    <SignIn />
                  </AuthGuard>
                }
              />
              <Route
                path="/sign-up"
                element={
                  <AuthGuard>
                    <Register />
                  </AuthGuard>
                }
              />
              <Route path="/about" element={<AboutView />} />
              <Route path="/author" element={<AuthorView />} />
              <Route path="/profile" element={<ProfileView />} />
            </Route>
            <Route path="/" element={<Navigate to="/" />} />

            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};
App.displayName = "App Component";
export default App;
