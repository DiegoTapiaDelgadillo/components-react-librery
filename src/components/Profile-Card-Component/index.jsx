export default function ProfileCard({ img, name, age, city }) {
  return (
    <div className=" p-8 min-h-svh flex justify-center items-center bg-cyan-500">
      <div className=" w-full md:w-1/2 lg:w-1/3 rounded-2xl shadow-2xl bg-white">
        <div className="grid relative">
          <div className="w-full h-80 bg-cyan-700 rounded-t-2xl"></div>
          <div className="w-full h-80 bg-white rounded-t-2xl flex items-center justify-center rounded-b-2xl">
            <div className="w-full text-center pt-24">
              <h1 className=" font-bold text-2xl text-neutral-800">
                {name}
                <span className=" text-neutral-500 font-normal">{age}</span>
              </h1>
              <p className=" text-neutral-500 text-xl">{city}</p>
              <div className=" flex justify-between px-8 lg:px-12 xl:px-224 pt-8">
                <div>
                  <h1 className=" text-center font-bold text-xl text-neutral-800">
                    80K
                  </h1>
                  <p className=" text-neutral-500">Followers</p>
                </div>
                <div>
                  <h1 className=" text-center font-bold text-xl text-neutral-800">
                    803K
                  </h1>
                  <p className=" text-neutral-500">Likes</p>
                </div>
                <div>
                  <h1 className=" text-center font-bold text-xl text-neutral-800">
                    1.4K
                  </h1>
                  <p className=" text-neutral-500">Photos</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" absolute w-full h-full flex items-center justify-center">
            <img
              src={img}
              alt=""
              className=" w-56 rounded-full border-8 border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
