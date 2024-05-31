import { Link, useLocation } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  let location = useLocation();
  let path = location.pathname;
  return (
    <div>
      <div className="bg-black p-10 lg:p-20">
        <div className="pt-10 lg:flex  justify-center lg:justify-around text-white">
          <div className="flex justify-center">
          <div className="">
            <h1 className="logirent">AXOLOTRON </h1>
            <p>The Age of AI</p>
          </div>
          </div>
          <div className="lg:mt-0 mt-10 flex justify-center">
            <ul>
              <li>
                <Link
                  className={
                    path === "/"
                      ? " text-white/50 underline underline-offset-4"
                      : ""
                  }
                >
                  Home
                </Link>
              </li>

              <li>
                {" "}
                <Link
                  className={
                    path === "/about"
                      ? " text-white/50 underline underline-offset-4"
                      : ""
                  }
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={
                    path === "/services"
                      ? " text-white/50 underline underline-offset-4"
                      : ""
                  }
                >
                  {" "}
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className={
                    path === "/works"
                      ? " text-white/50 underline underline-offset-4"
                      : ""
                  }
                >
                  Works
                </Link>
              </li>
              <li className="flex justify-center items-center"></li>
            </ul>
          </div>
          <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-10  mt-10 lg:mt-0">
          <a href="" className="text-2xl"><FaLinkedinIn /></a>
          <a href="" className="text-2xl"><BiLogoGmail /></a>
          <a href="" className="text-2xl"><AiFillInstagram /></a>
          </div>
          </div>
        </div>
        <hr className="m-10" />
        <div className="text-white flex justify-center">
        <p>©2024 AXOLOTRON. All rights reserved </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
