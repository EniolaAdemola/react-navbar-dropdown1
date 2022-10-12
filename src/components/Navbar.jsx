import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { links } from "../assets/data";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import "./navbar.scss";
import ServiceDropdown from "../pages/services/ServiceDropdown";

const Navbar = () => {
	const [isNav, setIsNav] = useState(false);
	const [dropdown, setDropdown] = useState(true);

	const handleNavToggle = () => {
		return setIsNav((prevValue) => {
			return !prevValue;
		});
	};

	return (
		<nav>
			<div className="container nav__container">
				<Link className="logo" to="/">
					DAVEWORLD
				</Link>
				<div className={`nav__links ${isNav ? "show__nav" : "hide__nav"}`}>
					<ul className={`nav__link`}>
						{links.map(({ name, path, icon, cName }, index) => {
							if (name === "Services") {
								return (
									<li
										key={index}
										className={cName}
										onMouseEnter={() => setDropdown(true)}
										onMouseLeave={() => setDropdown(false)}
									>
										<NavLink to={path} className="services">
											{name}
											{icon ? icon : ""}
										</NavLink>
										{dropdown && <ServiceDropdown />}
									</li>
								);
							}
							return (
								<li key={index} className={cName}>
									<NavLink to={path} onClick={handleNavToggle}>
										{name}
										{icon ? icon : ""}
									</NavLink>
								</li>
							);
						})}
					</ul>
					<div className="nav__register ">
						<button className="btn">Log in</button>
						<button className="btn">Sign up</button>
					</div>
				</div>
				<button onClick={handleNavToggle} className="nav__toggle-btn">
					{isNav ? <MdOutlineClose /> : <FaBars />}
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
