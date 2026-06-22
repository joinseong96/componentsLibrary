import { useEffect } from "react";

export default function Toast({
	message,
	type = "info",
	isVisible,
	onClose,
	duration = 3000,
}) {
	useEffect(() => {
		if (!isVisible) return;

		const timer = setTimeout(() => {
			onClose();
		}, duration);

		return () => clearTimeout(timer);
	}, [isVisible, duration, onClose]);

	if (!isVisible) return null;

	const types = {
		info: "bg-blue-500",
		success: "bg-green-500",
		warning: "bg-yellow-500",
		error: "bg-red-500",
	};

	return (
		<div
			className={`fixed bottom-6 right-6 ${types[type]} text-white px-4 py-3 rounded shadow-lg flex items-center gap-3 animate-fade-in`}
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
