import { CiCirclePlus } from "react-icons/ci";

const DisplayColorStackColumn = ({ text1, text2 }) => {
  return (
    <>
      <div className="w-[100%] flex justify-start text-[13px]">{text1}</div>

      <div className="w-[100%] flex flex-col items-center justify-center">
        <div className="text-[35px] text-[#323232] flex justify-center items-center hover:cursor-pointer">
          <CiCirclePlus />
        </div>
        <p className="text-[10px] text-[#646464]">Drop File Here</p>
      </div>

      <div className="w-[fit-content] p-[2px] pr-[4px] flex justify-start items-center border-[1px] border-[#323232] gap-[5px] text-[13px] rounded-[30px] ">
        <div className="h-[23px] w-[23px] rounded-full bg-[#575757] flex justify-center items-center border-[none] hover:cursor-pointer">
          <span className="text-[16px]text-[#ffffff]">A</span>
        </div>
        {text2}
      </div>
    </>
  );
};

export default DisplayColorStackColumn;
