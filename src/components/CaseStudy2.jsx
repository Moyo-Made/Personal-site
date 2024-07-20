import { VscDebugBreakpointLog } from "react-icons/vsc";
import { BsBoxArrowUpRight } from "react-icons/bs";
import chatappImage from "../assets/chat.png";

const CaseStudy2 = () => {
	return (
		<section id="case-study">
			<div className="flex justify-center">
				<h1
					className="md:w-auto w-[350px] md:mt-4 mt-10 md:text-[18px] text-[17px] text-[#00000] 
					font-bold md:ml-0 ml-[3.5rem]"
				>
					Case Study 3: Real Time Application
				</h1>
			</div>

			{/* Overview */}
			<div className="block justify-center mt-2 ml-[17rem]">
				<h1 className="md:font-semibold font-bold md:text-[20px] text-[18px] md:-ml-0 -ml-[15rem]">
					Overview:
				</h1>
				<div className="md:w-[47rem] w-[22rem] md:-ml-0 -ml-[15rem]">
					<span className="mt-1">
						The Real-Time Chat App is a testament to my expertise in web
						development, showcasing the seamless integration of React and
						Firebase to create a robust messaging platform. Designed with a
						focus on usability and performance, the project highlights my
						ability to combine frontend technologies with real-time database
						features to deliver a smooth and secure messaging experience.
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
						<VscDebugBreakpointLog className="mt-1 w-10" />{" "}
						<span>
							<span className="font-bold">Real-Time Synchronization</span>:
							Implementing real-time messaging functionality presented
							challenges in ensuring that messages are delivered instantly and
							synchronized across all users devices.
						</span>{" "}
					</div>
					<br />
					<div className="flex -mt-5">
						<VscDebugBreakpointLog className="mt-1 w-7" />
						<span>
							<span className="font-bold">User Authentication</span> : Designing
							a robust authentication system to secure user data and prevent
							unauthorized access to the chat application.
						</span>
					</div>
					<br />

					<div className="flex -mt-5">
						<VscDebugBreakpointLog className="mt-1 w-9" />
						<span>
							<span className="font-bold">Performance</span>: Optimizing the
							application&#39;s performance to deliver a smooth messaging
							experience, especially when handling large volumes of data or
							during peak usage periods.
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
						<VscDebugBreakpointLog className="mt-1 w-10" />
						<span>
							<span className="font-bold">Technology Selection</span>: Chose
							React for its component-based architecture, facilitating the
							development of reusable UI components, and Firebase for its
							real-time database capabilities and secure backend services.
						</span>
					</div>
					<br />
					<div className="flex -mt-5">
						<VscDebugBreakpointLog className="mt-1 w-8" />
						<span>
							<span className="font-bold">User-Centric Design </span> :
							Prioritized user experience by designing a clean and intuitive
							interface that makes it easy for users to send and receive
							messages.
						</span>
					</div>
					<br />
					<div className="flex -mt-5">
						<VscDebugBreakpointLog className="mt-1 w-8" />
						<span>
							<span className="font-bold">Backend Integration </span> :
							Integrated Firebase&#39;s authentication services to ensure secure
							user login and implemented real-time database features for instant
							message delivery.
						</span>
					</div>
					<br />
					<div className="flex -mt-5">
						<VscDebugBreakpointLog className="mt-1 w-8" />
						<span>
							<span className="font-bold">Testing and Optimization </span> :
							Conducted thorough testing to identify and address performance
							bottlenecks, optimizing code and resource usage for improved
							responsiveness.
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
						src={chatappImage}
						alt="Chat app image"
						className="md:w-[45rem] w-[20rem] md:h-[20rem] h-[12rem]"
					/>
				</div>
				<div className="md:w-[48rem] w-[22rem] mt-3 ml-1">
					<div className="flex ">
						<VscDebugBreakpointLog className="mt-1 w-10" />
						<span>
							<span className="font-bold">Smooth Messaging Experience</span>:
							The Real-Time Chat App delivers on its promise of smooth
							messaging, with messages being delivered instantly and
							synchronized across all devices in real-time.
						</span>
					</div>
					<br />
					<div className="flex -mt-5">
						<VscDebugBreakpointLog className="mt-1 w-8" />
						<span>
							<span className="font-bold"> User Engagement</span>: The intuitive
							user interface encourages active engagement, leading to increased
							usage and interaction among users.
						</span>
					</div>
					<br />
					<div className="flex -mt-5">
						<VscDebugBreakpointLog className="mt-1 w-8" />
						<span>
							<span className="font-bold">Data Security</span>: Leveraging
							Firebase&#39;s secure backend services ensures that user data is
							protected and only accessible to authorized users.
						</span>
					</div>
					<br />
					<div className="flex -mt-5">
						<VscDebugBreakpointLog className="mt-1 w-8" />{" "}
						<span>
							<span className="font-bold"> Performance</span> : Through careful
							optimization, the application delivers excellent performance even
							under heavy loads, providing a seamless messaging experience for
							users.
						</span>
					</div>
				</div>
			</div>

			{/* Conclusion */}
			<div className="block justify-center mt-2 md:ml-[17rem] ml-8">
				<h1 className="font-semibold text-[20px]">Conclusion:</h1>
				<div className="md:w-[50rem] w-[22rem]">
					<span className="mt-1">
						The Real-Time Chat App represents a successful integration of
						frontend and backend technologies to create a robust and
						user-friendly messaging platform. By leveraging React and Firebase,
						I have demonstrated my skills in web development, delivering a
						solution that prioritizes usability, security, and performance.
						Moving forward, the Real-Time Chat App serves as a testament to my
						ability to create innovative and reliable web applications that meet
						the needs of modern users.
					</span>
				</div>
			</div>
			<div className="flex md:justify-end justify-center md:mr-[20rem] mr-0 mt-2">
				<button className="flex justify-center items-center w-[120px] h-[40px] font-medium rounded-md bg-black text-white">
					<a
						href="https://meetup7.netlify.app"
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

export default CaseStudy2;
