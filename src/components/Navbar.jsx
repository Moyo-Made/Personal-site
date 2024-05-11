import { navLinks } from "../constants";
import logo from "/logo.png";
import close from "../assets/close.png";
import menu from "../assets/menu.svg";
import { useEffect, useState, useRef } from "react";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	const [scrolling, setScrolling] = useState(false);
	const menuRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScrolling(true);
			} else {
				setScrolling(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		const handleClickOutsideMenu = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setToggle(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutsideMenu);

		return () => {
			document.removeEventListener("mousedown", handleClickOutsideMenu);
		};
	}, []);

	return (
		<nav
			className={`flex-1 fixed top-0 z-10 w-full bg-white justify-evenly items-center flex py-4 shadow-md ${
				scrolling ? "bg-transparent" : "bg-opacity-100"
			} transition-all duration-300`}
		>
			<div className="flex items-center md:ml-40">
				<a href="#home">
					<div className="flex">
						<img src={logo} alt="logo" className="w-[30px] h-[20px] ml-3" />
						<span className="font-medium text-[18px] ml-2 -mt-1">Moyomade</span>
					</div>
				</a>
			</div>

			<ul className="list-none sm:flex hidden justify-center items-center flex-1 ml-64">
				{navLinks.map((navLink, index) => (
					<li
						className={`text-[#262424] font-poppins font-medium hover:font-bold transition-all duration-500 ease-in cursor-pointer text-[16px] ${
							index === navLinks.length - 1 ? "mr-0" : "mr-10"
						} mr-10`}
						key={navLink.id}
					>
						<a href={`#${navLink.id}`} className="scroll-link">
							{navLink.title}
						</a>
					</li>
				))}
			</ul>

			{/* Smaller screens */}
			<div className="sm:hidden flex flex-1 justify-end items-center">
				<img
					src={toggle ? close : menu}
					alt="toggle menu"
					className="w-[22px] h-[22px] object-contain mr-10 "
					onClick={() => setToggle((prev) => !prev)}
				/>
				{/* Menu */}
				<div
					ref={menuRef}
					className={`${
						toggle ? "flex" : "hidden"
					} p-6 bg-[#000000db] absolute top-20 right-0 mx-4 my-1 min-w-[120px] rounded-xl`}
				>
					<ul className="list-none flex flex-col justify-end items-center flex-1">
						{navLinks.map((navLink, index) => (
							<li
								key={navLink.id}
								className={`font-poppins font-normal hover:font-bold cursor-pointer text-[16px] ${
									index === navLinks.length - 1 ? "mr-0" : "mb-4"
								} text-white mb-4`}
							>
								<a href={`#${navLink.id}`} className="scroll-link">
									{navLink.title}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
