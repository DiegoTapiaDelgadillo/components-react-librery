import "./index.css";
import ShareIcon from "./shareIcon";
import SocialMediaIcon from "./socialMediaIcon";
import { useState } from "react";
export default function Share() {
  const [iconsShare, setIconsShare] = useState(false);

  const showIchonsShare = () => {
    setIconsShare(!iconsShare);
  };

  return (
    <div className=" relative h-full pt-12">
      <div
        className=" w-12 h-12 flex items-center justify-center bg-neutral-100 hover:bg-neutral-300 rounded-full cursor-pointer ease-in-out duration-300"
        onClick={showIchonsShare}
      >
        <ShareIcon />
      </div>
      <div
        className={
          iconsShare
            ? "absolute w-full top-0 grid justify-center shadow-2xl opacity-100 ease-in-out duration-300"
            : " absolute w-full top-0 grid justify-center shadow-2xl opacity-0 ease-in-out duration-300"
        }
      >
        <div className="bg-neutral-700 w-auto py-2 flex justify-between px-8 rounded-lg">
          <p className=" text-neutral-200 hidden md:block">SHARE</p>
          <div className="md:pl-4">
            <SocialMediaIcon />
          </div>
        </div>
        <div className=" w-full flex justify-center">
          <div className="triangulo"></div>
        </div>
      </div>
    </div>
  );
}
