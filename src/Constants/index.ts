import { Sources } from "@/api/Models";

export const SOURCE_OPTIONS = [
  { label: "News API", value: Sources.NEWS },
  { label: "The New York Times", value: Sources.NYT },
  { label: "The Guardian", value: Sources.GUARDIAN },
];

export const CATEGORY_OPTIONS = {
  NYT: [
    { label: "World", value: "world" },
    { label: "Politics", value: "politics" },
    { label: "Technology", value: "technology" },
    { label: "Science", value: "science" },
    { label: "Health", value: "health" },
    { label: "Sports", value: "sports" },
    { label: "Arts", value: "arts" },
    { label: "Fashion", value: "fashion" },
    { label: "Food", value: "food" },
    { label: "Travel", value: "travel" },
    { label: "Opinion", value: "opinion" },
    { label: "Business", value: "business" },
    { label: "Books", value: "books" },
  ],
  GUARDIAN: [
    { label: "World", value: "world" },
    { label: "Politics", value: "politics" },
    { label: "Technology", value: "technology" },
    { label: "Science", value: "science" },
    { label: "Health", value: "health" },
    { label: "Sport", value: "sport" },
    { label: "Culture", value: "culture" },
    { label: "Fashion", value: "fashion" },
    { label: "Food", value: "food" },
    { label: "Travel", value: "travel" },
    { label: "Comment Is Free", value: "commentisfree" },
    { label: "Business", value: "business" },
    { label: "Books", value: "books" },
  ],
  NEWS: [
    { label: "BBC News", value: "bbc-news" },
    { label: "CNN", value: "cnn" },
    { label: "The Verge", value: "the-verge" },
    { label: "BBC Sport", value: "bbc-sport" },
    { label: "Reuters", value: "reuters" },
    { label: "The New York Times", value: "the-new-york-times" },
    { label: "The Guardian UK", value: "the-guardian-uk" },
    { label: "Al Jazeera English", value: "al-jazeera-english" },
    { label: "BuzzFeed", value: "buzzfeed" },
    { label: "Engadget", value: "engadget" },
    { label: "Wired", value: "wired" },
    { label: "TechCrunch", value: "techcrunch" },
  ],
};
