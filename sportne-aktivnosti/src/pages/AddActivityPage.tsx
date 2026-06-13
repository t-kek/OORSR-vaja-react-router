import { useNavigate, useOutletContext } from "react-router";
import AddSportActivityForm from "../components/AddSportActivityForm";
import { type NewActivity, type SportActivityOutletContext } from "../types";

function AddActivityPage(){

    const {addActivity} = useOutletContext<SportActivityOutletContext>();
    
    const navigate = useNavigate();

    function hadnleAddActivity(newActivityData: NewActivity){
        addActivity(newActivityData)
        navigate("/");
    }

    return(
        <main>
            <h2>Dodaj sportno aktivnost</h2>
            <AddSportActivityForm onAddActivity={hadnleAddActivity}/>
        </main>
    );
}

export default AddActivityPage;