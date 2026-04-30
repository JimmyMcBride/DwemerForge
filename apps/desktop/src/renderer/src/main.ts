import App from "./App.svelte";
import "./styles.css";

const target = document.getElementById("app");

if (!target) {
  throw new Error("DwemerForge desktop shell target is missing.");
}

const app = new App({
  target
});

export default app;
