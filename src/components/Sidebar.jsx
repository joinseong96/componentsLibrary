import { NavLink } from "react-router-dom";

const menuItems = [
	{ path: "/", label: "Home" },
	{ path: "/button", label: "Button" },
	{ path: "/badge", label: "Badge" },
	{ path: "/input", label: "Input" },
	{ path: "/toast", label: "Toast" },
	{ path: "/modal", label: "Modal" },
	{ path: "/tab", label: "Tab" },
	{ path: "/dropdown", label: "Dropdown" },
];

export default function Sidebar() {
	return (
		<nav className="w-48 h-screen border-r border-gray-200 p-4 flex flex-col gap-1">
			<h2 className="text-sm font-bold text-gray-400 mb-3 px-2">COMPONENTS</h2>
			{menuItems.map((item) => (
				<NavLink
					key={item.path}
					to={item.path}
					className={({ isActive }) =>
						`px-3 py-2 rounded text-sm font-medium transition-colors ${
							isActive
								? "bg-blue-50 text-blue-600"
								: "text-gray-600 hover:bg-gray-100"
						}`
					}
				>
					{item.label}
				</NavLink>
			))}
		</nav>
	);
}
