import { useState } from "react";

export default function Tab({ tabs }) {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className="w-full max-w-md">
			<div className="flex border-b border-gray-200">
				{tabs.map((tab, index) => (
					<button
						key={tab.label}
						onClick={() => setActiveIndex(index)}
						className={`px-4 py-2 text-sm font-medium cursor-pointer transition-colors ${
							activeIndex === index
								? "text-blue-500 border-b-2 border-blue-500"
								: "text-gray-500 hover:text-gray-700"
						}`}
					>
						{tab.label}
					</button>
				))}
			</div>
			<div className="p-4 text-sm text-gray-600">
				{tabs[activeIndex].content}
			</div>
		</div>
	);
}
