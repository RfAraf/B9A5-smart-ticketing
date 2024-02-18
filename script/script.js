const seats = document.getElementsByClassName("seats");
// console.log(seats);

for (const seat of seats) {
  seat.addEventListener("click", function () {
    seat.classList.add("bg-primary-color");
    seat.classList.add("text-white");

    const currentSeatElement = document.getElementById("current-seats");
    const currentSeat = getTextElementValueById("current-seats");
    currentSeatElement.innerText = currentSeat + 1;

    const currentAvailableSeatsElement = document.getElementById(
      "current-available-seats"
    );
    const availableSeats = getTextElementValueById("current-available-seats");
    currentAvailableSeatsElement.innerText = availableSeats - 1;

    // =================================================================

    const seatContainer = document.getElementById("seat-container");

    const pContainer = document.createElement("div");
    const pSeatNo = document.createElement("p");
    pSeatNo.innerText = seat.innerText;
    const pSeatClass = document.createElement("p");
    pSeatClass.innerText = "Economoy";
    const pSeatPrice = document.createElement("p");
    pSeatPrice.innerText = 550;

    pContainer.appendChild(pSeatNo);
    pContainer.appendChild(pSeatClass);
    pContainer.appendChild(pSeatPrice);

    pContainer.classList.add("flex");
    pContainer.classList.add("justify-between");

    seatContainer.appendChild(pContainer);

    // =================================================================

    // total price
    const totalPriceElement = document.getElementById("total-price");
    const totalPrice = getTextElementValueById("total-price");

    const newTotalPrice = totalPrice + 550;
    totalPriceElement.innerText = newTotalPrice;

    // grand total
    const grandTotalElement = document.getElementById("grand-total");
    const grandTotal = getTextElementValueById("grand-total");

    const newGrandTotal = grandTotal + 550;
    grandTotalElement.innerText = newGrandTotal;
  });
}
