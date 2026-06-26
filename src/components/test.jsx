import { useState, useRef, useEffect } from "react";

export default function Dropdown({
	placeholder = "선택하세요.",
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
	};

	return (
		<div>
			<button onClick={() => setIsOpen((prev) => !prev)}>
				{selected ? selected.label : placeholder}
			</button>

			{isOpen && (
				<ul>
					{options.map((option) => (
						<li key={option.value} onClick={() => handleSelect(option)}>
							{option.label}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
