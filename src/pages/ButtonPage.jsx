import Button from "../components/Button/Button";

export default function ButtonPage() {
	return (
		<div className="p-10 flex flex-col gap-10 max-w-2xl">
			<div>
				<h1 className="text-2xl font-bold text-gray-800 dark:text-gray-300 mb-2">
					Button
				</h1>
				<p className="text-gray-500 dark:text-gray-100 text-sm">
					버튼 컴포넌트는 variant, size, disabled 상태를 지원합니다.
				</p>
			</div>

			<section>
				<h2 className="text-sm font-semibold text-gray-600 dark:text-gray-100 mb-3">
					Variant
				</h2>
				<div className="flex gap-3">
					<Button variant="primary">Primary</Button>
					<Button variant="secondary">Secondary</Button>
					<Button variant="outline">Outline</Button>
					<Button variant="danger">Danger</Button>
				</div>
			</section>

			<section>
				<h2 className="text-sm font-semibold text-gray-600 dark:text-gray-100 mb-3">
					Size
				</h2>
				<div className="flex gap-3 items-center">
					<Button size="sm">Small</Button>
					<Button size="md">Medium</Button>
					<Button size="lg">Large</Button>
				</div>
			</section>

			<section>
				<h2 className="text-sm font-semibold text-gray-600 dark:text-gray-100 mb-3">
					Disabled
				</h2>
				<div className="flex gap-3">
					<Button disabled>Disabled</Button>
				</div>
			</section>

			<section>
				<h2 className="text-sm font-semibold text-gray-600 dark:text-gray-100 mb-3">
					Loading
				</h2>
				<div className="flex gap-3">
					<Button loading>Loading</Button>
				</div>
			</section>
		</div>
	);
}
