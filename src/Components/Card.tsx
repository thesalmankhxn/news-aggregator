import { useNavigate } from "react-router-dom";
import { SearchFilter, useSearchFilter } from "./Context";
import { Sources } from "@/api/Models";

type CardProps = {
  data: {
    author: string;
    date: string;
    title: string;
    description: string;
    image: string;
    authorAvatar: string;
    source: Sources;
  };
  canReadMore?: boolean;
};

export function Card(props: CardProps) {
  const { canReadMore = false, data } = props;
  const navigate = useNavigate();

  const { setFilter } = useSearchFilter();

  const onHandleClick = () => {
    setFilter((f: SearchFilter) => ({ ...f, source: data?.source }));
    navigate(`news?source=${data?.source}`);
  };

  return (
    <div
      className="w-80 mx-auto cursor-pointer"
      onClick={() => onHandleClick()}
    >
      <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
        <div className="w-full aspect-w-16 aspect-h-10 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative border p-3">
          <div
            className={`group-hover:scale-95 group-hover:rounded-2xl transform transition duration-200 h-[60px] text-black text-3xl font-bold`}
          >
            {data?.author}
          </div>
        </div>
        <div className="border-b border-x p-4">
          <h2 className="font-bold my-4 text-lg text-zinc-700">
            {data?.title}
          </h2>
          <h2 className="font-normal my-4 text-sm text-zinc-500">
            {data?.description}
          </h2>
          <div className="flex flex-row justify-between items-center mt-10">
            <span className="text-sm text-gray-500">{data?.date}</span>
            {canReadMore ? (
              <div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                Read More
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
