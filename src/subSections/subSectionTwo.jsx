import SubSectionTwoC1 from "./subSectionTwoC1";
import SubSectionTwoC2 from "./subSectionTwoC2";

const SubSectionTwo = () => {
  return (
    <div className="flex flex-col md:flex-row gap-[3px]  w-[100%]">
      <SubSectionTwoC1 />
      <SubSectionTwoC2 />
    </div>
  );
};

export default SubSectionTwo;
