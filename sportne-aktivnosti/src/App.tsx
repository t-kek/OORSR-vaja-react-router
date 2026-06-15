import { useState } from "react";
import AppRouter from "./router";
import {
  SportType,
  type NewActivity,
  type SportActivity,
} from "./types";

function App() {
  const [listOfActivities, setListOfActivities] =
    useState<SportActivity[]>([
      {
        id: 1,
        nameOfActivity: "Tekma MB - MS",
        type: SportType.NOGOMET,
        date: "15. 7. 2026",
        location: "Maribor",
      },
      {
        id: 2,
        nameOfActivity: "Tekma LJ - KP",
        type: SportType.ODBOJKA,
        date: "16. 7. 2026",
        location: "Koper",
      },
      {
        id: 3,
        nameOfActivity: "Prvenstvo golf",
        type: SportType.GOLF,
        date: "17. 7. 2026",
        location: "Ljubljana",
      },
    ]);

  function addActivity(newActivityData: NewActivity) {
    const newActivity: SportActivity = {
      id: Date.now(),
      ...newActivityData,
    };

    setListOfActivities((currentActivities) => [
      ...currentActivities,
      newActivity,
    ]);
  }

  return (
    <AppRouter
      activities={listOfActivities}
      onAddActivity={addActivity}
    />
  );
}

export default App;