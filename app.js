const btn = document.querySelector("#btn");
const billAmount = document.querySelector("#bill-amt");
const cashGiven = document.querySelector("#cashGiven");
const message = document.querySelector("#error-msg");
const numberOfNotes = document.querySelectorAll(".No-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

btn.addEventListener("click", function validateBillAndCash() {
  hideMessage();
  if (billAmount.value > 0) {
    if (cashGiven.value > billAmount.value) {
      const amountToBeReturned = cashGiven.value - billAmount.value;
      calChange(amountToBeReturned);
    } else {
      showMessage("The cash provided is insufficient");
    }
  } else {
    showMessage("Invalid bill amount");
  }
});

function calChange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned %= availableNotes[i];
    numberOfNotes[i].innerText = numOfNotes;
  }
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
