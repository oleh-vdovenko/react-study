// src/main.tsx
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "modern-normalize";
// import App from "./components/Book";

createRoot(document.getElementById("root") as HTMLElement).render(<App />);
