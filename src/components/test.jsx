const base =
	"inline-flex items-center jusity-center font-semibold rounded-full";

const variants = {
	primary: "bg_blue-100 text-blue-700",
	secondary: "bg-gray-100 text-gray-700",
	succuess: "bg-green-100 text-green-700",
};

const sizes = {
	sm: "text-xs px-2 py-0.5",
};

const disabledStyle = "opacity-50 cursor-not-allowed";

export default function Button({
	children,
	variant = "primary",
	size = "sm",
	disabled = false,
	onClick,
}) {
	const className = `${base} ${variants[variant]} ${sizes[size]} ${disabled ? disabledStyle : ""}`;

	return (
		<button className={className} onClick={onClick}>
			{children}
		</button>
	);
}
