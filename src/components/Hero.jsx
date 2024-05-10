import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import HeroImage from "../assets/home image.png";

const Hero = () => {
	return (
		<section id="home">
			<div className="flex md:flex-row flex-1 flex-col justify-evenly space-x-14 items-center border-b-2 border-[#e6e3e3b5]">
				{/* Left side */}
				<div className="flex justify-start md:mt-24 mt-16 -ml-10">
					<div className="flex flex-col">
						<p className=" text-[24px] uppercase font-normal">
							Hi, I&#39;m <span className="font-semibold">Moyomade.</span>{" "}
							<br />A <span className="font-semibold">Frontend Developer</span>
						</p>

						{/* Buttons */}
						<div className="mt-5">
							<button
								className="w-[150px] p-2 bg-black text-white rounded-tl-md
							rounded-bl-md"
							>
								<span className="text-[17px]">Got a project?</span>
							</button>
							<button
								className="w-[150px] p-2 bg-[#ffff] text-black rounded-tr-md
							rounded-br-md"
							>
								<span className="text-[17px]">Let&#39;s talk</span>
							</button>
						</div>

						{/* Icons */}
						<div className="flex space-x-4 text-[22px] mt-6 cursor-pointer">
							<a
								href="https://github.com/Moyo-Made"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaGithub />
							</a>
							<a
								href="https://www.linkedin.com/in/moyomade-adegbite/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaLinkedin />
							</a>

							<a
								href="http://twitter.com/moyomadee7"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaXTwitter />
							</a>
						</div>
					</div>
					{/* Right Side */}
				</div>
				<div className="md:mt-20 mt-8 md:pr-0 pr-14">
					<img src={HeroImage} alt="Home Image" width={320} height={320} />
				</div>
			</div>
		</section>
	);
};

export default Hero;
