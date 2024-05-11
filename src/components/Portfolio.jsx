import { BsBoxArrowUpRight } from "react-icons/bs";
import { data } from "../constants/data";
import CaseStudy from "../assets/file-case.png";
import { Link } from "react-router-dom";
import Portfolio2 from "./Portfolio2";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

const Portfolio = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.33 1"],
	});
	const scaleProgress = useTransform(scrollYProgress, [0, 0.7], [0.8, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 0.7], [0.6, 1]);
	return (
		<motion.div
			ref={ref}
			style={{
				scale: scaleProgress,
				opacity: opacityProgress,
			}}
			id="work"
			className="border-b-2 border-[#e6e3e3b5]"
		>
			<div className="flex flex-1 justify-center items-center">
				<div className="text-center">
					<p className="md:-mt-16 -mt-48 font-bold text-[22px]">Portflio</p>
					<span
						className="
					"
					>
						My Recent Works
					</span>
					<div className="flex flex-col justify-around items-center mt-3">
						{data.map(({ id, image, title, desc, demo }) => {
							return (
								<div className="flex md:flex-row flex-col" key={id}>
									<div
										className="md:ml-auto ml-12 md:mt-10 mt-6 bg-[#7777] rounded-lg p-2 shadow-md 
										md:w-[320px] md:h-[200px] w-[270px] "
									>
										<img
											src={image}
											alt={title}
											className="md:w-[300px] h-[180px]"
										/>
									</div>
									<div className="md:mt-8 mt-4 md:ml-20">
										<h3 className=" md:text-start md:ml-10 font-bold md:text-[20px] text-[18px]">
											{title}
										</h3>
										<span className="md:max-w-[600px] max-w-[350px] mt-2 text-[17px] font-normal flex md:text-start md:ml-10 ml-2">
											{desc}
										</span>
										<div className="flex gap-4 mt-4 ml-10">
											<Link to="/case-study">
												<button
													className="flex justify-center items-center w-[120px] h-[40px] font-medium
											rounded-md bg-white text-black border border-black"
												>
													<img src={CaseStudy} className="mr-1 w-5 h-5" />
													Case Study
												</button>
											</Link>

											<button
												className="flex justify-center items-center w-[120px] h-[40px] font-medium
			 										rounded-md bg-black text-white "
											>
												<a
													href={demo}
													target="_blank"
													rel="noopener noreferrer"
												>
													Live Demo
												</a>
												<BsBoxArrowUpRight className="ml-1 w-[0.8rem]" />
											</button>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<Portfolio2 />
		</motion.div>
	);
};

export default Portfolio;
