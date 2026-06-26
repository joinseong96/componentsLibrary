import { useState, useRef, useEffect } from "react";

export default function Dropdown({
	placeholder = "선택하세요",
	options = [],
	onSelect,
}) {
	const [isOpen, setIsOpen] = useState(false);
	const [selected, setSelected] = useState(null);
	const dropdownRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const handleSelect = (option) => {
		setSelected(option);
		setIsOpen(false);
		onSelect?.(option);
		// ?.는 "옵셔널 체이닝
		// onSelect라는 props가 존재할 때만 실행, 없으면(undefined) 에러 없이 스킵
		// App.jsx에서 onSelect를 안 넘겨도 에러가 안 나게 하는 안전장치
	};

	return (
		<div ref={dropdownRef} className="relative w-48">
			<button
				onClick={() => setIsOpen((prev) => !prev)}
				className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded text-sm bg-white hover:bg-gray-50 cursor-pointer"
			>
				<span>{selected ? selected.label : placeholder}</span>
				<span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
					▾
				</span>
			</button>

			{isOpen && (
				<ul className="absolute mt-1 w-full bg-white border border-grary-200 rounded shadow-lg z-10">
					{options.map((option) => (
						<li
							key={option.value}
							onClick={() => handleSelect(option)}
							className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
						>
							{option.label}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
