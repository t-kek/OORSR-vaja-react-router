import SportActivityList from "../components/SportActivityList";
import type { SportActivity } from "../types";

type ActivityListPageProps = {
  activities: SportActivity[]
}

function ActivityListPage({activities}: ActivityListPageProps) {
  return (
    
    <section>
      <h2>Seznam športnih aktivnosti</h2>

      <SportActivityList activities={activities} />
    </section>
  );
}

export default ActivityListPage;