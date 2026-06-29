import Tab from "../components/Tab/Tab";

export default function TabPage() {
	const tabs = [
		{ label: "소개", content: "이것은 소개 탭 내용입니다." },
		{ label: "상세정보", content: "이것은 상세정보 탭 내용입니다." },
		{ label: "리뷰", content: "이것은 리뷰 탭 내용입니다." },
	];

	return (
		<div className="p-10 flex flex-col gap-10 max-w-2xl">
			<div>
				<h1 className="text-2xl font-bold text-gray-800 dark:text-gray-300 mb-2">
					Tab
				</h1>
				<p className="text-gray-500 dark:text-gray-100 text-sm">
					클릭한 탭의 내용만 보여주는 컴포넌트입니다.
				</p>
			</div>

			<Tab tabs={tabs} />
		</div>
	);
}
