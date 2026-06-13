import { useState } from "react";
import type { FormEvent } from "react";
import type { NewActivity, SportType } from "../types";
import { SportType as SportTypeEnum } from "../types";

type AddSportActivityFormProps = {
  onAddActivity: (newActivity: NewActivity) => void;
};

function AddSportActivityForm({
  onAddActivity,
}: AddSportActivityFormProps) {
  const [nameOfActivity, setNameOfActivity] = useState("");
  const [typeOfActivity, setTypeOfActivity] =
    useState<SportType | "">("");
  const [dateOfActivity, setDateOfActivity] = useState("");
  const [locationOfActivity, setLocationOfActivity] =
    useState("");

  const [error, setError] = useState("");

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    setError("");

    const cleanName = nameOfActivity.trim();
    const cleanDate = dateOfActivity.trim();
    const cleanLocation = locationOfActivity.trim();

    if (
      !cleanName ||
      !cleanDate ||
      !cleanLocation ||
      !typeOfActivity
    ) {
      setError("Vsi podatki morajo biti izpolnjeni.");
      return;
    }

    onAddActivity({
      nameOfActivity: cleanName,
      type: typeOfActivity,
      date: cleanDate,
      location: cleanLocation,
    });

    setNameOfActivity("");
    setTypeOfActivity("");
    setDateOfActivity("");
    setLocationOfActivity("");
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}

      <div>
        <label htmlFor="activityName">
          Naziv aktivnosti
        </label>
        <input
          id="activityName"
          value={nameOfActivity}
          onChange={(event) =>
            setNameOfActivity(event.target.value)
          }
        />
      </div>

      <div>
        <label htmlFor="sportType">
          Vrsta športa
        </label>
        <select
          id="sportType"
          value={typeOfActivity}
          onChange={(event) =>
            setTypeOfActivity(
              event.target.value as SportType
            )
          }
        >
          <option value="">
            Izberi šport
          </option>

          {Object.values(SportTypeEnum).map(
            (sport) => (
              <option
                key={sport}
                value={sport}
              >
                {sport}
              </option>
            )
          )}
        </select>
      </div>

      <div>
        <label htmlFor="date">
          Datum aktivnosti
        </label>
        <input
          id="date"
          type="date"
          value={dateOfActivity}
          onChange={(event) =>
            setDateOfActivity(event.target.value)
          }
        />
      </div>

      <div>
        <label htmlFor="location">
          Lokacija
        </label>
        <input
          id="location"
          value={locationOfActivity}
          onChange={(event) =>
            setLocationOfActivity(event.target.value)
          }
        />
      </div>

      <button type="submit">
        Dodaj aktivnost
      </button>
    </form>
  );
}

export default AddSportActivityForm;