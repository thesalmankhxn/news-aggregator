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

{
  /* <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div> */
}
