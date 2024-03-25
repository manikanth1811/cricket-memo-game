import Image from "next/image";
import { headingFont } from "../fonts";

export default function HeaderComponent() {
  return (
    <div
      className={`flex flex-col text-3xl title-div justify-start pl-2 h-fit w-full ${headingFont.className} pb-4 lg:pt-[8rem] pt-2 text-amber-800`}
    >
      <div className="flex items-center gap-1 justify-center">
        <span className="w-fit h-fit ">Cricket </span>
        <Image
          width="28"
          height="28"
          src="https://img.icons8.com/external-justicon-lineal-color-justicon/28/external-cricket-player-sport-avatar-justicon-lineal-color-justicon.png"
          alt="cricket-player-icon"
          className="h-[30px] w-[30px]"
        />
      </div>
      <div className="flex justify-center">
        <span className="w-fit h-fit">Memo Game</span>
      </div>
    </div>
  );
}
