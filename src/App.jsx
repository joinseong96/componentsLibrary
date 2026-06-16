import Button from "./components/Button/Button";

export default function App() {
	return (
		<div className="p-10 flex flex-col gap-4">
			<div className="flex gap-3">
				<Button variant="primary">Primary</Button>
				<Button variant="secondary">Secondary</Button>
				<Button variant="outline">Outline</Button>
				<Button variant="danger">Danger</Button>
			</div>

			<div className="flex gap-3 items-center">
				<Button size="sm">Small</Button>
				<Button size="md">Medium</Button>
				<Button size="lg">Large</Button>
			</div>

			<div className="flex gap-3">
				<Button disabled>Disabled</Button>
			</div>
		</div>
	);
}
