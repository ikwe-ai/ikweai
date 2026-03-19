import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/tokens.css";
import "./styles/shared-components.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
