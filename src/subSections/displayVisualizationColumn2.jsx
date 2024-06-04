
const DisplayVisualizationColumn2 = ({icon, text}) => {
  return (
    <>
      <div className="w-[fit-content] p-[2px] pr-[4px] flex justify-start items-center border-[1px] border-[#323232] gap-[5px] text-[13px] rounded-[30px] ">
        <div className="h-[23px] w-[23px] rounded-full bg-[#575757] flex justify-center items-center border-[none]">
          <span className="text-[16px]text-[#ffffff]">{icon}</span>
        </div>
        {text}
      </div>
    </>
  );
}
export default DisplayVisualizationColumn2;