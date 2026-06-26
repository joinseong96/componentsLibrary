import { Routes, Route } from "react-router-dom";
import { ToastProvider } from "./components/Toast/ToastContext";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import ButtonPage from "./pages/ButtonPage";
import BadgePage from "./pages/BadgePage";
import InputPage from "./pages/InputPage";
import ToastPage from "./pages/ToastPage";
import ModalPage from "./pages/ModalPage";
import TabPage from "./pages/TabPage";

export default function App() {
	return (
		<ToastProvider>
			<div className="flex">
				<Sidebar />
				<main className="flex-1">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/button" element={<ButtonPage />} />
						<Route path="/badge" element={<BadgePage />} />
						<Route path="/input" element={<InputPage />} />
						<Route path="/toast" element={<ToastPage />} />
						<Route path="/modal" element={<ModalPage />} />
						<Route path="/tab" element={<TabPage />} />
					</Routes>
				</main>
			</div>
		</ToastProvider>
	);
}
