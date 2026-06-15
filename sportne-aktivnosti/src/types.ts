export enum SportType {
  KOSARKA = "Košarka",
  NOGOMET = "Nogomet",
  GOLF = "Golf",
  ODBOJKA = "Odbojka",
}

export type SportActivity = {
  id: number;
  nameOfActivity: string;
  type: SportType;
  date: string;
  location: string;
};

export type NewActivity =
  Omit<SportActivity, "id">;