import SportActivityList from "../components/SportActivityList";
import type { SportActivityOutletContext } from "../types";
import { useOutletContext } from "react-router";

function ActivityListPage() {
  const { activities } = useOutletContext<SportActivityOutletContext>();
  
  return (
    
    <section>
      <h2>Seznam športnih aktivnosti</h2>

      <SportActivityList activities={activities} />
    </section>
  );
}

export default ActivityListPage;