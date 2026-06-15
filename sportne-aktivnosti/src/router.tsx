import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import ActivityListPage from "./pages/ActivityListPage";
import ActivityDetailPage from "./pages/ActivityDetailPage";
import AddActivityPage from "./pages/AddActivityPage";
import NotFoundPage from "./pages/NotFoundPage";
import type {
  NewActivity,
  SportActivity,
} from "./types";

type AppRouterProps = {
  activities: SportActivity[];
  onAddActivity: (newActivity: NewActivity) => void;
};

function AppRouter({
  activities,
  onAddActivity,
}: AppRouterProps) {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          index
          element={
            <ActivityListPage
              activities={activities}
            />
          }
        />

        <Route
          path="activities/new"
          element={
            <AddActivityPage
              onAddActivity={onAddActivity}
            />
          }
        />

        <Route
          path="activities/:id"
          element={
            <ActivityDetailPage
              activities={activities}
            />
          }
        />

        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Route>
    </Routes>
  );
}

export default AppRouter;