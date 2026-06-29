import { Link } from "react-router-dom";
import Card from "../components/Card/Card";

const components = [
	{
		path: "/button",
		name: "Button",
		description: "클릭 가능한 행동 유발 요소",
	},
	{
		path: "/badge",
		name: "Badge",
		description: "상태나 카테고리를 나타내는 라벨",
	},
	{ path: "/input", name: "Input", description: "사용자 입력을 받는 필드" },
	{ path: "/toast", name: "Toast", description: "잠시 나타나는 알림 메시지" },
	{ path: "/modal", name: "Modal", description: "화면 위에 띄우는 팝업창" },
	{ path: "/tab", name: "Tab", description: "콘텐츠를 전환해서 보여주는 탭" },
	{
		path: "/dropdown",
		name: "Dropdown",
		description: "옵션을 선택하는 드롭다운 메뉴",
	},
	{ path: "/card", name: "Card", description: "콘텐츠를 담는 박스형 레이아웃" },
];

export default function Home() {
	return (
		<div className="p-10">
			<h1 className="text-3xl font-bold text-gray-800 dark:text-gray-300 mb-3">
				Component Library
			</h1>
			<p className="text-gray-500 dark:text-gray-100 mb-10">
				React + Tailwind CSS로 만든 UI 컴포넌트 모음입니다. 아래 카드를 클릭해
				각 컴포넌트를 살펴보세요.
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
				{components.map((comp) => (
					<Link key={comp.path} to={comp.path}>
						<Card title={comp.name} description={comp.description} />
					</Link>
				))}
			</div>
		</div>
	);
}
