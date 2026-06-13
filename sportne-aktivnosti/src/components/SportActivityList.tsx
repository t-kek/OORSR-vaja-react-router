import type { SportActivity } from "../types";
import SportActivityCard from "./SportActivityCard";

type ActivityListpageProps = {
    activities: SportActivity[];
}

function ActivityList({activities}: ActivityListpageProps){

    return(
        <section>
            {activities.map((activity) => (
                <SportActivityCard key={activity.id} activity={activity}/>
            ))}
        </section>
    );
}

export default ActivityList;