import { BiShareAlt, BiEdit, BiCustomize } from "react-icons/bi";
import { AiOutlineControl } from "react-icons/ai";
import { HiOutlineArrowPath, HiOutlineMegaphone } from "react-icons/hi2";
import { TbArrowBackUp, TbArrowForwardUp } from "react-icons/tb";
import { RiShare2Line } from "react-icons/ri";
import { GiFairyWand } from "react-icons/gi";

const SubSectionOne = () => {
  return (
    <div className="sub-section-1 flex items-center justify-between gap-[35px] w-[100%]">
      <div className="layout-container flex items-center gap-[3px] w-[40%}">
        <div className="layout-icon flex justify-center items-center gap-[8px] p-[10px] pr-[13px] rounded-[30px]  ">
          <div className="h-[30px] w-[30px] rounded-full bg-white flex justify-center items-center">
            <BiCustomize className="text-[#000000]" />
          </div>
          <p className="text-[13px]">Layout</p>
        </div>

        <div className="flex justify-center items-center gap-[8px] p-[10px] pr-[13px] border-[#171616] border-[1px] rounded-[30px]  ">
          <div className="h-[30px] w-[30px] rounded-full bg-[#575757] flex justify-center items-center">
            <AiOutlineControl className="text-[#ffffff]" />
          </div>
          <p className="text-[13px]">Customizing</p>
        </div>

        <div className="flex justify-center items-center gap-[8px] p-[10px] pr-[13px] border-[#171616] border-[0.1em] rounded-[30px]  ">
          <div className="h-[30px] w-[30px] rounded-full bg-[#575757] flex justify-center items-center">
            <HiOutlineMegaphone className="text-[#ffffff]" />
          </div>
          <p className="text-[13px]">Report Details</p>
        </div>
      </div>

      <div className="display-relative arrows-container flex items-center w-[40%]">
        <div className="display-absolute display-absolute-1 left-arrow h-[45px] w-[45px] rounded-full flex justify-center items-center">
          <TbArrowBackUp className="text-[20px]" />
        </div>

        <div className="display-absolute display-absolute-2 right-arrow h-[45px] w-[45px] rounded-full flex justify-center items-center">
          <TbArrowForwardUp className="text-[20px]" />
        </div>

        <div className="display-absolute display-absolute-3 circle-arrow h-[45px] w-[45px] rounded-full flex justify-center items-center">
          <HiOutlineArrowPath className="text-[20px]" />
        </div>

        <div className="display-absolute display-absolute-4 share h-[45px] w-[45px] rounded-full flex justify-center items-center">
          <RiShare2Line className="text-[20px]" />
        </div>

        <div className="display-absolute display-absolute-5 edit h-[45px] w-[45px] rounded-full flex justify-center items-center">
          <BiEdit className="text-[20px]" />
        </div>
      </div>

      <div className="display-relative share-container flex items-center justify-end w-[20%]">
        <div className="display-absolute display-abs-1 flex justify-center items-center gap-[8px] p-[10px] pr-[13px] rounded-[30px]  ">
          <div className="flex justify-center items-center">
            <BiShareAlt />
          </div>
          <p>Share</p>
        </div>

        <div className="display-absolute display-abs-2 edit h-[45px] w-[45px] rounded-full flex justify-center items-center">
          <GiFairyWand />
        </div>
      </div>
    </div>
  );
};

export default SubSectionOne;
