const select = document.querySelector("#form select");

function initializeSelectRedirect() {
  if (select && select instanceof HTMLSelectElement) {
    select.addEventListener("change", () => {
      location.href = select.value;
    });
  }
}

export { initializeSelectRedirect };
