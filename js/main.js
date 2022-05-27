let btn = document.querySelectorAll(".cart-add-btn");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    cartNumbers();
  });
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");

  if (productNumbers) {
    document.querySelector(".count").textContent = productNumbers;
  }
}

function cartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".count").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".count").textContent = 1;
  }
}


onLoadCartNumbers();
