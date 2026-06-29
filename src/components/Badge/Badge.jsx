const base =
	"inline-flex items-center justify-center font-semibold rounded-full";

const variants = {
	primary: "bg-accent-100 text-accent-700",
	secondary: "bg-gray-100 text-gray-700",
	success: "bg-green-100 text-green-700",
	warning: "bg-yellow-100 text-yellow-700",
	danger: "bg-red-100 text-red-700",
};

const sizes = {
	sm: "text-xs px-2 py-0.5",
	md: "text-sm px-2.5 py-1",
	lg: "text-base px-3 py-1.5",
};

export default function Badge({ children, variant = "primary", size = "md" }) {
	const className = `${base} ${variants[variant]} ${sizes[size]}`;

	return <span className={className}>{children}</span>;
}
