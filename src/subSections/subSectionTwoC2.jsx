import SubSectionTwoC2Child1 from "./subSectionTwoC2Child1"
import SubSectionTwoC2Child2 from "./subSectionTwoC2Child2";
import SubSectionTwoC2Child3 from "./subSectionTwoC2Child3";

const SubSectionTwoC2 = () => {
  return (
    <div className="subSectionTwoC2 flex flex-col gap-[25px] w-[100%]  md:w-[70%] p-[15px] pr-[25px] pl-[25px] rounded-lg">
      <SubSectionTwoC2Child1 />
      <SubSectionTwoC2Child2 />
      <SubSectionTwoC2Child3 />
    </div>
  );
}

export default SubSectionTwoC2;