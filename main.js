const cartImage = document.querySelector(".img");
cartImage.addEventListener("click",  CartClick);

const addToCartButtons = document.querySelectorAll(".add");
addToCartButtons.forEach((button) =>
  button.addEventListener("click", AddToButtonClick)
);

let cart = [];

function  CartClick() {
  if (cart.length === 0) {
    alert("Your cart is empty");
  } else {
    const cartPage = window.open("", "Cart");
    const cartList = document.createElement("ul");
    cart.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        const index = cart.indexOf(item);
        if (index > -1) {
          cart.splice(index, 1);
          listItem.remove();
          cartImage.textContent = "0" + cart.length;
        }
      });
      listItem.appendChild(deleteButton);
      cartList.appendChild(listItem);
    });
    cartPage.document.body.appendChild(cartList);
  }
}

function AddToButtonClick(event) {
  const cardTitle = event.target.previousElementSibling.textContent;
  cart.push(cardTitle);
}
