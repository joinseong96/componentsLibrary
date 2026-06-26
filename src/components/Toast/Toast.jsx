import { useEffect } from "react";

export default function Toast({
	message,
	type = "info",
	duration = 3000,
	onClose,
}) {
	useEffect(() => {
		const timer = setTimeout(() => {
			onClose();
		}, duration);

		return () => clearTimeout(timer);
	}, [duration, onClose]);

	const types = {
		info: "bg-blue-500",
		success: "bg-green-500",
		warning: "bg-yellow-500",
		error: "bg-red-500",
	};
	return (
		<div
			className={`${types[type]} text-white px-4 py-3 rounded shadow-lg flex items-center gap-3`}
		>
			<span className="text-sm">{message}</span>
			<button
				onClick={onClose}
				className="text-white/80 hover:text-white text-sm font-bold cursor-pointer"
			>
				✕
			</button>
		</div>
	);
}
