import { useState, useEffect } from "react";

export default function ThemeToggle() {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		if (isDark) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [isDark]);

	return (
		<button
			onClick={() => setIsDark((prev) => !prev)}
			className="px-3 py-2 rounded text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
		>
			{isDark ? "Dark" : "Light"}
		</button>
	);
}
