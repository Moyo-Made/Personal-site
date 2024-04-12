import { navLinks } from "../constants";
import logo from "/logo.png";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import { useState } from "react";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<nav className="w-full justify-evenly items-center flex py-4 shadow-md">
			<div className="flex items-center md:ml-40">
				<img src={logo} alt="logo" className="w-[30px] h-[20px]  ml-3" />
				<span className="font-medium text-[18px] ml-2">Moyomade</span>
			</div>

			<ul className="list-none sm:flex hidden justify-center items-center flex-1 ml-64">
				{navLinks.map((navLink, index) => (
					<li
						className={`text-[#262424] font-poppins font-medium hover:font-bold transition-all
								duration-500 ease-in cursor-pointer text-[16px] ${
							index === navLinks.length - 1 ? "mr-0" : "mr-10"
						} mr-10`}
						key={navLink.id}
					>
						<a href={`#${navLink.id}`}>{navLink.title}</a>
					</li>
				))}
			</ul>

			{/* Smaller screens */}
			<div className="sm:hidden flex flex-1 justify-end items-center">
				<img
					src={toggle ? close : menu}
					alt="toggle menu"
					className="bg-black w-[22px] h-[22px] object-contain mr-10 "
					onClick={() => setToggle((prev) => !prev)}
				/>
				{/* Menu */}
				<div
					className={`${
						toggle ? "flex" : "hidden"
					} p-6 bg-[#000000db] absolute
				top-20 right-0 mx-4 my-1 min-w-[120px] rounded-xl`}
				>
					<ul
						className="list-none flex flex-col
						justify-end items-center flex-1"
					>
						{navLinks.map((navLink, index) => (
							<li
								key={navLink.id}
								className={`font-poppins font-normal hover:font-bold cursor-pointer
								text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mb-4"} text-white mb-4`}
							>
								<a href={`#${navLink.id}`}>{navLink.title}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
