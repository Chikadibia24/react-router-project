import DisplayColorStackColumn from "./displayColorStackColumn";
import DisplayVisualizationColumn from "./displayVisualizationColumn";
import DisplayVisualizationColumn2 from "./displayVisualizationColumn2";
import { FaUser, FaIdCard, FaUserCircle, FaRegIdCard } from "react-icons/fa";
import {
  MdOutlineCreateNewFolder,
  MdDateRange,
  MdAccessTimeFilled,
} from "react-icons/md";





const SubSectionTwoC1 = () => {
  return (
    <div className=" flex gap-1 w-[30%] h-[] p-[0]">
      <div className="visualization flex flex-col gap-1 w-[50%]">
        <div className="flex flex-col gap-[10px] bg-[#171616] w-[100%] h-[28%] rounded-lg p-[7px]">
          <DisplayVisualizationColumn />
        </div>

        <div className="flex flex-col gap-[6px] bg-[#171616] w-[100%] h-[72%] rounded-lg p-[7px]">
          <DisplayVisualizationColumn2 icon={<FaUser />} text={"User Name"} />

          <DisplayVisualizationColumn2 icon={<FaIdCard />} text={"User ID"} />

          <DisplayVisualizationColumn2
            icon={<FaUserCircle />}
            text={"Account Name"}
          />

          <DisplayVisualizationColumn2
            icon={<FaRegIdCard />}
            text={"Account ID"}
          />

          <DisplayVisualizationColumn2
            icon={<MdOutlineCreateNewFolder />}
            text={"Created By"}
          />

          <DisplayVisualizationColumn2
            icon={<MdDateRange />}
            text={"Created Date"}
          />

          <DisplayVisualizationColumn2
            icon={<MdAccessTimeFilled />}
            text={"Created Time"}
          />

          <DisplayVisualizationColumn2
            icon={<MdDateRange />}
            text={"Last Modified Date"}
          />

          <DisplayVisualizationColumn2
            icon={<MdAccessTimeFilled />}
            text={"Last Modified Time"}
          />
        </div>
      </div>

      <div className="color-stack flex flex-col gap-1 w-[50%]">
        <div className="bg-[#171616] w-[100%] h-[] flex flex-col gap-[20px] p-[7px] rounded-lg">
          <DisplayColorStackColumn
            text1={"Color Stack"}
            text2={"Product Owner"}
          />
        </div>

        <div className="pattern-bg w-[100%] h-[] flex flex-col gap-[20px] p-[7px] rounded-lg text-[#323232]">
          <DisplayColorStackColumn text1={"Stages"} text2={"Stage"} />
        </div>

        <div className="bg-[#171616] w-[100%] h-[] flex flex-col gap-[20px] p-[7px] rounded-lg">
          <DisplayColorStackColumn text1={"Metrics"} text2={"Product ID"} />
        </div>
      </div>
    </div>
  );
}
export default SubSectionTwoC1;