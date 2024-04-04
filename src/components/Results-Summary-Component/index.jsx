export default function ResultsSummaryComponent() {
  return (
    <div className=" flex justify-center items-center min-h-svh sm:px-12 2xl:px-96">
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full shadow-2xl rounded-3xl">
        <div className="bg-gradient-to-b from-indigo-500 to-indigo-700 rounded-b-3xl sm:rounded-2xl px-24 py-8">
          <p className=" text-center font-bold text-white/70">Your Results</p>
          <div className="py-8 flex w-full justify-center">
            <div className=" rounded-full bg-gradient-to-b from-indigo-800 to-indigo-700 p-16">
              <h1 className="text-center text-white text-6xl font-bold">76</h1>
              <h2 className="text-white/70 text-center text-sm">of 100</h2>
            </div>
          </div>
          <h1 className="text-white font-bold text-2xl text-center">Great</h1>
          <p className="py-4 text-white/70 text-center">
            Your scored higher than 65% of the people who have taken these test
          </p>
        </div>
        <div className="bg-white rounded-2xl p-8">
          <h1 className=" font-bold text-xl pb-8">Summary</h1>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-orange-100 p-4 rounded-md">
              <div className="flex justify-between w-full items-center">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 stroke-orange-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                    />
                  </svg>
                  <p className="px-4 text-orange-600 font-bold">Reaction</p>
                </div>
                <p className="text-slate-700">
                  <span className=" font-bold">80 </span>/ 100
                </p>
              </div>
            </div>
            <div className="bg-yellow-100 p-4 rounded-md">
              <div className="flex justify-between w-full items-center">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 stroke-yellow-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                    />
                  </svg>

                  <p className="px-4 text-yellow-500 font-bold">Memory</p>
                </div>
                <p className="text-slate-700">
                  <span className=" font-bold">80 </span>/ 100
                </p>
              </div>
            </div>
            <div className="bg-green-100 p-4 rounded-md">
              <div className="flex justify-between w-full items-center">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 stroke-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                    />
                  </svg>
                  <p className="px-4 text-green-500 font-bold">Verbal</p>
                </div>
                <p className="text-slate-700">
                  <span className=" font-bold">80 </span>/ 100
                </p>
              </div>
            </div>
            <div className="bg-blue-100 p-4 rounded-md">
              <div className="flex justify-between w-full items-center">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 stroke-blue-500"
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
                  <p className="px-4 text-blue-500 font-bold">Visual</p>
                </div>
                <p className="text-slate-700">
                  <span className=" font-bold">80 </span>/ 100
                </p>
              </div>
            </div>
          </div>
          <div className="py-4">
            <button className="py-4 w-full bg-slate-700 rounded-3xl text-white font-bold hover:bg-slate-700/50 ease-in-out duration-300">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
