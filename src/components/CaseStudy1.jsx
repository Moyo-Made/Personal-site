import { VscDebugBreakpointLog } from "react-icons/vsc";
import { BsBoxArrowUpRight } from "react-icons/bs";
import megaImage from "../assets/megaleague.png";
import CaseNav from "./CaseNav";

const CaseStudy1 = () => {
  return (
    <div id="case-study">
      <CaseNav />
      <div className="flex flex-1 justify-center items-center -mt-10">
        <div className="text-center">
          <p className="mt-10 font-bold text-[22px] mb-2">Case Study</p>
        </div>
      </div>
      <div className="flex justify-center">
        <h1 className="mt-1 text-[18px] text-[#00000] font-semibold">
          Case Study 1: Revamping Mega League Website: Empowering High-School
          Students for Social Change
        </h1>
      </div>

      {/* Overview */}
      <div className="block justify-center mt-2 ml-[17rem]">
        <h1 className="font-semibold text-[20px]">Overview:</h1>
        <div className="max-w-[47rem]">
          <span className="mt-1">
            As a front-end developer, I collaborated with design and backend
            teams to revamp the Mega League website using React. The project
            aimed to unite high-school students globally to tackle social issues
            through technology.
          </span>
        </div>
      </div>

      {/* Challenges */}
      <div className="block justify-center mt-2 ml-[17rem]">
        <h1 className="font-semibold text-[20px]">Challenges:</h1>
        <div className="max-w-[48rem] mt-1 ml-2">
          <div className="flex space-x-2">
            <VscDebugBreakpointLog className="mt-1" />{" "}
            <span className="font-medium">Outdated Design:</span>
            <span>
              The old website lacked modern design and user engagement.
            </span>{" "}
          </div>
          <br />
          <div className="flex space-x-2 -mt-5">
            <VscDebugBreakpointLog className="mt-1" />
            <span className="font-medium">Limited Functionality:</span>{" "}
            <span>
              Essential features for student collaboration were missing.
            </span>
          </div>
          <br />

          <div className="flex space-x-2 -mt-5">
            <VscDebugBreakpointLog className="mt-1" />
            <span className="font-medium">Scalability Concerns:</span>
            <span>
              Scalable architecture was needed to accommodate growing user
              traffic.
            </span>
          </div>
        </div>
      </div>

      {/* Approach */}
      <div className="block justify-center mt-2 ml-[17rem]">
        <h1 className="font-semibold text-[20px]">Approach:</h1>
        <div className="max-w-[48rem] mt-1 ml-2">
          <div className="flex space-x-2">
            <VscDebugBreakpointLog className="mt-1" />{" "}
            <span className="font-medium">Design Collaboration:</span>
            <span>
              Worked closely with designers to create a modern, intuitive
              interface.
            </span>
          </div>
          <br />
          <div className="flex space-x-2 -mt-5">
            <VscDebugBreakpointLog className="mt-1" />{" "}
            <span className="font-medium">React Implementation: </span>{" "}
            <span>
              Leveraged React for dynamic and responsive web development.
            </span>
          </div>
          <br />
          <div className="flex space-x-2 -mt-5">
            <VscDebugBreakpointLog className="mt-1" />{" "}
            <span className="font-medium">Backend Integration: </span>{" "}
            <span>
              Integrated front-end with backend for seamless data exchange.
            </span>
          </div>
          <br />
          <div className="flex space-x-2 -mt-5">
            <VscDebugBreakpointLog className="mt-1" />
            <span className="font-medium">Testing and Optimization: </span>{" "}
            <span>
              {" "}
              Conducted thorough testing and optimized for speed and
              performance.
            </span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="block justify-center mt-2 ml-[17rem]">
        <h1 className="font-semibold text-[20px]">Results:</h1>
        <div className="mt-4">
          <img
            src={megaImage}
            alt="Mega website image"
            className="w-[45rem] h-[20rem]"
          />
        </div>
        <div className="max-w-[48rem] mt-3 ml-2">
          <div className="flex space-x-2">
            <VscDebugBreakpointLog className="mt-1" />
            <span className="font-medium">Modern Design:</span>
            <span>
              Revamped website features a visually appealing and modern design.
            </span>
          </div>
          <br />
          <div className="flex space-x-2 -mt-5">
            <VscDebugBreakpointLog className="mt-1" />
            <span className="font-medium">Enhanced Functionality: </span>
            <span>
              Added social networking, and collaboration tools for users.
            </span>
          </div>
          <br />
          <div className="flex space-x-2 -mt-5">
            <VscDebugBreakpointLog className="mt-1" />
            <span className="font-medium">Improved Engagement: </span>
            <span>
              Increased user engagement and participation in social change
              initiatives.
            </span>
          </div>
          <br />
          <div className="flex space-x-2 -mt-5">
            <VscDebugBreakpointLog className="mt-1" />
            <span className="font-medium">
              Scalability and Performance:{" "}
            </span>{" "}
            <span>
              Ensured scalability and performance to handle growing user
              traffic.
            </span>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="block justify-center mt-2 ml-[17rem]">
        <h1 className="font-semibold text-[20px]">Conclusion:</h1>
        <div className="max-w-[50rem]">
          <span className="mt-1">
            In conclusion, the Mega League website revamp, achieved through
            React integration and close collaboration, addresses design,
            functionality, and scalability challenges. The outcome is a visually
            appealing platform with enhanced functionality, driving increased
            engagement and participation in social initiatives. Optimized
            performance ensures scalability, highlighting the transformative
            potential of technology-driven solutions for social change.
          </span>
        </div>
      </div>
      <div className="flex justify-end mr-[18rem] mt-2">
        <button className="flex justify-center items-center w-[120px] h-[40px] font-medium rounded-md bg-black text-white">
          <a
            href="https://megahack.tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
          <BsBoxArrowUpRight className="ml-1 w-[0.8rem]" />
        </button>
      </div>
    </div>
  );
};

export default CaseStudy1;
