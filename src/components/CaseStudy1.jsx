import { VscDebugBreakpointLog } from "react-icons/vsc";
import { BsBoxArrowUpRight } from "react-icons/bs";
import megaImage from "../assets/megaleague.png";
import CaseNav from "./CaseNav";

const CaseStudy1 = () => {
	return (
		<section id="case-study">
			<CaseNav />

			<div className="flex justify-center">
				<h1
					className="md:w-auto w-[360px] mt-4 md:text-[18px] text-[17px]
					font-bold md:ml-0 ml-2"
				>
					Case Study 2: Revamping Mega League Website: Empowering High-School
					Students for Social Change
				</h1>
			</div>

			{/* Overview */}
			<div className="block justify-center mt-2 ml-[17rem]">
				<h1 className="md:font-semibold font-bold md:text-[20px] text-[18px] md:-ml-0 -ml-[15rem]">
					Overview:
				</h1>
				<div className="md:w-[47rem] w-[22rem] md:-ml-0 -ml-[15rem]">
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
				<h1 className="md:font-semibold font-bold md:text-[20px] text-[18px] md:-ml-0 -ml-[15rem]">
					Challenges:
				</h1>
				<div className="md:w-[48rem] w-[22rem] mt-1 md:ml-2 -ml-[15rem]">
					<div className="flex">
						<VscDebugBreakpointLog className="mt-1 w-8" />
						<span>
							<span className="font-bold">Outdated Design</span>: The old
							website lacked modern design and user engagement.
						</span>{" "}
					</div>
					<br />
					<div className="flex -mt-5">
						<VscDebugBreakpointLog className="mt-1 w-8" />
						<span>
							<span className="font-bold">Limited Functionality</span>:
							Essential features for student collaboration were missing.
						</span>
					</div>
					<br />

					<div className="flex -mt-5">
						<VscDebugBreakpointLog className="mt-1 w-8" />
						<span>
							<span className="font-bold">Scalability Concerns</span>: Scalable
							architecture was needed to accommodate growing user traffic.
						</span>
					</div>
				</div>
			</div>

			{/* Approach */}
			<div className="block justify-center mt-2 ml-[17rem]">
				<h1 className="md:font-semibold font-bold md:text-[20px] text-[18px] md:-ml-0 -ml-[15rem]">
					Approach:
				</h1>
				<div className="md:w-[48rem] w-[22rem] mt-1 md:ml-2 -ml-[15rem]">
					<div className="flex">
						<VscDebugBreakpointLog className="mt-1 w-8" />
						<span>
							<span className="font-bold">Design Collaboration</span>: Worked
							closely with designers to create a modern, intuitive interface.
						</span>
					</div>
					<br />
					<div className="flex -mt-5">
						<VscDebugBreakpointLog className="mt-1 w-8" />
						<span>
							<span className="font-bold">React Implementation </span>:
							Leveraged React for dynamic and responsive web development.
						</span>
					</div>
					<br />
					<div className="flex -mt-5">
						<VscDebugBreakpointLog className="mt-1 w-8" />
						<span>
							<span className="font-bold">Backend Integration </span>:
							Integrated front-end with backend for seamless data exchange.
						</span>
					</div>
					<br />
					<div className="flex -mt-5">
						<VscDebugBreakpointLog className="mt-1 w-8" />
						<span>
							<span className="font-bold">Testing and Optimization </span>:
							Conducted thorough testing and optimized for speed and
							performance.
						</span>
					</div>
				</div>
			</div>

			{/* Results */}
			<div className="block justify-center mt-2 md:ml-[17rem] ml-[2rem]">
				<h1 className="md:font-semibold font-bold md:text-[20px] text-[18px] md:ml-0 ml-[0.2rem]">
					Results:
				</h1>
				<div className="mt-4">
					<img
						src={megaImage}
						alt="Mega website image"
						className="md:w-[45rem] w-[20rem] md:h-[20rem] h-[12rem]"
					/>
				</div>
				<div className="md:w-[48rem] w-[22rem] mt-3 ml-2">
					<div className="flex">
						<VscDebugBreakpointLog className="mt-1 w-8" />
						<span>
							<span className="font-bold">Modern Design</span>: Revamped website
							features a visually appealing and modern design.
						</span>
					</div>
					<br />
					<div className="flex -mt-5">
						<VscDebugBreakpointLog className="mt-1 w-8" />
						<span>
							<span className="font-bold">Enhanced Functionality</span>: Added
							social networking, and collaboration tools for users.
						</span>
					</div>
					<br />
					<div className="flex -mt-5">
						<VscDebugBreakpointLog className="mt-1 w-8" />
						<span>
							<span className="font-bold">Improved Engagement</span>: Increased
							user engagement and participation in social change initiatives.
						</span>
					</div>
					<br />
					<div className="flex -mt-5">
						<VscDebugBreakpointLog className="mt-1 w-8" />
						<span>
							<span className="font-bold">Scalability and Performance</span>:
							Ensured scalability and performance to handle growing user
							traffic.
						</span>
					</div>
				</div>
			</div>

			{/* Conclusion */}
			<div className="block justify-center mt-2 md:ml-[17rem] ml-8">
				<h1 className="font-semibold text-[20px]">Conclusion:</h1>
				<div className="md:w-[50rem] w-[22rem]">
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
			<div className="flex md:justify-end justify-center md:mr-[20rem] mr-0 mt-2">
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
		</section>
	);
};

export default CaseStudy1;
