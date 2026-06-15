import { Link } from "react-router";
import { SportType, type SportActivity } from "../types";

type SportActivityCardProps = {
    activity: SportActivity;
};

function SportActivityCard({activity}:SportActivityCardProps){
    return (
        <div>
            <h2>{activity.nameOfActivity}</h2>
            <p>Type: {activity.type}</p>
            <Link to={`/activities/${activity.id}`}>
                Podrobnosti
            </Link>
        </div>       
    );
}

export default SportActivityCard;