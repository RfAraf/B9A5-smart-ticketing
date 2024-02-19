let seatCount = 0;

const seats = document.getElementsByClassName("seats");
for (const seat of seats) {
  seat.addEventListener("click", function handleClick() {
    // set seat background color
    seat.classList.add("bg-primary-color");
    seat.classList.add("text-white");

    // =================================================================================

    // increase seat count
    seatCount = seatCount + 1;
    const currentSeatElement = document.getElementById("current-seats");
    currentSeatElement.innerText = seatCount;

    // remove default disabled attribute for 'apply' button while user select 4 seats
    if (seatCount >= 4) {
      const applyButton = document.getElementById("apply-button");
      applyButton.removeAttribute("disabled");
    }

    // decrease seat count
    const currentAvailableSeatsElement = document.getElementById(
      "current-available-seats"
    );
    const availableSeats = getTextElementValueById("current-available-seats");
    currentAvailableSeatsElement.innerText = availableSeats - 1;

    // =================================================================

    // appending ticket details
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

    // remove function when click second time
    seat.removeEventListener("click", handleClick);

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

    // =================================================================

    // remove default disable attribute for 'next' button while click a seat
    const nextButton = document.getElementById("next-button");
    nextButton.removeAttribute("disabled");
  });
}
// end seat loop

// =============================[COUPON]====================================

// coupon validation
const applyButton = document.getElementById("apply-button");
applyButton.addEventListener("click", function () {
  const couponFieldElement = document.getElementById("coupon-field");
  const couponField = couponFieldElement.value;

  if (couponField === "NEW15") {
    // get total price value
    const totalPriceElement = document.getElementById("total-price");
    const totalPrice = getTextElementValueById("total-price");

    // show discounted div and set discount price
    const discountedPriceElement = document.getElementById("discounted-price");
    const discountPrice = totalPrice * 0.15;
    discountedPriceElement.innerText = discountPrice;
    showElementById("discounted-div");

    // get grand price value
    const grandTotalElement = document.getElementById("grand-total");
    const grandTotal = getTextElementValueById("grand-total");

    // get final value of grand total after discount
    grandTotalElement.innerText = totalPrice - discountPrice;

    // hide coupon div after applying 'NEW15' coupon
    // const couponElement = this.getElementsByClassName('coupon-div')
    hideElementById("coupon-div");
  } else if (couponField === "Couple 20") {
    // get total price value
    const totalPriceElement = document.getElementById("total-price");
    const totalPrice = getTextElementValueById("total-price");

    // show discounted div and set discount price
    const discountedPriceElement = document.getElementById("discounted-price");
    const discountPrice = totalPrice * 0.2;
    discountedPriceElement.innerText = discountPrice;
    showElementById("discounted-div");

    // get grand price value
    const grandTotalElement = document.getElementById("grand-total");
    const grandTotal = getTextElementValueById("grand-total");

    // get final value of grand total after discount
    grandTotalElement.innerText = totalPrice - discountPrice;

    // hide coupon div after applying 'Couple 20' coupon
    // const couponElement = this.getElementsByClassName('coupon-div')
    hideElementById("coupon-div");
  } else {
    alert("Invalid Coupon");
  }
});
// =================================================================

// show modal by clicking next button
const nextButton = document.getElementById("next-button");
nextButton.addEventListener("click", function () {
  hideElementById("header-section");
  hideElementById("offers-section");
  hideElementById("ticket");
  showElementById("modal");
});

// continue button reloading
const continueButton = document.getElementById("continue-button");
continueButton.addEventListener("click", function () {
  window.location.reload();
});
