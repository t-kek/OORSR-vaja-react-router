import { useNavigate } from "react-router-dom";
import AddSportActivityForm from "../components/AddSportActivityForm";
import type { NewActivity } from "../types";

type AddActivityPageProps = {
  onAddActivity: (newActivity: NewActivity) => void;
};

function AddActivityPage({
  onAddActivity,
}: AddActivityPageProps) {
  const navigate = useNavigate();

  function handleAddActivity(
    newActivityData: NewActivity
  ) {
    onAddActivity(newActivityData);
    navigate("/");
  }

  return (
    <section>
      <h2>Dodaj športno aktivnost</h2>

      <AddSportActivityForm
        onAddActivity={handleAddActivity}
      />
    </section>
  );
}

export default AddActivityPage;