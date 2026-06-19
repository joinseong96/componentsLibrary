import { useState } from "react";
import Button from "./components/Button/Button";
import Badge from "./components/Badge/Badge";
import Input from "./components/Input/Input";
import Toast from "./components/Toast/Toast";
import Modal from "./components/Modal/Modal";
import Tab from "./components/Tab/Tab";

export default function App() {
	const [name, setName] = useState("");
	const [showToast, setShowToast] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const tabs = [
		{ label: "소개", content: "이것은 소개 탭 내용입니다." },
		{ label: "상세정보", content: "이것은 상세정보 탭 내용입니다." },
		{ label: "리뷰", content: "이것은 리뷰 탭 내용입니다." },
	];

	return (
		<div className="p-10 flex flex-col gap-8">
			<div className="flex gap-3">
				<Button variant="primary">Primary</Button>
				<Button variant="secondary">Secondary</Button>
				<Button variant="outline">Outline</Button>
				<Button variant="danger">Danger</Button>
			</div>

			<div className="flex gap-3 items-center">
				<Badge variant="primary">Primary</Badge>
				<Badge variant="success">Success</Badge>
				<Badge variant="danger">Danger</Badge>
			</div>

			<Input
				label="이름"
				placeholder="이름을 입력하세요"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<Input
				label="이메일"
				placeholder="이메일을 입력하세요."
				error="올바른 이메일 형식이 아니에요"
			/>
			<Input label="비활성 상태" placeholder="입력 불가" disabled />

			<div className="flex gap-3">
				<Button onClick={() => setShowToast(true)}>토스트 띄우기</Button>
				<Button onClick={() => setShowModal(true)}>모달 열기</Button>
			</div>

			<Tab tabs={tabs} />

			<Toast
				message="저장되었습니다!"
				type="success"
				isVisible={showToast}
				onClose={() => setShowToast(false)}
			/>

			<Modal
				isOpen={showModal}
				onClose={() => setShowModal(false)}
				title="확인"
			>
				정말 진행하시겠어요?
			</Modal>
		</div>
	);
}
