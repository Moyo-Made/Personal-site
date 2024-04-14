const About = () => {
	return (
		<section id="about" className="border-b-2 border-[#e6e3e3b5]">
			<div className="flex justify-center items-center">
				<p className="mt-3 font-bold text-[20px]">About Me</p>
			</div>
			<div className="flex flex-1 md:flex-row flex-col justify-around mt-6 ml-12">
				{/* Left section */}
				<div className="md:ml-0 sm:ml-[13rem] sm:justify-center">
					<p className="text-[18px] leading-8">Moyomade Adegbite</p>
					<span className="font-semibold text-[25px] leading-8">
						Bridging Creativity <br /> With Code
					</span>
				</div>

				{/* Right section */}
				<div className="sm:flex sm:justify-center md:mt-0 mt-4">
					<div className="block">
						<p className="font-medium text-[18px] md:max-w-[470px] max-w-[300px]">
							I&#39;m a skilled front-end developer with a flare for creating
							beautiful and well structured web solutions that scales using
							React and other front-end technologies. I&#39;m flexible and can
							pick up new technologies quickly to create solutions and also
							broaden my knowledge.
						</p>

						<div className="flex md:space-x-20 space-x-5 mt-3">
							<div className="block">
								<p className="text-red-500 uppercase">Experience</p>
								<span className="text-[17px] font-semibold">2+ Years</span>
							</div>

							<div className="block">
								<p className="text-red-500 uppercase">Projects</p>
								<span className="text-[17px] font-semibold">25+ Projects</span>
							</div>

							<div className="block">
								<p className="text-red-500 uppercase">Clients</p>
								<span className="text-[17px] font-semibold">10+ Clients</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="md:flex justify-center items-center mt-10 pr-20 sm:flex hidden">
				<button className="bg-white text-black py-1 md:w-60 w-32">
					<span className="uppercase md:text-[15px] text-[12px] font-semibold">
						2+ <br /> Years of Experience
					</span>
				</button>

				<button className="bg-black text-white py-1 md:w-60 w-32">
					<span className="uppercase md:text-[15px] text-[12px] font-semibold">
						25+ <br /> Projects Completed
					</span>
				</button>

				<button className="bg-white text-black py-1 md:w-60 w-32">
					<span className="uppercase md:text-[15px] text-[12px] font-semibold">
						10+ <br /> Happy Clients
					</span>
				</button>
			</div>
		</section>
	);
};

export default About;
