
 document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.querySelector(".start");
  const rulesBox = document.querySelector(".rules");
  const exitBtn = document.querySelector(".exit");
  const continueBtn = document.querySelector(".continue");
  const questionBox = document.querySelector(".question");

  // Start Quiz → show rules
  startBtn.addEventListener("click", () => {
    rulesBox.classList.add("activeinfo");
  });

  // Exit Quiz → hide rules
  exitBtn.addEventListener("click", () => {
    rulesBox.classList.remove("activeinfo");
  });

  // Continue Quiz → hide rules + show question
  continueBtn.addEventListener("click", () => {
    rulesBox.classList.remove("activeinfo");
    questionBox.classList.add("active");
  });
});