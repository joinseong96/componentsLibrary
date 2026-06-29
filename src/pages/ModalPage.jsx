import { useState } from "react";
import Button from "../components/Button/Button";
import Modal from "../components/Modal/Modal";

export default function ModalPage() {
	const [showModal, setShowModal] = useState(false);

	return (
		<div className="p-10 flex flex-col gap-10 max-w-2xl">
			<div>
				<h1 className="text-2xl font-bold text-gray-800 dark:text-gray-300 mb-2">
					Modal
				</h1>
				<p className="text-gray-500 dark:text-gray-100 text-sm">
					배경 클릭 또는 닫기 버튼으로 닫을 수 있는 팝업창입니다.
				</p>
			</div>

			<section>
				<Button onClick={() => setShowModal(true)}>모달 열기</Button>
			</section>

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
