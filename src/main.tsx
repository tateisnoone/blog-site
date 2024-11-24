import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./i18n";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//import { AuthProvider } from "./context/auth/index.tsx";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      {/* <AuthProvider> */}
      <App />
      {/* </AuthProvider> */}
    </StrictMode>
  </QueryClientProvider>
);
