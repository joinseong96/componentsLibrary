import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const menuItems = [
	{ path: "/", label: "Home" },
	{ path: "/button", label: "Button" },
	{ path: "/badge", label: "Badge" },
	{ path: "/input", label: "Input" },
	{ path: "/toast", label: "Toast" },
	{ path: "/modal", label: "Modal" },
	{ path: "/tab", label: "Tab" },
	{ path: "/dropdown", label: "Dropdown" },
	{ path: "/card", label: "Card" },
];

export default function Sidebar() {
	return (
		<nav className="w-48 h-screen border-r border-gray-200 dark:border-gray-800 p-4 flex flex-col gap-1 bg-white dark:bg-gray-900">
			<h2 className="text-sm font-bold text-gray-400 dark:text-gray-100 mb-3 px-2">
				COMPONENTS
			</h2>
			{menuItems.map((item) => (
				<NavLink
					key={item.path}
					to={item.path}
					className={({ isActive }) =>
						`px-3 py-2 rounded text-sm font-medium transition-colors ${
							isActive
								? "bg-accent-50 text-accent-600 dark:bg-accent-900 dark:text-accent-300"
								: "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
						}`
					}
				>
					{item.label}
				</NavLink>
			))}

			<div className="mt-auto">
				<ThemeToggle />
			</div>
		</nav>
	);
}
