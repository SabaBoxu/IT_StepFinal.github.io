let products = {
  data: [
    {
      productName: "Chocolate Cake",
      category: "Chocolate",
      price: "20",
      image: "img/imgfile/chk.jpg",
    },
    {
      productName: "Mango Vanilla Slice",
      category: "Vanilla",
      price: "15",
      image: "img/imgfile/mango-vanilla-slice-.jpg",
    },
    {
      productName: "Strawberry ricotta layer cake",
      category: "Strawberry",
      price: "20",
      image: "img/imgfile/strawberry-ricotta-layer-cake-.jpeg",
    },
    {
      productName: "Blueberry Buckle",
      category: "BlueBerry",
      price: "30",
      image: "img/imgfile/Blueberry Buckle.jpg",
    },
    {
      productName: "Flourless Chocolate Cake",
      category: "Chocolate",
      price: "19",
      image: "img/imgfile/Flourless-Chocolate-Cake-.jpg",
    },
    {
      productName: "Strawberry crumble",
      category: "Strawberry",
      price: "89",
      image: "img/imgfile/strawberry-crumble-.jpeg",
    },
    {
      productName: "Golden Syrup Vanilla Slice",
      category: "Vanilla",
      price: "19",
      image: "img/imgfile/lemon-and-vanilla-slice-.jpg",
    },
    {
      productName: "Chocolate Cake With Ganache Glaze",
      category: "Chocolate",
      price: "29",
      image: "img/imgfile/Vegan-Chocolate-Cake-.jpg",
    },
    {
      productName: "Strawberry cheesecake",
      category: "Strawberry",
      price: "30",
      image: "img/imgfile/strawberry-cheesecake-.jpeg",
    },
    {
      productName: "Blueberry Pie",
      category: "BlueBerry",
      price: "10",
      image: "img/imgfile/Blueberry Pie.jpg",
    },
    {
      productName: "vanilla slice with honeycomb",
      category: "Vanilla",
      price: "23",
      image: "img/imgfile/honey-vanilla-slice-with-honeycomb-.jpg",
    },
    {
      productName: "Blueberry Dump Cake",
      category: "BlueBerry",
      price: "30",
      image: "img/imgfile/Blueberry Dump Cake.jpg",
    },

  ],
};
for (let i of products.data) {
  let card = document.createElement("div");
  card.classList.add("card", i.category, "hide");
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  let container = document.createElement("div");
  container.classList.add("container");
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);
  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}
function filterProduct(value) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {

    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  let elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}
document.getElementById("search").addEventListener("click", () => {
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");
  elements.forEach((element, index) => {
    if (element.innerText.includes(searchInput.toUpperCase())) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
});
window.onload = () => {
  filterProduct("all");
};