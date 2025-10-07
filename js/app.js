const searchInput = document.getElementById("search-IN");
const products = document.querySelectorAll(".productItem");
const buttons = document.querySelectorAll(".filter");
const priceSearch = document
.getElementById("priceSearch")
.querySelector("button");
 

const changeClass =  (filter) => {
buttons.forEach((button)=> {
    if(button.dataset.filter === filter){
        button.classList.add("selected")
    }else{
        button.classList.remove("selected")
    }
})
}
const searchHandler = (event) => {
  const searchValue = event.target.value.toLowerCase().trim();

  products.forEach((productItem) => {
    const productName = productItem.children[1].innerText.toLowerCase();
    if (productName.includes(searchValue)) {
      productItem.style.display = "flex";
    } else {
      productItem.style.display = "none";
    }
  });
};

const buttonHandler = (event) => {
  const filter = event.target.dataset.filter;
  changeClass(filter)
  products.forEach((productItem) => {
    const category = productItem.dataset.category;
    if (filter == "All") {
      productItem.style.display = "flex";
    } else {
      filter == category
        ? (productItem.style.display = "flex")
        : (productItem.style.display = "none");
    }
  });
};

const priceHandler = e => {
  const searchPrice = +e.target.parentElement.children[0].value 
 products.forEach(productItem => {
  const productPrice = productItem.children[2].innerText
  const finalPrice = +productPrice.split("$")[1]
  if (!searchPrice) {
    productItem.style.display = "flex";
  }else{
    searchPrice === finalPrice ? productItem.style.display = "flex" : productItem.style.display = "none"
  }
 })
}






searchInput.addEventListener("keyup", searchHandler);

buttons.forEach((button) => {
  button.addEventListener("click", buttonHandler);
});

priceSearch.addEventListener ("click" , priceHandler)