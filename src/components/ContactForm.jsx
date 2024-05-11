import { useState } from "react";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await fetch("https://formspree.io/f/mnqewwdn", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		});
		// Clear input fields after form submission
		if (response.ok) {
			// Reset formData to empty values
			const emptyFormData = Object.keys(formData).reduce((acc, key) => {
				acc[key] = "";
				return acc;
			}, {});
			setFormData(emptyFormData);
			alert("Form submitted successfully");
		} else {
			// Handle form submission error
			alert("Form submission failed.");
		}
	};
	return (
		<section id="contact">
			<span className="flex justify-center font-bold mt-10 text-[20px]">
				Contact Me
			</span>
			<div className="flex md:flex-row flex-col flex-1 justify-evenly">
				{/* Left side */}
				<div className="md:mt-10 mt-5 leading-10 md:ml-28 ml-16">
					<p className="font-bold text-[30px]">Let&#39;s chat.</p>
					<p className="font-bold text-[30px] w-[20rem]">
						Tell me about your project.
					</p>
					<span className="font-semibold text-[#7d7979fb]">
						Let&#39;s create something together
					</span>
				</div>

				{/* Right side */}
				<form onSubmit={handleSubmit}>
					<div
						className="flex flex-col space-y-4 md:mt-10 mt-5 bg-[#ffff] shadow-xl md:w-[27rem] w-[20rem] 
						h-[19rem] rounded-lg md:mr-16 ml-7"
					>
						<div className="">
							<p className="font-semibold text-[17px] mt-3 ml-7">
								Send me a message
							</p>
						</div>
						<input
							className="md:w-[23rem] w-[16rem] h-[40px] border rounded-md border-gray-500 focus:border-black pl-3 ml-7"
							type="text"
							name="name"
							placeholder="Your Name"
							value={formData.name}
							onChange={handleChange}
						/>
						<input
							className="md:w-[23rem] w-[16rem] h-[40px] border rounded-md border-gray-500 focus:border-black pl-3 ml-7"
							type="email"
							name="email"
							placeholder="Your Email"
							value={formData.email}
							onChange={handleChange}
						/>
						<textarea
							className="md:w-[23rem] w-[16rem] h-[80px] border rounded-md border-gray-500 focus:border-black pl-3 ml-7 mb-10"
							name="message"
							placeholder="Your Message"
							value={formData.message}
							onChange={handleChange}
						/>
						<button
							type="submit"
							className="bg-black rounded-md text-white w-28 h-9 text-[14px] md:ml-[17.5rem] ml-[11rem]"
						>
							Send message
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};
export default ContactForm;
