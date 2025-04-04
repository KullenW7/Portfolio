/* js/scripts.js */

// Initialize tooltips
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
[...tooltipTriggerList].map((el) => new bootstrap.Tooltip(el));

// Initialize popovers
const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
[...popoverTriggerList].map((el) => new bootstrap.Popover(el));

// Auto-show toasts
document.querySelectorAll(".toast").forEach((toastEl) => {
  const toast = new bootstrap.Toast(toastEl);
  toast.show();
});

// Show modal on button click (if present)
const modalBtn = document.getElementById("openContactModal");
if (modalBtn) {
  modalBtn.addEventListener("click", () => {
    const modal = new bootstrap.Modal(document.getElementById("contactModal"));
    modal.show();
  });
}

// Optional: Scrollspy update
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: "#mainNav",
});
