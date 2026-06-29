const base =
	"w-full rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 transition-colors text-gray-800 dark:text-gray-300 placeholder:text-gray-800 dark:placeholder:text-gray-300";

export default function Input({
	label,
	placeholder = "",
	value,
	onChange,
	error = "",
	disabled = false,
	type = "text",
}) {
	const stateStyle = error
		? "border-red-400 focus:ring-red-300"
		: "border-gray-300 focus:ring-accent-300";

	const disabledStyle = disabled
		? "bg-gray-100 cursor-not-allowed opacity-70"
		: "";

	return (
		<div className="flex flex-col gap-1 w-full max-w-sm">
			{label && (
				<label className="text-sm font-medium text-gray-700 dark:text-gray-300">
					{label}
				</label>
			)}
			<input
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				disabled={disabled}
				className={`${base} ${stateStyle} ${disabledStyle}`}
			/>
			{error && <p className="text-xs text-red-500">{error}</p>}
		</div>
	);
}
