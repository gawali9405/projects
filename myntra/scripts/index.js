let bagItems;
onload();

function onload() {
  let bagItemsStr = localStorage.getItem("bagItems");
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayShow();
  displayShowCount();
}

function addToBag(itemid) {
  bagItems.push(itemid);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  displayShowCount();
}

function displayShowCount() {
  let totalItemCount = document.querySelector(".bag-item-count");
  if (bagItems.length > 0) {
    totalItemCount.style.visibility = "visible";
    totalItemCount.innerHTML = bagItems.length;
  } else {
    totalItemCount.style.visibility = "hidden";
  }
}

function displayShow() {
  let show = document.querySelector(".items-container");
  if(!show){
    return;
  }
  let stockIgm = "";
  items.forEach((item) => {
    stockIgm += `  <div class="item-container">
    <img class="item-image" src="${item.image}" alt="item image">
    <div class="rating">
        ${item.rating.stars} ⭐ | ${item.rating.count}
    </div>
    <div class="company-name">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">Rs ${item.original_price}</span>
        <span class="discount">(${item.discount_percentage}% OFF)</span>
    </div>
    <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
  </div>`;
  });
  show.innerHTML = stockIgm;
}
