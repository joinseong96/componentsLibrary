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
			className="w-full px-3 py-2 rounded text-xl bg-accent-700 dark:bg-accent-500 font-medium text-gray-100 dark:text-gray-300 hover:bg-gray-800 dark:hover:bg-gray-800 transition-colors cursor-pointer"
		>
			{isDark ? "Light" : "Dark"}
		</button>
	);
}
