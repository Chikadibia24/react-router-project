import { FaArrowDownLong } from "react-icons/fa6";


const Paragraph = ({text, divText, style, style2}) => {
  return (
    <div className="hidden md:flex gap-2 items-center">
      <p style={style2}>{text}</p>
      <div className="divText" style={style}>
        <span className="m-0 text-[13px]">{divText}</span>
      </div>
    </div>
  );
}


const PillDivs = ({text,style}) => {
  return (
      <div
        className="flex items-center pl-[10px] text-[13px] text-[#000000]"
        style={style}
      >
        {text}
      </div>
  );
}


const DownArrowText = ({text1,text2}) => {
  return (
    <div className="flex gap-[3px] items-center justify-center  text-[13px] w-[100%]">
      <div className="flex gap-[3px] items-center text-[13px] w-[53%]">
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
    </div>
  );
}

const DisplayComponents1 = () => {
  return (
    
    <div className="flex flex-col gap-[3px]">
      <div className="flex justify-between items-center w-[100%]">
        <div className="flex items-center w-[30%]">
          <Paragraph text={"1,600"} style={{ display: "none" }} />
        </div>

        <div className="position-relative  flex items-center justify-start w-[70%]">
          <PillDivs
            text={"700"}
            style={{
              backgroundColor: "#059DCC",
              height: "45px",
              width: "190px",
              borderTopLeftRadius: "30px",
              borderBottomLeftRadius: "30px",
            }}
          />

          <PillDivs
            text={"300"}
            style={{
              backgroundColor: "rgba(2, 213, 141,0.9)",
              height: "45px",
              width: "130px",
              position: "absolute",
              bottom: "0",
              left: "35%",
              right: "65%",
              zIndex: "1",
              display: "flex",
              justifyContent: "end",
              paddingRight: "10px",
              borderRadius: "30px",
            }}
          />

          <PillDivs
            text={"600"}
            style={{
              backgroundColor: "#BAE011",
              height: "45px",
              width: "190px",
              display: "flex",
              justifyContent: "end",
              borderTopRightRadius: "30px",
              borderBottomRightRadius: "30px",
              paddingRight: "10px",
            }}
          />
        </div>

        <div className="flex items-center w-[30%] justify-end">
          <Paragraph text={"Lead"} divText={"4d"} style2={{fontSize:"12px"}}/>
        </div>
      </div>

      <DownArrowText text1={<FaArrowDownLong />} text2={"88%"}/>
    </div>
    
  );
}



const DisplayComponents2 = () => {
  return (
    
      <div className="flex flex-col gap-[3px]">
        <div className="flex justify-between items-center w-[100%]">
          <div className="flex items-center w-[30%]">
            <Paragraph text={"1,410"} style={{ display: "none" }} />
          </div>

          <div className="position-relative  flex items-center justify-start w-[70%]">
            <PillDivs
              text={"600"}
              style={{
                backgroundColor: "#059DCC",
                height: "45px",
                width: "190px",
                borderTopLeftRadius: "30px",
                borderBottomLeftRadius: "30px",
              }}
            />

            <PillDivs
              text={"500"}
              style={{
                backgroundColor: "rgba(2, 213, 141,0.9)",
                height: "45px",
                width: "160px",
                position: "absolute",
                bottom: "0",
                left: "20%",
                right: "80%",
                zIndex: "1",
                display: "flex",
                justifyContent: "end",
                paddingRight: "10px",
                borderRadius: "30px",
              }}
            />

            <PillDivs
              text={"300"}
              style={{
                backgroundColor: "#BAE011",
                height: "45px",
                width: "120px",
                display: "flex",
                justifyContent: "end",
                borderTopRightRadius: "30px",
                borderBottomRightRadius: "30px",
                paddingRight: "10px",
              }}
            />
          </div>

          <div className="flex items-center w-[30%] justify-end">
            <Paragraph
              text={"Discovery"}
              divText={"8d"}
              style2={{ fontSize: "12px" }}
            />
          </div>
        </div>

        <DownArrowText text1={<FaArrowDownLong />} text2={"86%"} />
      </div>
    
  );
};


const DisplayComponents3 = () => {
  return (
    
      <div className="flex flex-col gap-[3px]">
        <div className="flex justify-between items-center w-[100%]">
          <div className="flex items-center w-[30%]">
            <Paragraph text={"1,240"} style={{ display: "none" }} />
          </div>

          <div className="position-relative  flex items-center justify-start w-[70%]">
            <PillDivs
              text={"400"}
              style={{
                backgroundColor: "#059DCC",
                height: "45px",
                width: "145px",
                borderTopLeftRadius: "30px",
                borderBottomLeftRadius: "30px",
              }}
            />

            <PillDivs
              text={"490"}
              style={{
                backgroundColor: "rgba(2, 213, 141,0.9)",
                height: "45px",
                width: "155px",
                position: "absolute",
                bottom: "0",
                left: "13%",
                right: "87%",
                zIndex: "1",
                display: "flex",
                justifyContent: "end",
                paddingRight: "10px",
                borderRadius: "30px",
              }}
            />

            <PillDivs
              text={"350"}
              style={{
                backgroundColor: "#BAE011",
                height: "45px",
                width: "135px",
                display: "flex",
                justifyContent: "end",
                borderTopRightRadius: "30px",
                borderBottomRightRadius: "30px",
                paddingRight: "10px",
              }}
            />
          </div>

          <div className="flex items-center w-[30%] justify-end">
            <Paragraph
              text={"Qualification"}
              divText={"22d"}
              style2={{ fontSize: "12px" }}
            />
          </div>
        </div>

        <DownArrowText text1={<FaArrowDownLong />} text2={"46%"} />
      </div>
  );
};


const SubSectionTwoC2Child3 = () => {
  return (
    <div className="flex flex-col justify-center gap-[25px]">
      <DisplayComponents1 />
      <DisplayComponents2 />
      <DisplayComponents3 />
    </div>
  );
}

export default SubSectionTwoC2Child3;