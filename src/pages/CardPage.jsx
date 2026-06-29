import Card from "../components/Card/Card";
import Badge from "../components/Badge/Badge";
import Button from "../components/Button/Button";

export default function CardPage() {
	return (
		<div className="p-10 flex flex-col gap-10">
			<div>
				<h1 className="text-2xl font-bold text-gray-800 mb-2">Card</h1>
				<p className="text-gray-500 text-sm">
					콘텐츠를 담는 박스형 레이아웃입니다.
				</p>
			</div>

			<div className="flex gap-6 flex-wrap">
				<Card
					title="기본 카드"
					description="title과 description만 사용한 가장 단순한 형태입니다."
				/>

				<Card
					title="뱃지가 있는 카드"
					description="children으로 다른 컴포넌트를 끼워넣을 수 있습니다."
				>
					<Badge variant="success">New</Badge>
				</Card>

				<Card
					title="푸터가 있는 카드"
					description="footer 영역에 버튼을 넣을 수 있습니다."
					footer={<Button size="sm">자세히 보기</Button>}
				></Card>
			</div>
		</div>
	);
}
