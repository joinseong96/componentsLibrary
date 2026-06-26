import Badge from "../components/Badge/Badge";

export default function BadgePage() {
	return (
		<div className="p-10 flex flex-col gap-10 max-w-2xl">
			<div>
				<h1 className="text-2xl font-bold text-gray-800 mb-2">Badge</h1>
				<p className="text-gray-500 text-sm">
					상태나 카테고리를 나타내는 작은 라벨입니다.
				</p>
			</div>

			<section>
				<h2 className="text-sm font-semibold text-gray-600 mb-3">Variant</h2>
				<div className="flex gap-3 items-center">
					<Badge variant="primary">Primary</Badge>
					<Badge variant="secondary">Secondary</Badge>
					<Badge variant="success">Success</Badge>
					<Badge variant="warning">Warning</Badge>
					<Badge variant="danger">Danger</Badge>
				</div>
			</section>

			<section>
				<h2 className="text-sm font-semibold text-gray-600 mb-3">Size</h2>
				<div className="flex gap-3 items-center">
					<Badge size="sm">Small</Badge>
					<Badge size="md">Medium</Badge>
					<Badge size="lg">Large</Badge>
				</div>
			</section>
		</div>
	);
}
