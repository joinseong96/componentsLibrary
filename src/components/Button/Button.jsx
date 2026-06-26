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

export default function Button({
	children,
	variant = "primary",
	size = "md",
	disabled = false,
	loading = false,
	onClick,
	// props 구조분해
	// children props 값은 Button 컴포넌트 안에 텍스트가 app에서 불려와 질 때 같은 스타일의 버튼에서 안에 내용만 다르게 사용되게끔 해준다
	// = 뒤에 값은 default 값 지정 Button 컴포넌트를 사용할 때 variant나 size를 안 넘기면 기본적으로 해당 값으로 사용
}) {
	const isDisabled = disabled || loading;

	const className = `${base} ${variants[variant]} ${sizes[size]} ${isDisabled ? disabledStyle : ""}`;

	return (
		<button className={className} disabled={isDisabled} onClick={onClick}>
			{loading && (
				<span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
			)}
			{children}
		</button>
	);
}
