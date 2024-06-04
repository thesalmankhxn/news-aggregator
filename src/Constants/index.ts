import { Category, Sources } from "@/api/Models";

export const SOURCE_OPTIONS = [
  { label: "News API", value: Sources.news },
  { label: "The New York Times", value: Sources.nyTimes },
  { label: "The Guardian", value: Sources.guardian },
];

export const CATEGORY_OPTIONS = [
  { label: "Business", value: Category.business },
  { label: "Entertainment", value: Category.entertainment },
  { label: "General", value: Category.general },
  { label: "Health", value: Category.health },
  { label: "Science", value: Category.science },
  { label: "Sports", value: Category.sports },
  { label: "Technology", value: Category.technology },
];
