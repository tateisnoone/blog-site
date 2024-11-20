import { Suspense } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./layout/dashboard";
import HomeView from "./pages/home/views";
import SignIn from "./pages/sing-in/sign-in";
import Register from "./pages/register/register";
import { ThemeProvider } from "./components/theme-provider";
import AboutView from "./pages/about/views";
import AuthorView from "./pages/author/views";

const App: React.FC = () => {
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
              <Route path="sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<Register />} />
              <Route path="/about" element={<AboutView />} />
              <Route path="/author" element={<AuthorView />} />
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
