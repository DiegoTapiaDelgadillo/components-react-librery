export default function BlogPreviewCard({
  img,
  date,
  title,
  body,
  autorPhoto,
  name,
}) {
  return (
    <div className="min-h-svh flex justify-center items-center bg-yellow-300 p-4 sm:p-12">
      <div className="bg-black rounded-2xl pr-4 pb-4 lg:w-3/4 xl:w-2/4">
        <div className="bg-white w-full rounded-2xl border-2 border-black p-8">
          <img src={img} alt="coding" className="rounded-2xl sm:h-96 w-full" />
          <div className="py-6">
            <button className="py-2 px-4 bg-yellow-300 font-bold sm:text-xl rounded hover:bg-yellow-300/50 ease-in-out duration-300">
              Learning
            </button>
          </div>
          <p className="text-neutral-500 text-sm">
            Published <span>{date}</span>
          </p>
          <div className="py-4">
            <h1 className=" font-bold text-xl sm:text-4xl">{title}</h1>
          </div>
          <p className=" text-neutral-500 text-justify text-sm">{body}</p>
          <div className="py-12 flex items-center">
            <div>
              <img src={autorPhoto} alt="" className="h-16 w-16 rounded-full" />
            </div>
            <div className="px-4">
              <h1 className=" font-bold text-xl">{name}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
