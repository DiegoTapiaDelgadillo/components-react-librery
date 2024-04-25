export default function OrderSummaryComponent({ img, textCard, price }) {
  return (
    <div className=" min-h-svh flex items-center justify-center bg-purple-100">
      <div className=" w-96 rounded-2xl shadow-2xl bg-white">
        <figure className=" bg-purple-500 flex justify-center py-8 rounded-t-2xl">
          <img src={img} alt="" className="w-1/2" />
        </figure>
        <div className=" w-full p-4">
          <h1 className=" py-4 font-bold text-2xl text-center">
            Order Summary
          </h1>
          <h2 className=" text-center text-neutral-500 text-sm pb-4">
            {textCard}
          </h2>
          <div className=" rounded-2xl bg-purple-100 flex justify-between items-center p-4">
            <div className=" flex items-center">
              <div className=" bg-purple-300 rounded-full p-2 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 stroke-purple-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"
                  />
                </svg>
              </div>
              <div className=" pl-4">
                <p className=" font-bold">Annual Plan</p>
                <p className=" text-neutral-500">$ {price}</p>
              </div>
            </div>
            <p className=" text-purple-500 underline hover:text-purple-500/50 ease-in-out duration-300 cursor-pointer">
              Change
            </p>
          </div>
          <br />
          <button className="p-4 w-full bg-purple-500 text-white font-bold rounded-2xl hover:bg-purple-500/50 ease-in-out duration-300 shadow-2xl">
            Proceed to Payment
          </button>
          <div className=" py-2"></div>
          <button className=" text-neutral-500 font-bold w-full border border-neutral-500/50 rounded-2xl p-4 hover:text-purple-500 hover:border-purple-500 ease-in-out duration-300">
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
}
