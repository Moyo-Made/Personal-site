import { BsFillPatchCheckFill } from "react-icons/bs";

const Skills = () => {
	return (
		<section id="skills">
			<div className="flex flex-col justify-center items-center">
				<p className="mt-6 font-bold text-[20px]">My Tech Stacks</p>
				<div
					className="grid justify-center items-center grid-cols-2 mt-4
				 	bg-[#000000d9] text-[17px] text-white font-medium 
				 	rounded-[2rem] md:w-[23rem] w-[20rem] h-[18rem]"
				>
					<div className="flex justify-start items-center ml-10">
						<BsFillPatchCheckFill className="text-blue-500 mr-2" />
						<span>JavaScript</span>
					</div>
					<div className="flex justify-start items-center ml-6">
						<BsFillPatchCheckFill className="text-blue-500 mr-2" />
						<span>React</span>
					</div>
					<div className="flex justify-start items-center ml-10">
						<BsFillPatchCheckFill className="text-blue-500 mr-2" />
						<span>Vue.js</span>
					</div>
					<div className="flex justify-start items-center ml-6">
						<BsFillPatchCheckFill className="text-blue-500 mr-2" />
						<span>HTML</span>
					</div>
					<div className="flex justify-start items-center ml-10">
						<BsFillPatchCheckFill className="text-blue-500 mr-2" />
						<span>CSS</span>
					</div>
					<div className="flex justify-start items-center ml-6">
						<BsFillPatchCheckFill className="text-blue-500 mr-2" />
						<span>Tailwind CSS</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
