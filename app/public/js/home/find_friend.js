document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".section:nth-child(2) .select-btn").forEach(button => {
    button.addEventListener("click", function () {
      document.querySelectorAll(".section:nth-child(2) .select-btn").forEach(btn => btn.classList.remove("active"));
      this.classList.add("active");
    });
  });

  document.querySelectorAll(".section:nth-child(3) .select-btn, .section:nth-child(4) .select-btn").forEach(button => {
    button.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  });

  document.querySelector(".find-btn").addEventListener("click", function (event) {
    let missingSections = [];

    const isRegionSelected = document.querySelector(".section:nth-child(2) .select-btn.active") !== null;
    const isAgeSelected = document.querySelector(".section:nth-child(3) .select-btn.active") !== null;
    const isHobbySelected = document.querySelector(".section:nth-child(4) .select-btn.active") !== null;

    if (!isRegionSelected) missingSections.push("지역 선택");
    if (!isAgeSelected) missingSections.push("나이대 선택");
    if (!isHobbySelected) missingSections.push("취미 선택");

    if (missingSections.length > 0) {
      alert(`${missingSections.join(", ")} 영역에서 최소 하나를 선택하세요.`);
      event.preventDefault();
    } else {
      location.href = "/find";
    }
  });
});
