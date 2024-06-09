import { BiShareAlt, BiEdit, BiCustomize } from "react-icons/bi";
import { AiOutlineControl } from "react-icons/ai";
import { HiOutlineArrowPath, HiOutlineMegaphone } from "react-icons/hi2";
import { TbArrowBackUp, TbArrowForwardUp } from "react-icons/tb";
import { RiShare2Line } from "react-icons/ri";
import { GiFairyWand } from "react-icons/gi";


const PillIcons = ({icon,text,addClass1, addClass2}) => {
  return (
    <div className={` flex justify-center items-center gap-[8px] p-[10px] pr-[13px] rounded-[30px] ${addClass1}`}>
      <div className={`flex justify-center items-center hover:cursor-pointer ${addClass2}`}>
        {icon}
      </div>
      <p className="text-[13px]">{text}</p>
    </div>
  );
}

const CircleIcons = ({icon, addClass}) => {
  return (
    <div
      className={`display-absolute left-arrow h-[41px] w-[41px] rounded-full flex justify-center items-center text-[20px] hover:cursor-pointer ${addClass}`}
    >
      {icon}
    </div>
  );
}

const SubSectionOne = () => {
  return (
    <div className="sub-section-1 hidden h-[auto] md:flex items-center justify-between gap-[35px] w-[100%] border">
      <div className="layout-container flex items-center gap-[3px] w-[40%}">
        <PillIcons
          icon={<BiCustomize className="text-[#000000]" />}
          addClass1={"layout-icon"}
          addClass2={"bg-white h-[30px] w-[30px] rounded-full"}
          text={"Layout"}
        />

        <PillIcons
          icon={<AiOutlineControl />}
          addClass1={"border-[#171616] border-[1px]"}
          addClass2={"bg-[#575757] h-[30px] w-[30px] rounded-full"}
          text={"Customizing"}
        />

        <PillIcons
          icon={<HiOutlineMegaphone />}
          addClass1={"border-[#171616] border-[1px]"}
          addClass2={"bg-[#575757] h-[30px] w-[30px] rounded-full"}
          text={"Report Details"}
        />
      </div>

      <div className="display-relative arrows-container flex items-center w-[40%]">
        <CircleIcons icon={<TbArrowBackUp />} addClass={"display-absolute-1"} />

        <CircleIcons
          icon={<TbArrowForwardUp />}
          addClass={"display-absolute-2"}
        />

        <CircleIcons
          icon={<HiOutlineArrowPath />}
          addClass={"display-absolute-3"}
        />

        <CircleIcons icon={<RiShare2Line />} addClass={"display-absolute-4"} />

        <CircleIcons icon={<BiEdit />} addClass={"display-absolute-5"} />
      </div>

      <div className="display-relative share-container flex items-center justify-end w-[20%]">
        <PillIcons
          icon={<BiShareAlt className="text-[#ffffff] hover:cursor-pointer" />}
          addClass1={"display-absolute display-abs-1"}
          // addClass2={"bg-white"}
          text={"Share"}
        />

        <CircleIcons icon={<GiFairyWand />} addClass={"display-abs-2"} />
      </div>
    </div>
  );
};

export default SubSectionOne;
