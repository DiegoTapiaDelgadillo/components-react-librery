import Share from "./share";

export default function ArticlePreview({ img, profilePhoto, name, date }) {
  return (
    <div className=" min-h-svh bg-neutral-300 flex items-center justify-center p-4">
      <div className="w-full sm:w-4/5 bg-white rounded-2xl shadow-2xl grid 2xl:grid-cols-2">
        <div className="rounded-t-2xl 2xl:rounded-l-2xl">
          <img
            src={img}
            alt=""
            className="w-full rounded-t-2xl 2xl:rounded-l-2xl"
          />
        </div>
        <div className="p-4  md:px-12 lg:px-24 flex items-center">
          <div>
            <h1 className=" text-neutral-700 text-xl sm:text-3xl">
              Shift the overall look feel by adding these wonderful touches to
              furnite in your home.
            </h1>
            <h2 className=" py-8 text-neutral-500 text-sm sm:text-lg">
              Ever been in a room and felt like something was missing? Perhaps
              it felt sightly bare and uninviting. I've got some simple tips to
              help you make room feel complete.
            </h2>
            <div className="flex items-end justify-between">
              <div className=" flex items-center">
                <img
                  src={profilePhoto}
                  alt=""
                  className=" rounded-full w-16 sm:w-24 h-16 sm:h-24"
                />
                <div className="px-4">
                  <h1 className=" text-neutral-700 text-sm sm:text-xl">
                    {name}
                  </h1>
                  <h2 className=" text-neutral-500 text-sm">{date}</h2>
                </div>
              </div>
              <Share />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
