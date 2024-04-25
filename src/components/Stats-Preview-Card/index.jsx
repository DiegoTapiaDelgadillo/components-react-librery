export default function StatsPreviewCard({ img }) {
  return (
    <div className=" bg-indigo-950 min-h-svh flex items-center justify-center p-12">
      <div className="w-full 2xl:w-2/4 bg-indigo-900 shadow-2xl rounded-2xl grid grid-cols-1 sm:grid-cols-2">
        <div className="px-8 py-12">
          <h1 className="font-bold text-white text-2xl pb-8 sm:text-start text-center">
            Get <span className=" text-violet-500">Insights</span> that help
            your business grow.
          </h1>
          <h2 className="text-white/50 text-sm text-center sm:text-start">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer, experience, and overall efficiency.
          </h2>
          <div className="pt-8 grid grid-cols-1 sm:flex sm:justify-between text-center sm:text-start gap-4">
            <div>
              <h1 className=" font-bold text-white text-xl">10K</h1>
              <p className=" text-white/50 text-sm">COMPANIES</p>
            </div>
            <div>
              <h1 className=" font-bold text-white text-xl">314</h1>
              <p className=" text-white/50 text-sm">TEMPLATES</p>
            </div>
            <div>
              <h1 className=" font-bold text-white text-xl">12M+</h1>
              <p className=" text-white/50 text-sm">QUERIES</p>
            </div>
          </div>
        </div>
        <div className=" relative rounded-t-2xl md:rounded-2xl">
          <img src={img} alt="" className="object-cover w-full h-full" />
          <div className=" absolute w-full h-full top-0 bg-violet-900 opacity-70"></div>
        </div>
      </div>
    </div>
  );
}
