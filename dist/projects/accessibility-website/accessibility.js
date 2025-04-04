document.addEventListener("DOMContentLoaded", function () {
  const textSizeButtons = document.querySelectorAll(
    ".text-size-controls button"
  );
  const colorModeButtons = document.querySelectorAll(
    ".color-mode-controls button"
  );

  if (localStorage.getItem("textSize")) {
    document.body.style.fontSize = localStorage.getItem("textSize");
  }

  if (localStorage.getItem("colorMode")) {
    document.body.classList.add(localStorage.getItem("colorMode"));
  }

  textSizeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      document.body.style.fontSize = this.dataset.size;
      localStorage.setItem("textSize", this.dataset.size);
    });
  });

  colorModeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      document.body.classList.remove("high-contrast", "dark-mode");
      if (this.dataset.mode !== "default") {
        document.body.classList.add(this.dataset.mode);
      }
      localStorage.setItem("colorMode", this.dataset.mode);
    });
  });
});
