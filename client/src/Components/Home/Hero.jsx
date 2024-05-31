import robo1 from "../../assets/images/robo1.jpg";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";


const Hero = () => {
  return (
    <div>
      <div className="lg:flex justify-around p-10 text-white h-screen">
        <div className="flex items-center justify-center">
          <div className="">
            <h1 className="logirent text-4xl mt-20 lg:mt-0 lg:text-6xl">Axolotron</h1>
            <p className="text-xl">The AGE OF AI</p>
            <p className="pt-5 max-w-[500px]">
              Artificial intelligence is not a substitute for human
              intelligence; it is a tool to amplify human creativity and
              ingenuity.
            </p>
            <p className="pl-3 pr-3 pt-1 pb-1 bg-white/20 rounded-xl w-fit mt-5">Get Started</p>
          </div>
        </div>
        <div className="">
          <img
            src={robo1}
            alt=""
            className="w-[400px] h-[400px] rounded-full"
          />
          <div className="flex justify-center mt-[-50px]">
          <div className="bg-white/20 rounded-xl p-5 max-w-[200px] text-center">
            We Make , We build , We Develop
          </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="lg:grid grid-cols-1 gap-10 flex mt-10 lg:mt-0">
          <a href="https://www.linkedin.com/company/generalaisolutions/" className="text-2xl"><FaLinkedinIn /></a>
          <a href="mailto:axolotron.ai@gmail.com" className="text-2xl"><BiLogoGmail /></a>
          <a href="https://www.instagram.com/axolotron?igsh=Y2doa3VtdGh5MWVl" className="text-2xl"><AiFillInstagram /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
