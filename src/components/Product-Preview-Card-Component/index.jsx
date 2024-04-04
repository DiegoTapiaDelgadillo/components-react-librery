export default function ProductPreviewCardComponent({
  img,
  title,
  description,
  price,
  discount,
}) {
  return (
    <div className=" flex justify-center items-center min-h-svh bg-orange-50 p-4 lg:px-24 xl:px-48 2xl:px-96 sm:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 rounded-xl w-full bg-white">
        <div className="h-80 sm:h-auto">
          <img
            src={img}
            alt=""
            className="w-full h-full object-cover rounded-t-2xl sm:rounded-2xl sm:shadow-2xl"
          />
        </div>
        <div className="p-8">
          <h2 className="text-neutral-500">PERFUME</h2>
          <h1 className="py-8 text-5xl font-bold font-serif">{title}</h1>
          <p className="text-sm text-neutral-500">{description}</p>
          <div className="py-8 flex">
            <h1 className="text-red-500 font-serif font-bold text-5xl">
              ${price}
            </h1>
            <p className="px-4 text-xl text-neutral-500 line-through">
              ${discount}
            </p>
          </div>
          <button className="bg-red-500 py-4 w-full rounded-md flex justify-center hover:bg-red-500/50 ease-in-out duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <p className="px-4 text-white font-bold">Add to car</p>
          </button>
        </div>
      </div>
    </div>
  );
}
