import { AiFillCaretDown } from "react-icons/ai";

export const links = [
	{
		name: "Home",
		path: "/",
		cName: "home",
	},
	{
		name: "Services",
		path: "/services",
		icon: <AiFillCaretDown className="icon" />,
		cName: "services",
	},
	{
		name: "Product",
		path: "/product",
		cName: "product",
	},
	{
		name: "Contact Us",
		path: "/contact",
		cName: "contact",
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
