import type { SportActivity } from "../types"

type SportActivityDetailsProps = {
    activity: SportActivity;
}

function SportActivityDetails({activity}: SportActivityDetailsProps){
    return(
        <div>
            <h2>{activity.nameOfActivity}</h2>
            <p>Type: {activity.type}</p>
            <p>Date: {activity.date}</p>
            <p>Location: {activity.location}</p>
        </div>
    );
}

export default SportActivityDetails;