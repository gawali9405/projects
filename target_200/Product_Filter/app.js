let products = {
  data: [
    {
      productName: "Regular White T-Shirt",
      category: "Topwear",
      price: "30",
      image: "img1.jpeg",
    },
    {
      productName: "Beige short skirt",
      category: "Bottomwear",
      price: "49",
      image: "img1.jpeg",
    },
    {
      productName: "Stylish Pink Trousers",
      category: "Bottomwear",
      price: "83",
      image: "img1.jpeg",
    },
    {
      productName: "Brown Men's Jacket",
      category: "jacket",
      price: "154",
      image: "img1.jpeg",
    },
  ],
};

for (let i of products.data) {
  let card = document.createElement("div");
  console.log(card);
  card.classList.add("card", "i.category");
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  document.getElementById("products").appendChild(card);
}
