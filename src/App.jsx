import Button from "./components/Button/Button";
import Badge from "./components/Badge/Badge";

export default function App() {
	return (
		<div className="p-10 flex flex-col gap-8">
			{/* Button */}
			<div className="flex gap-3">
				<Button variant="primary">Primary</Button>
				<Button variant="secondary">Secondary</Button>
				<Button variant="outline">Outline</Button>
				<Button variant="danger">Danger</Button>
			</div>

			{/* Badge */}
			<div className="flex gap-3 items-center">
				<Badge variant="primary">Primary</Badge>
				<Badge variant="secondary">Secondary</Badge>
				<Badge variant="success">Success</Badge>
				<Badge variant="warning">Warning</Badge>
				<Badge variant="danger">Danger</Badge>
			</div>
		</div>
	);
}
