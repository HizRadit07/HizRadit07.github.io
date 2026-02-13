/* ============================= */
/* YES / NO QUESTION PAGE LOGIC */
/* ============================= */

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

if (yesBtn && noBtn) {
  let yesScale = 1;
  let noScale = 1;

  const noTexts = [
    "No",
    "Are you sure?",
    "Really?",
    "Think again 😶",
    "Please?",
    "Don’t do this 🥲",
    "Are you sure?",
    "Really?",
    "Think again 😶",
    "Please?",
    "Don’t do this 🥲",    "Are you sure?",
    "Really?",
    "Think again 😶",
    "Please?",
    "Don’t do this 🥲",    "Are you sure?",
    "Really?",
    "Think again 😶",
    "Please?",
    "Don’t do this 🥲",    "Are you sure?",
    "Really?",
    "Think again 😶",
    "Please?",
    "Don’t do this 🥲"
  ];

  let noClickCount = 0;

  noBtn.addEventListener("click", () => {
    yesScale += 0.15;
    noScale -= 0.1;

    yesBtn.style.transform = `scale(${yesScale})`;
    noBtn.style.transform = `scale(${Math.max(noScale, 0.5)})`;

    noBtn.textContent =
      noTexts[Math.min(noClickCount, noTexts.length - 1)];

    noClickCount++;
  });

  yesBtn.addEventListener("click", () => {
    document.body.style.opacity = 0;

    setTimeout(() => {
      window.location.href = "main.html";
    }, 500);
  });
}

/* ============================= */
/* PHOTO BOOK PAGE LOGIC         */
/* ============================= */

const pages = document.querySelectorAll(".page");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

if (pages.length && nextBtn && prevBtn) {
  let currentPage = 0;

  nextBtn.addEventListener("click", () => {
    if (currentPage < pages.length) {
      pages[currentPage].classList.add("flipped");
      currentPage++;
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      pages[currentPage].classList.remove("flipped");
    }
  });
}
