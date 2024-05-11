import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

const Services = () => {
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
			id="section"
		>
			<div className="">
				<div className="text-center">
					<h3 className="md:mt-8 -mt-10 font-bold text-[22px]">Services</h3>
					<span className="text-[#7d7979fb]">What I Offer</span>
				</div>
				<div className="flex md:flex-row flex-col justify-center items-center gap-10 mt-8 text-center ">
					<div className="md:w-[380px] w-[320px] h-[210px] border border-black rounded-md">
						<h3 className="mt-4 font-bold md:text-[20px] text-[19px]">
							User-Interface (UI) Development
						</h3>
						<p className="font-normal md:text-[16.5px] text-[15.5px] md:max-w-[350px] max-w-[280px] mt-1 md:ml-3 ml-5">
							I focus on designing and building the visual elements that users
							interact with on a website or application. It involves creating
							layouts, styling elements, and ensuring a user-friendly and
							visually appealing interface.
						</p>
					</div>
					<div className="md:w-[380px] w-[320px] h-[210px] bg-black text-[#d6d6d6] rounded-md md:mt-auto -mt-7">
						<h3 className="mt-4 font-bold md:text-[20px] text-[19px]">
							Single Page Applications (SPAs)
						</h3>
						<p className="font-normal md:text-[16.5px] text-[15.5px] md:max-w-[350px] max-w-[280px] mt-1 md:ml-3 ml-5">
							I specialize in building Single-Page Applications (SPAs) using
							cutting-edge frameworks like React or Vue.js. My focus lies on
							crafting dynamic and responsive UIs that keep users engaged.
						</p>
					</div>
				</div>

				<div className="flex md:flex-row flex-col justify-center items-center gap-10 mt-8 text-center">
					<div className="md:w-[380px] w-[320px] h-[210px]  bg-black text-[#d6d6d6] rounded-md md:mt-auto -mt-6">
						<h3 className="mt-4 font-bold md:text-[20px] text-[19px]">
							Responsive Web Development
						</h3>
						<p className="font-normal md:text-[16.5px] text-[15.5px] md:max-w-[350px] max-w-[280px] mt-1 md:ml-3 ml-5">
							I deliver websites that seamlessly adapt to any device. With
							expertise in HTML, CSS, and JavaScript, I create visually stunning
							and highly functional sites, ensuring an exceptional user
							experience across all platforms.
						</p>
					</div>
					<div className="md:w-[380px] w-[320px] h-[210px] border border-black rounded-md md:mt-auto -mt-7">
						<h3 className="mt-4 font-bold md:text-[20px] text-[19px]">
							Performance Optimization
						</h3>
						<p className="font-normal md:text-[16.5px] text-[15.5px] md:max-w-[350px] max-w-[280px] mt-1 md:ml-3 ml-5 ">
							I focus on optimizing the website&#39;s loading speed and overall
							performance. It involves techniques like image optimization, code
							minification, and leveraging caching mechanisms.
						</p>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Services;
