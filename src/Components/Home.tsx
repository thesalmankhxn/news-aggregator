import { PageLayoutCN } from "@/Layouts";
import { Card } from "./Card";
import { cn } from "@/lib/utils";
import { Globe } from "../../src/Components/Globe";
import { Sources } from "@/api/Models";

const Home = () => {
  return (
    <section className={cn(PageLayoutCN.sectionContainer, "!pt-16 h-full")}>
      <div className="text-center text-6xl min-md:text-7xl font-semibold relative">
        <h2 className="mb-4 relative z-50 inline-block">
          A world of <span className="text-underline-gradient">journalism</span>
          .
        </h2>
        <h2 className="text-4xl pb-20 relative z-50 inline-block">
          The stories you need to hear. Everywhere you want to listen.
        </h2>

        <div className="absolute w-full -top-5 md:hidden">
          <Globe />
        </div>
      </div>

      <div className="flex justify-evenly items-center flex-wrap gap-4 max-w-[1000px] mx-auto mt-[100px]">
        {NewsApiProviders?.map((np, id) => (
          <Card key={id} data={np} />
        ))}
      </div>
    </section>
  );
};

const NewsApiProviders = [
  {
    author: "News API",
    date: "",
    title: "Search worldwide news with code",
    description:
      "Locate articles and breaking news headlines from news sources and blogs across the web with our JSON API.",
    image: "",
    authorAvatar: "",
    source: Sources.news,
  },
  {
    author: "The New York Times",
    date: "",
    title: "Search worldwide news with code",
    description:
      "Locate articles and breaking news headlines from news sources and blogs across the web with our JSON API.",
    image: "",
    authorAvatar: "",
    source: Sources.nyTimes,
  },
  {
    author: "The GUARDIAN",
    date: "",
    title: "Search worldwide news with code",
    description:
      "Locate articles and breaking news headlines from news sources and blogs across the web with our JSON API.",
    image: "",
    authorAvatar: "",
    source: Sources.guardian,
  },
];

export default Home;
