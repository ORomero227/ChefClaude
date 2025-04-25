import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@/index.css";
import App from "@/App.tsx";
import NotFound from "@/pages/NotFound";
import Error from "@/pages/Error";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/error", element: <Error /> },
  { path: "*", element: <NotFound /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
