import { Link, useParams } from "react-router-dom";
import SportActivityDetails from "../components/SportActivityDetails";
import type { SportActivity } from "../types";

type ActivityDetailPageProps = {
  activities: SportActivity[];
};

function ActivityDetailPage({
  activities,
}: ActivityDetailPageProps) {
  const { id } = useParams();

  const activity = activities.find(
    (activity) => activity.id === Number(id)
  );

  if (!activity) {
    return (
      <section>
        <h2>Aktivnost ne obstaja</h2>

        <Link to="/">
          Nazaj na seznam
        </Link>
      </section>
    );
  }

  return (
    <section>
      <h1>Podrobnosti športnega dogodka</h1>

      <SportActivityDetails
        activity={activity}
      />

      <Link to="/">
        Nazaj na seznam
      </Link>
    </section>
  );
}

export default ActivityDetailPage;