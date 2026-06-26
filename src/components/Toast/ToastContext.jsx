import { useState, useCallback } from "react";
import { ToastContext } from "./ToastContextDefinition";
import Toast from "./Toast";

export function ToastProvider({ children }) {
	const [toasts, setToasts] = useState([]);

	const addToast = useCallback((message, type = "info") => {
		const id = Date.now();
		setToasts((prev) => [...prev, { id, message, type }]);
	}, []);

	const removeToast = useCallback((id) => {
		setToasts((prev) => prev.filter((toast) => toast.id !== id));
	}, []);

	return (
		<ToastContext.Provider value={{ addToast }}>
			{children}
			<div className="fixed bottom-6 right-6 flex flex-col gap-2 z-50">
				{toasts.map((toast) => (
					<Toast
						key={toast.id}
						message={toast.message}
						type={toast.type}
						onClose={() => removeToast(toast.id)}
					/>
				))}
			</div>
		</ToastContext.Provider>
	);
}
