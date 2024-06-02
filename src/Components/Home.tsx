import { PageLayoutCN } from "@/Layouts";
import { Card } from "./Card";
import { cn } from "@/lib/utils";
import { Globe } from "../../src/Components/Globe";

const Home = () => {
  return (
    <section className={cn(PageLayoutCN.sectionContainer, "!pt-16")}>
      <div className="text-center text-6xl min-md:text-7xl font-semibold relative">
        <h2 className="mb-4 relative z-50 inline-block">
          A world of <span className="text-underline-gradient">journalism</span>
          .
        </h2>
        <h2 className="text-4xl pb-20 relative z-50 inline-block">
          The stories you need to hear. Everywhere you want to listen.
        </h2>

        <div className="absolute w-full -top-5">
          <Globe />
        </div>
      </div>

      <div className="flex justify-evenly items-center flex-wrap gap-4 max-w-[1000px] mx-auto mt-[100px]">
        {NewsApiProviders?.map((np) => (
          <Card data={np} />
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
  },
  {
    author: "BBC NEWS",
    date: "",
    title: "Search worldwide news with code",
    description:
      "Locate articles and breaking news headlines from news sources and blogs across the web with our JSON API.",
    image: "",
    authorAvatar: "",
  },
  {
    author: "GUARDIAN NEWS",
    date: "",
    title: "Search worldwide news with code",
    description:
      "Locate articles and breaking news headlines from news sources and blogs across the web with our JSON API.",
    image: "",
    authorAvatar: "",
  },
];

export default Home;