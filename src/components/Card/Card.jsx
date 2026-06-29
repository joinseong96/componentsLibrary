export default function Card({ title, description, image, children, footer }) {
	return (
		<div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow max-x-sm">
			{image && (
				<img src={image} alt={title} className="w-full h-40 object-cover" />
			)}

			<div className="p-5">
				{title && (
					<h3 className="text-lg font-bold text-gray-800 dark:text-gray-300 mb-1">
						{title}
					</h3>
				)}
				{description && (
					<p className="text-sm text-gray-500 dark:text-gray-100 mb-3">
						{description}
					</p>
				)}

				{children}
			</div>

			{footer && (
				<div className="px-5 py-3 border-t border-gray-100">{footer}</div>
			)}
		</div>
	);
}
