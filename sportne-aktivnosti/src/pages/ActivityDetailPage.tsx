import SportActivityDetails from "../components/SportActivityDetails";
import { useOutletContext, useParams, Link } from "react-router";
import type {SportActivityOutletContext} from "../types"


function ActivityDetailPage(){
    const {id}= useParams();
    
    const { activities } =
        useOutletContext<SportActivityOutletContext>();
    const activity = activities.find(
        (act) => act.id === Number(id)
    );

    if(!activity){
        return(
            <section>
                <h3>Aktivnost ne obstaja</h3>
                <Link to="/">Nazaj na seznam</Link>
            </section>
        );
    }

    return(
        <main>
            <h1>Podrobnosti športnega dogodka</h1>
            <SportActivityDetails activity={activity}/>
        </main>
    );
}

export default ActivityDetailPage;