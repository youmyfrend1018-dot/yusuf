import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ClerkProvider } from "@clerk/react";

// Vite uchun muhit kalitini to'g'ri chaqirish
const PUBLISHABLE_KEY = "pk_test_Y2FzdWFsLXBlYWNvY2stMjY2NC5jbGVyay5hY2NvdW50cy5kZXYk";

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key (.env faylda VITE_CLERK_PUBLISHABLE_KEY kiritilmagan!)");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  </StrictMode>,
);