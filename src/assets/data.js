import { AiFillCaretDown } from "react-icons/ai";

export const links = [
	{
		name: "Home",
		path: "/",
		cName: "nav__item",
	},
	{
		name: "Services",
		path: "/services",
		icon: <AiFillCaretDown className="icon" />,
		cName: "nav__item",
	},
	{
		name: "Product",
		path: "/product",
		cName: "nav__item",
	},
	{
		name: "Contact Us",
		path: "/contact",
		cName: "nav__item",
	},
];

export const menuItems = [
	{
		title: "Marketing",
		path: "/marketing",
		cName: "dropdown-link",
	},
	{
		title: "Consulting",
		path: "/consulting",
		cName: "dropdown-link",
	},
	{
		title: "Design",
		path: "/design",
		cName: "dropdown-link",
	},
	{
		title: "Development",
		path: "/development",
		cName: "dropdown-link",
	},
];
