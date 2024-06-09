import { Link } from "react-router-dom";
import "../App.css";
import { HiSquare3Stack3D } from "react-icons/hi2";
// import { useState } from "react";

const Header = () => {

  // const [active, setActive] = useState(true);

  // const [bgcolor, setBgColor] = useState({
  //     backgroundColor: "#232222",
  // });
  
  // const changeBgColor = (e) => {
  //   e.preventDefault;
  //   setActive(!active);
  //   setBgColor({
  //     backgroundColor: active ? "#000000" : "#232222",
  //   });
  // }

  const links = [
    { label: "Home", url: "/" },
    { label: "Contact Us", url: "/contact" },
    { label: "About Us", url: "/about" }
  ];

  return (
    <nav className="nav w-[100%] h-[75px] flex justify-between items-center text-xl bg-[] pr-5 pl-5 fixed md:sticky z-[10]">
      <div className=" hidden md:w-[20%] md:flex justify-start gap-2  items-center text-white">
        <HiSquare3Stack3D className="text-[35px] hover:cursor-pointer" />
        <span className="text-[#a5a4a4] text-[22px]">|</span>
        <h1 className="text-[23px] text-[#a5a4a4]">Dashboard</h1>
      </div>

      <div className="nav-list-container w-[95%] md:w-[55%] h-[90%] flex justify-center gap-[50px] md:gap-[70px]  items-center text-[#a5a4a4] text-[12px] md:text-[16px] mb-[-10px] bg-[#000000] rounded-tl-[60px] md:rounded-tl-[70px] rounded-tr-[60px] md:rounded-tr-[70px]">
        {links.map(({ label, url }) => (
          <Link
            to={url}
            key={label}
            // style={bgcolor}
            // onClick={changeBgColor}
            // aria-current="page"
            className="nav-list flex justify-center items-center p-[15px] rounded-[30px] h-[55%] w-[auto] border-[none]"
          >
            {` ${label} `}
          </Link>
        ))}
      </div>

      <div className="hidden md:w-[20%] md:flex justify-end items-center">
        <img
          src={
            "https://res.cloudinary.com/chikadibia/image/upload/v1717258515/My-GitHub-DP_fcjzv3.jpg"
          }
          alt="my-dp"
          className="w-[55px] h-[55px] rounded-[50%] hover:cursor-pointer"
        />
      </div>
    </nav>

    // <nav>
    //   <ul>
    //     <li>
    //       <a href="#" className="navlinks">
    //         Home
    //       </a>
    //     </li>
    //     <li>
    //       <a href="#" className="navlinks">
    //         Contact Us
    //       </a>
    //     </li>
    //     <li>
    //       <a href="#" className="navlinks">
    //         About
    //       </a>
    //     </li>
    //   </ul>
    // </nav>
  );
}
export default Header;