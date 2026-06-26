import Dropdown from "../components/Dropdown/Dropdown";

export default function DropdownPage() {
	const fruits = [
		{ value: "apple", label: "사과" },
		{ value: "banana", label: "바나나" },
		{ value: "grape", label: "포도" },
	];

	return (
		<div className="p-10 flex flex-col gap-10 max-w-2xl">
			<div>
				<h1 className="text-2xl font-bold text-gray-800 mb-2">Dropdown</h1>
				<p className="text-gray-500 text-sm">
					클릭하면 옵션이 펼쳐지고, 바깥을 클릭하면 닫히는 컴포넌트입니다.
				</p>
			</div>

			<Dropdown
				placeholder="과일을 선택하세요"
				options={fruits}
				onSelect={(option) => console.log("선택됨:", option)}
			/>
		</div>
	);
}
