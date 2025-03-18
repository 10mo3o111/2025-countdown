import "normalize.css";
import "./styles/style.css";
import { initializePrivacyPanel } from "./privacy";
import { updateCountDown, updateClosingCountDown } from "./countdown";
import { initializeSelectRedirect } from "./form";

document.addEventListener("DOMContentLoaded", () => {
  initializePrivacyPanel();
});

setInterval(updateCountDown, 1000);
setInterval(updateClosingCountDown, 1000);
initializeSelectRedirect();
