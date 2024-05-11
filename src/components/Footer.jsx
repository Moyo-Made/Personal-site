import PropTypes from "prop-types";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Footer = ({ email }) => {
	const handleButtonClick = () => {
		window.location.href = `mailto:${email}`;
	};

	return (
		<div className="flex flex-1 justify-evenly bg-black text-white mt-3 p-6">
			<div className="">
				<span className="font-semibold">Moyomade</span>
				<br />
				<span className="text-[14px] text-[#cfcece]">All Rights Reserved, 2023.</span>
			</div>
			{/* Icons */}
			<div className=" ml-20 cursor-pointer">
				<span className="text-[15px]">Get to know me</span> <br />
				<div className="flex space-x-4 text-[22px] ">
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
						<FaTwitter />
					</a>
					<button onClick={handleButtonClick}>
						<CgMail />
					</button>
				</div>
			</div>

			<div></div>
		</div>
	);
};
Footer.propTypes = {
	email: PropTypes.string.isRequired,
};

export default Footer;
