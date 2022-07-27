const sections = document.querySelectorAll(".section");
const secBtns = document.querySelectorAll(".controlls");
const secBtn = document.querySelectorAll(".controll");
const allSections = document.querySelector(".main-content");

function PageTransitions() {
  // Button click actives class
  for (let i = 0; i < secBtn.length; i++) {
    secBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += " active-btn";
    });
  }
  // Sections active class
  allSections.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
      // Remove selected from the other buttons
      /* secBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active"); */

      // Hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}

/* ========== Toggle theme ========= */
const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
  let element = document.body;
  element.classList.toggle("light-mode");
});
PageTransitions();
