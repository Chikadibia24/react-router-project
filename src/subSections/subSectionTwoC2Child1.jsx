import {
  MdDateRange,
} from "react-icons/md";
import { GiSettingsKnobs } from "react-icons/gi";
import { LuPlus } from "react-icons/lu";


const MakeCircle = ({icon, bgColor}) => {
  return (
    <div className="makeCircle h-[35px] w-[35px] rounded-full flex justify-center items-center  text-[#ffffff] hover:cursor-pointer" style={bgColor}>
      {icon}
    </div>
  );
};

const MakePill = ({image, bgColor}) => {
  
  return (
    <div
      className="p-[3px] pl-[15px] pr-[15px] rounded-[30px]"
      style={bgColor}
    >
      <img
        src={image}
        alt="thumbnails"
        className="w-[30px] h-[30px] rounded-[50%]"
      />
    </div>
  );
}

const SubSectionTwoC2Child1 = () => {

  return (
    <div className="flex items-center justify-between w-[100%]">
      <div className="flex items-center w-[50%]">
        <h1 className="text-[45px]">Product ID</h1>
      </div>

      <div className="flex items-center gap-[10px] w-[44%] justify-end">
        <div className="flex items-center gap-[3px] w-[46%] justify-end">
          <MakeCircle icon={<MdDateRange />} />

          <MakeCircle icon={<GiSettingsKnobs />} />
        </div>

        <div
          className="makePills flex items-center w-[50%] justify-end"
          style={{ position: "relative" }}
        >
          <MakePill
            image={
              "https://res.cloudinary.com/chikadibia/image/upload/v1717380184/My-GitHub-DP-removebg-preview_qdrcuk.png"
            }
            bgColor={{
              backgroundColor: "#059DCC",
              position: "absolute",
              left: "1px",
            }}
          />

          <MakePill
            image={
              "https://res.cloudinary.com/chikadibia/image/upload/v1717380184/My-GitHub-DP-removebg-preview_qdrcuk.png"
            }
            bgColor={{
              backgroundColor: "#02D58D",
              position: "absolute",
              left: "52px",
              borderLeft: "1px solid #000000",
            }}
          />

          <MakePill
            image={
              "https://res.cloudinary.com/chikadibia/image/upload/v1717380184/My-GitHub-DP-removebg-preview_qdrcuk.png"
            }
            bgColor={{
              backgroundColor: "#BAE011",
              position: "absolute",
              left: "104px",
              borderLeft: "1px solid #000000",
            }}
          />

          <MakeCircle
            icon={<LuPlus />}
            bgColor={{
              position: "absolute",
              right: "0",
              borderLeft: "1px solid #000000",
              backgroundColor: "rgba(255,255,255,0.15)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SubSectionTwoC2Child1;
