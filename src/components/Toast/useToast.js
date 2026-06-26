import { useContext } from "react";
import { ToastContext } from "./ToastContextDefinition";

export function useToast() {
	return useContext(ToastContext);
}
