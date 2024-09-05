import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App.tsx";
import "./index.css";
import Issues from "./Issues.tsx";
import Issue from "./Issue.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/issues", element: <Issues /> },
  { path: "/issue/:id", element: <Issue /> },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
