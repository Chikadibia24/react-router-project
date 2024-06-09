import SubSectionOne from "../subSections/subSectionOne";
import SubSectionTwo from "../subSections/subSectionTwo";

const HomePage = () => {
  return (
    <section className="section text-white bg-[#000000] pt-[100px] md:pt-[50px] pr-[10px] pl-[10px] flex flex-col items-center  gap-[3px] w-[100%]">
      <SubSectionOne />
      <SubSectionTwo />
    </section>
  );
};
export default HomePage;
