import { createBrowserRouter } from "react-router";
import App from "./App";

import ActivityListPage from "./pages/ActivityListPage";
import ActivityDetailPage from "./pages/ActivityDetailPage";
import AddActivityPage from "./pages/AddActivityPage";

import NotFoundPage from "./pages/NotFoundPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <ActivityListPage />
      },
      {
        path: "activities/new",
        element: <AddActivityPage />,
      },
      {
        path: "activity/:id",
        element: <ActivityDetailPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);