// Common settings for whole JavaScript
const INCREMENT_BUTTON = document.querySelector("#increment");
const DECREMENT_BUTTON = document.querySelector("#decrement");
const counterDisplay = document.getElementById("counter_Value");
let count = 0;

// Issue 3: Implement "Increase" button logic.
// Ruslan Semenchik
INCREMENT_BUTTON.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});

// Issue 4: Implement "Decrease" button logic.
// Ruslan Semenchik
DECREMENT_BUTTON.addEventListener("click", () => {
  count--;
  counterDisplay.textContent = count;
});

// Issue 5: Implement "Reset" button logic.
// Artur Somov
document.getElementById("reset").addEventListener("click", () => {
  count = 0;
  counterDisplay.textContent = 0; // сразу показываем 0 на экране
});

// Issue 6: Validating the counter value
// Anton Cheban
DECREMENT_BUTTON.addEventListener("click", () => {
  if (count < 0) {
    // защита от отрицательных чисел
    count = 0;
  }
  counterDisplay.textContent = count;
});
