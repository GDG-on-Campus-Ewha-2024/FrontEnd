import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages";
import ProtectedRoute from "@/components/ProtectedRoute";
import Layout from "@/components/Layout";
import WriteLetter from "@/pages/writeLetter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "page",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "chat",
        element: <WriteLetter />,
      },
    ],
  },
]);
