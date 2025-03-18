import Cookies from "js-cookie";

const privacyPanel = document.getElementById("privacyPanel");
const agreeBtn = document.getElementById("agreeBtn");
const resetBtn = document.getElementById("resetBtn");

const agree = Cookies.get("cookie-agree");

function setAgreeEvent() {
  agreeBtn?.removeEventListener("click", handleAgreeClick);
  agreeBtn?.addEventListener("click", handleAgreeClick);
}

function handleAgreeClick() {
  privacyPanel?.classList.add("c_privacy__hide");
  resetBtn?.classList.remove("c_privacy__reset");
  Cookies.set("cookie-agree", "yes", { expires: 3, path: "./" });
}

function initializePrivacyPanel() {
  if (agree === "yes") {
    privacyPanel?.classList.add("c_privacy__hide");
    resetBtn?.classList.remove("c_privacy__reset");
  } else {
    setAgreeEvent();
  }
}

resetBtn?.addEventListener("click", () => {
  Cookies.remove("cookie-agree", { path: "./" });
  resetBtn.classList.add("c_privacy__reset");
  privacyPanel?.classList.remove("c_privacy__hide");
  setAgreeEvent();
});

export { initializePrivacyPanel };
