import { AiFillPlusCircle } from "react-icons/ai";
import { BiSolidPieChartAlt } from "react-icons/bi";
import {
  LuBarChartBig,
  LuBarChartHorizontalBig,
  LuScatterChart,
} from "react-icons/lu";
import { TbChartDonut3 } from "react-icons/tb";
import { MdLineAxis } from "react-icons/md";
import { RiBarChartHorizontalFill, RiBarChartFill } from "react-icons/ri";



const BuildDivs = ({ prop, addClass }) => {
  return (
    <div className={`h-[35px] w-[35px] rounded-full border-[1px] border-[#323232] flex justify-center items-center border-[none] hover:cursor-pointer ${addClass}`}>
      {prop}
    </div>
  );
};

const DisplayVisualizationColumn = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <p className="text-[14px]">Visualization</p>
        <div className="text-[33px] text-[#575757] flex justify-center items-center hover:cursor-pointer">
          <AiFillPlusCircle />
        </div>
      </div>

      <div className="flex flex-col gap-[3px]">
        <div className="flex gap-[5px]">
          <BuildDivs
            prop={<LuBarChartHorizontalBig className="text-[#000000]" />}
            addClass={"bg-[#ffffff]"}
          />

          <BuildDivs prop={<LuBarChartBig />} />

          <BuildDivs prop={<RiBarChartHorizontalFill />} />

          <BuildDivs prop={<RiBarChartFill />} />
        </div>

        <div className="flex gap-[5px]">
          <BuildDivs prop={<MdLineAxis />} />

          <BuildDivs prop={<LuScatterChart />} />

          <BuildDivs prop={<BiSolidPieChartAlt />} />

          <BuildDivs prop={<TbChartDonut3 />} />
        </div>
      </div>
    </>
  );
};

export default DisplayVisualizationColumn;
