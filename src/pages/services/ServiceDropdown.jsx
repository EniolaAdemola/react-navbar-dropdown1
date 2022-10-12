import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { menuItems } from "../../assets/data";
import "./serviceDropdown.scss";

const ServiceDropdown = () => {
	const [dropdown, setDropdown] = useState(false);

	return (
		<div>
			<ul
				className={dropdown ? "service__submenu clicked" : "service__submenu"}
				onClick={() => setDropdown(!dropdown)}
			>
				{menuItems.map(({ title, path, cName }, index) => {
					return (
						<li key={index}>
							<NavLink to={path} onClick={() => setDropdown(!false)}>
								{title}
							</NavLink>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ServiceDropdown;
