export default function NftPreviewCardComponent({
  img,
  titleCard,
  textCard,
  price,
  date,
  profilePhoto,
  autorName,
}) {
  return (
    <div className=" bg-sky-950 min-h-svh flex items-center justify-center">
      <div className="w-96 bg-sky-900 rounded-2xl shadow-2xl p-8">
        <div className="relative">
          <img src={img} alt="" className=" rounded-2xl z-50" />
          <div className="absolute bg-white w-full h-full rounded-2xl top-0 bg-cyan-400/50 justify-center items-center flex opacity-0 transition-opacity hover:opacity-100 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 fill-white/50 stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>
        </div>
        <h1 className="py-4 text-white font-bold text-2xl hover:text-cyan-400 cursor-pointer ease-in-out duration-300">
          {titleCard}
        </h1>
        <h2 className=" text-white/50">{textCard}</h2>
        <div className="py-4 flex justify-between items-center">
          <div className=" flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 stroke-cyan-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p className=" text-cyan-400 font-bold pl-2 text-xl">
              {price}
              <span> ETH</span>
            </p>
          </div>
          <div className=" flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 stroke-white/50"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p className=" text-white/50 pl-2 text-xl">{date}</p>
          </div>
        </div>
        <div className=" border-t border-white/50 w-full py-4 flex items-center">
          <img
            src={profilePhoto}
            alt=""
            className=" rounded-full border-2 border-white w-12"
          />
          <p className=" text-white/50 text-xl pl-2">
            Creation of{" "}
            <span className=" text-white hover:text-cyan-400 cursor-pointer ease-in-out duration-300">
              {autorName}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
