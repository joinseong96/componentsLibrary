export default function Modal({ isOpen, onClose, title, children }) {
	if (!isOpen) return null;

	return (
		<div
			className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
			onClick={onClose}
		>
			<div
				className="bg-white rounded-lg shadow-xl w-full max-w-md p-6"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="flex items-center justify-between mb-4">
					<h2 className="text-lg font-bold text-gray-800">{title}</h2>
					<button
						onClick={onClose}
						className="text-gray-400 hover:text-gray-600 cursor-pointer"
					>
						✕
					</button>
				</div>
				<div className="text-gray-600 text-sm">{children}</div>
			</div>
		</div>
	);
}
