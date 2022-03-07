import { Navigate, useRoutes } from "react-router-dom";
import Landing from "./screens/Landing";
import Privacy from "./screens/Privacy";
import Success from "./screens/Success";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/",
      children: [
        { path: "/", element: <Landing /> },
        { path: "success", element: <Success /> },
        { path: "privacy", element: <Privacy /> },
      ],
    },

    // { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
