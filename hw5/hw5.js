const prices = [100000, 80000, 120000, 100000, 80000, 100000, 60000, 70000, 70000, 80000, 20000, 20000];
const decreaseButtons = document.querySelectorAll(".quantity-btn.decrease");
const increaseButtons = document.querySelectorAll(".quantity-btn.increase");
const quantityDisplays = document.querySelectorAll(".quantity-number");
const priceDisplay = document.querySelectorAll(".price");
const totalPriceElement = document.getElementById("total-price");
const serviceFeeElement = document.getElementById("service-free");
const totalToPayElement = document.getElementById("total-to-pay");

decreaseButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        let quantity = parseInt(quantityDisplays[index].textContent) || 0; 
        if (quantity > 0) quantity--; 
        quantityDisplays[index].textContent = quantity; 
        updatePrice(index, quantity);
        updateTotalPrice();
    });
});

increaseButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        let quantity = parseInt(quantityDisplays[index].textContent) || 0;
        quantity++;
        quantityDisplays[index].textContent = quantity;
        updatePrice(index, quantity);
        updateTotalPrice();
    });
});
function updatePrice(index, quantity) {
    const itemPrice = prices[index];
    const totalItemPrice = quantity * itemPrice;
    priceDisplay[index].textContent =totalItemPrice.toLocaleString('fa') + "تومان"
}

function updateTotalPrice() {
    let resultTotalPrice = 0;
    quantityDisplays.forEach((quantityDisplay, index) => {
        const quantity = parseInt(quantityDisplay.textContent) || 0;
        const itemPrice = prices[index];
        resultTotalPrice += (quantity * itemPrice);
    });

    totalPriceElement.textContent = resultTotalPrice.toLocaleString('fa') + " تومان";

    const serviceFee = resultTotalPrice * 0.09;
    serviceFeeElement.textContent = serviceFee.toLocaleString('fa') + " تومان";

    const totalToPay = resultTotalPrice + serviceFee; 
    totalToPayElement.textContent = totalToPay.toLocaleString('fa') + " تومان";
};

const submitOrderButton = document.getElementById("order-btn");
const orderMessage = document.getElementById("order-message");

submitOrderButton.addEventListener("click", () => {
    orderMessage.style.display = "block";
    setTimeout(() => {
        orderMessage.style.display = "none";
    }, 3000);
});
