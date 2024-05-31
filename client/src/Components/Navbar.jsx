import { useState } from "react";
import logo from "../assets/images/logovector.svg";
import { Link, useLocation } from "react-router-dom";
import { Drawer } from "@mui/material";
import { RiMenu4Line } from "react-icons/ri";

const Navbar = () => {
  let location = useLocation();
  let path = location.pathname;
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <div>
      <div className="flex justify-around p-3 text-white ">
        <div className="flex items-center gap-2">
          <img src={logo} alt="" className="w-[50px] " />
          <h1 className="logirent text-[17px] items-center">axolotron</h1>
        </div>
        <div className=" items-center gap-10 hidden lg:flex">
          <Link className={path==="/"?" text-white/50 underline underline-offset-4":""}>Home</Link>
          <Link className={path==="/about"?" text-white/50 underline underline-offset-4":""}>About</Link>
          <Link className={path==="/services"?" text-white/50 underline underline-offset-4":""}> Services</Link>
          <Link className={path==="/works"?" text-white/50 underline underline-offset-4":""}>Works</Link>
        </div>
        <div className=" hidden lg:flex justify-center items-center">
          <Link to={"/contact"}>
            <div className="pl-3 pr-3 pt-1 pb-1 rounded-md bg-white/20 backdrop-blur-xl ">
              Start Work
            </div>
          </Link>
        </div>
        <div className="flex items-center lg:hidden">
        <RiMenu4Line className="text-2xl " onClick={toggleDrawer(true)} />
        </div>
      </div>
      <Drawer open={open} onClose={toggleDrawer(false)} className="">
        <div className=" block w-[220px] h-[100vh] pt-10 leading-10 text-center bg-black/80 text-white ">
          <ul>
            <li>
            <Link className={path==="/"?" text-white/50 underline underline-offset-4":""}>Home</Link>
            </li>
            
            <li>
              {" "}
              <Link className={path==="/about"?" text-white/50 underline underline-offset-4":""}>About</Link>
            </li>
            <li>
            <Link className={path==="/services"?" text-white/50 underline underline-offset-4":""}> Services</Link>
            </li>
            <li>
            <Link className={path==="/works"?" text-white/50 underline underline-offset-4":""}>Works</Link>
            </li>
            <li className="flex justify-center items-center">
            <Link to={"/contact"}>
            <div className="pl-3 pr-3 pt-1 pb-1 rounded-md bg-white/20 backdrop-blur-xl ">
              Start Work
            </div>
          </Link>
            </li>
          </ul>
        </div>
        <div className="bottom flex align-bottom  pb-10 justify-center bg-black/80 text-white">
          <div className=" ">
            <div className="flex justify-center">
              <img src={logo} alt="" className="w-[70px] mt-[2px]" />
            </div>
            <p className="lato-regular text-center font-bold pt-2 tracking-wider">
              WEDYF
            </p>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
