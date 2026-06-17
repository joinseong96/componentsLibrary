export default function Button({
	children,
	variant = "primary",
	size = "md",
	disabled = false,
	onClick,
}) {
	const base =
		"inline-flex items-center justify-center font-semibold rounded transition-colors cursor-pointer";

	const variants = {
		primary: "bg-blue-500 text-white hover:bg-blue-600",
		secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
		outline: "border border-blue-500 text-blue-500 hover:bg-blue-50",
		danger: "bg-red-500 text-white hover:bg-red-600",
	};

	const sizes = {
		sm: "text-sm px-3 py-1.5",
		md: "text-base px-4 py-2",
		lg: "text-lg px-6 py-3",
	};

	const disabledStyle = "opacity-50 cursor-not-allowed";
}
