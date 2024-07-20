import { VscDebugBreakpointLog } from "react-icons/vsc";
import { BsBoxArrowUpRight } from "react-icons/bs";
import promptopia from "../assets/promptopia.png";

const CaseStudy3 = () => {
	return (
		<section id="case-study">
			<div className="flex justify-center">
				<h1
					className="md:w-auto w-[350px] md:mt-2 mt-10 md:text-[18px] text-[17px] text-[#00000] 
					font-bold md:ml-0 ml-[3.5rem]"
				>
					Case Study: Promptopia
				</h1>
			</div>

			{/* Overview */}
			<div className="block justify-center mt-2 ml-[17rem]">
				<h1 className="md:font-semibold font-bold md:text-[20px] text-[18px] md:-ml-0 -ml-[15rem]">
					Overview:
				</h1>
				<div className="md:w-[47rem] w-[22rem] md:-ml-0 -ml-[15rem]">
					<span className="mt-1">
						Promptopia is an open-source AI prompting tool that showcases my
						expertise in web development and AI integration. By combining
						Next.js, MongoDB, and NextAuth, Promptopia offers a seamless
						platform for discovering, creating, and sharing creative prompts.
						This project highlights my ability to develop intuitive user
						interfaces and leverage modern technologies to deliver an engaging
						and dynamic user experience.
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
							<span className="font-bold">AI Integration</span>: Implementing AI
							to generate diverse and contextually relevant prompts posed
							challenges in ensuring accuracy and creativity.
						</span>{" "}
					</div>
					<br />
					<div className="flex -mt-5">
						<VscDebugBreakpointLog className="mt-1 w-7" />
						<span>
							<span className="font-bold">User Authentication</span> :
							Developing a secure authentication system to protect user data and
							maintain privacy.
						</span>
					</div>
					<br />

					<div className="flex -mt-5">
						<VscDebugBreakpointLog className="mt-1 w-9" />
						<span>
							<span className="font-bold">Scalability</span>: Ensuring the
							platform can handle a growing user base and increasing data
							volumes without compromising performance.
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
							Next.js for its powerful features like server-side rendering and
							API routes, MongoDB for its flexible and scalable database
							solution, and NextAuth for secure authentication.
						</span>
					</div>
					<br />
					<div className="flex -mt-5">
						<VscDebugBreakpointLog className="mt-1 w-8" />
						<span>
							<span className="font-bold">AI-Powered Prompts </span> :
							Integrated AI to generate creative and varied prompts, providing
							users with endless inspiration.
						</span>
					</div>
					<br />
					<div className="flex -mt-5">
						<VscDebugBreakpointLog className="mt-1 w-8" />
						<span>
							<span className="font-bold">User-Centric Design </span> : Focused
							on a clean, intuitive interface that makes it easy for users to
							discover, create, and share prompts.
						</span>
					</div>
					<br />
					<div className="flex -mt-5">
						<VscDebugBreakpointLog className="mt-1 w-8" />
						<span>
							<span className="font-bold">Backend Integration </span> : Utilized
							MongoDB for efficient data storage and retrieval, and NextAuth to
							ensure secure user authentication.
						</span>
					</div>
					<br />
					<div className="flex -mt-5">
						<VscDebugBreakpointLog className="mt-1 w-8" />
						<span>
							<span className="font-bold">Testing and Optimization </span> :
							Conducted rigorous testing to identify and resolve performance
							issues, ensuring a smooth user experience.
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
						src={promptopia}
						alt="Promptopia"
						className="md:w-[45rem] w-[20rem] md:h-[20rem] h-[12rem]"
					/>
				</div>
				<div className="md:w-[48rem] w-[22rem] mt-3 ml-1">
					<div className="flex ">
						<VscDebugBreakpointLog className="mt-1 w-10" />
						<span>
							<span className="font-bold">Creative Inspiration</span>:
							Promptopia delivers a vast array of AI-generated prompts, sparking
							creativity and helping users overcome writer’s block.
						</span>
					</div>
					<br />
					<div className="flex -mt-5">
						<VscDebugBreakpointLog className="mt-1 w-8" />
						<span>
							<span className="font-bold"> Engaging User Interface</span>: The
							intuitive design encourages users to explore and interact with the
							platform, leading to increased engagement and satisfaction.
						</span>
					</div>
					<br />
					<div className="flex -mt-5">
						<VscDebugBreakpointLog className="mt-1 w-8" />
						<span>
							<span className="font-bold">Data Security</span>: Robust
							authentication and secure data storage protect user information
							and ensure privacy.
						</span>
					</div>
					<br />
					<div className="flex -mt-5">
						<VscDebugBreakpointLog className="mt-1 w-8" />{" "}
						<span>
							<span className="font-bold">Scalability</span> : The platform
							handles increased usage and data volumes efficiently, providing a
							seamless experience for a growing user base.
						</span>
					</div>
				</div>
			</div>

			{/* Conclusion */}
			<div className="block justify-center mt-2 md:ml-[17rem] ml-8">
				<h1 className="font-semibold text-[20px]">Conclusion:</h1>
				<div className="md:w-[50rem] w-[22rem]">
					<span className="mt-1">
						Conclusion: Promptopia exemplifies the successful integration of
						frontend and backend technologies to create a powerful and
						user-friendly AI prompting tool. By leveraging Next.js, MongoDB, and
						NextAuth, I demonstrated my skills in web development and AI
						integration. Promptopia stands as a testament to my ability to
						develop innovative and reliable web applications that meet the needs
						of modern users.
					</span>
				</div>
			</div>
			<div className="flex md:justify-end justify-center md:mr-[20rem] mr-0 mt-2">
				<button className="flex justify-center items-center w-[120px] h-[40px] font-medium rounded-md bg-black text-white">
					<a
						href="https://promptopia-peach-one.vercel.app/"
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

export default CaseStudy3;
