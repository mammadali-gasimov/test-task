import { createBrowserRouter } from "react-router-dom";

import { HomePage, NotFound } from "@/pages";
import { ROUTES } from "./routeNames";

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <HomePage />,
  },
  {
    path: ROUTES.notFound,
    element: <NotFound />,
  },
]);

export default router;
