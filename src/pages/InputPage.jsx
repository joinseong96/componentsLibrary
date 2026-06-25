import { useState } from "react";
import Input from "../components/Input/Input";

export default function InputPage() {
	const [name, setName] = useState("");

	return (
		<div className="p-10 flex flex-col gap-10 max-w-2xl">
			<div>
				<h1 className="text-2xl font-bold text-gray-800 mb-2">Input</h1>
				<p className="text-gray-500 text-sm">
					사용자 입력을 받는 컴포넌트입니다. error, disabled 상태를 지원합니다.
				</p>
			</div>

			<section className="flex flex-col gap-4">
				<h2 className="text-sm font-semibold text-gray-600">기본 상태</h2>
				<Input
					label="이름"
					placeholder="이름을 입력하세요"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</section>

			<section className="flex flex-col gap-4">
				<h2 className="text-sm font-semibold text-gray-600">Error 상태</h2>
				<Input
					label="이메일"
					placeholder="이메일을 입력하세요"
					error="올바른 이메일 형식이 아니에요"
				/>
			</section>

			<section className="flex flex-col gap-4">
				<h2 className="text-sm font-semibold text-gray-600">Disabled 상태</h2>
				<Input label="비활성 상태" placeholder="입력 불가" disabled />
			</section>

			<section className="flex flex-col gap-4">
				<Input
					type="password"
					label="비밀번호"
					placeholder="비밀번호를 입력하세요"
				/>
			</section>
		</div>
	);
}
