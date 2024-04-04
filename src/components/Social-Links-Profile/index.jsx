export default function SocialLinksProfile({
  img,
  name,
  address,
  job,
  socialMedia,
}) {
  return (
    <div className=" flex justify-center items-center py-12 min-h-svh bg-neutral-950 px-8 xl:px-96">
      <div className=" bg-neutral-800 w-full h-auto rounded-2xl py-12 px-8">
        <div className="flex justify-center">
          <img src={img} alt="" className="rounded-full h-36 w-36" />
        </div>
        <h1 className="pt-4 pb-2 text-center text-white font-bold text-4xl">
          {name}
        </h1>
        <h1 className="text-center text-green-400 font-bold text-xl">
          {address}
        </h1>
        <h1 className="py-8 text-neutral-300 text-xl text-center">{job}</h1>
        <div className=" grid items-center gap-4 grid-cols-1">
          {socialMedia.map((links) => (
            <div
              className="w-full py-4 bg-neutral-700 rounded-2xl hover:bg-neutral-700/50 ease-in-out duration-300"
              key={links.socialMediaName}
            >
              <a href={links.socialMediaLink} target="_blank">
                <p className="text-white font-bold text-center text-xl">
                  {links.socialMediaName}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
