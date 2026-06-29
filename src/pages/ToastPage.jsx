import Button from "../components/Button/Button";
import { useToast } from "../components/Toast/useToast";

export default function ToastPage() {
	const { addToast } = useToast();

	return (
		<div className="p-10 flex flex-col gap-10 max-w-2xl">
			<div>
				<h1 className="text-2xl font-bold text-gray-800 dark:text-gray-300 mb-2">
					Toast
				</h1>
				<p className="text-gray-500 dark:text-gray-100 text-sm">
					일정 시간 후 자동으로 사라지는 알림입니다. 여러 개를 동시에 띄울 수
					있습니다.
				</p>
			</div>

			<section>
				<h2 className="text-sm font-semibold text-gray-600 dark:text-gray-100 mb-3">
					Type
				</h2>
				<div className="flex gap-3">
					<Button onClick={() => addToast("정보 메시지입니다", "info")}>
						Info
					</Button>
					<Button onClick={() => addToast("성공했습니다!", "success")}>
						Success
					</Button>
					<Button onClick={() => addToast("주의가 필요해요", "warning")}>
						Warning
					</Button>
					<Button onClick={() => addToast("에러가 발생했어요", "error")}>
						Error
					</Button>
				</div>
			</section>
		</div>
	);
}
