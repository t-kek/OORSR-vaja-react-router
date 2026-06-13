import { NavLink, Outlet } from "react-router";
import { SportType, type NewActivity, type SportActivity } from "./types";
import { useState } from "react";

function App() {
    const [listOfActivities, setListOfActivities] = useState<SportActivity[]>([
        {
        id: 1,
        nameOfActivity: "Tekma MB - MS",
        type: SportType.NOGOMET,
        date: "15. 7. 2026",
        location: "Maribor"
        },
        {
        id: 2,
        nameOfActivity: "Tekma LJ - KP",
        type: SportType.ODBOJKA,
        date: "16. 7. 2026",
        location: "Koper"
        },
        {
        id: 3,
        nameOfActivity: "Prvenstvo golf",
        type: SportType.GOLF,
        date: "17. 7. 2026",
        location: "Ljubljana"
        }
    ]);

    function addActivity(newSportActivity: NewActivity){
      const newActivity: SportActivity = {
        id: Date.now(),
        ...newSportActivity
      };

      setListOfActivities((currentActivities) => [
        ...currentActivities,
        newActivity
      ]);
    }

  return (
    <>
      <header>
        <h1>Športne aktivnosti</h1>

        <nav>
          <NavLink to="/">Seznam</NavLink>
          <NavLink to="/activities/new">Dodaj aktivnost</NavLink>
        </nav>
      </header>

      <main>
        <Outlet context={{ activities: listOfActivities, addActivity }} />
      </main>
    </>
  );
}

export default App;