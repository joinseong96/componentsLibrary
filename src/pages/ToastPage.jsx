import { useState } from "react";
import Button from "../components/Button/Button";
import Toast from "../components/Toast/Toast";

export default function ToastPage() {
	const [showToast, setShowToast] = useState(false);
	const [toastType, setToastType] = useState("info");

	const triggerToast = (type) => {
		setToastType(type);
		setShowToast(true);
	};

	return (
		<div className="p-10 flex flex-col gap-10 max-w-2xl">
			<div>
				<h1 className="text-2xl font-bold text-gray-800 mb-2">Toast</h1>
				<p className="text-gray-500 text-sm">
					일정 시간 후 자동으로 사라지는 알림입니다.
				</p>
			</div>

			<section>
				<h2 className="text-sm font-semibold text-gray-600 mb-3">Type</h2>
				<div className="flex gap-3">
					<Button onClick={() => triggerToast("info")}>Info</Button>
					<Button onClick={() => triggerToast("success")}>Success</Button>
					<Button onClick={() => triggerToast("warning")}>Warning</Button>
					<Button onClick={() => triggerToast("error")}>Error</Button>
				</div>
			</section>

			<Toast
				message="알림 메시지입니다!"
				type={toastType}
				isVisible={showToast}
				onClose={() => setShowToast(false)}
			/>
		</div>
	);
}
