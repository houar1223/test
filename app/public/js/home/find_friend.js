document.querySelectorAll(".select-btn").forEach(button => {
  button.addEventListener("click", function () {
    if (this.classList.contains("active")) {
      this.classList.remove("active");
    } else {
      this.classList.add("active");
    }
  });
});