import { TabsDemo } from "./Tab";
import { useSearchParams } from "react-router-dom";

const NewsDetail = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const aggregator = searchParams.get("aggregator");
  console.log(aggregator);
  return (
    <>
      <div>
        <TabsDemo />
      </div>
    </>
  );
};

export default NewsDetail;
