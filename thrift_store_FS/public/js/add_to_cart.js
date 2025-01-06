// Function to add item to cart
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if the item with the selected size already exists in the cart
  const existingItem = cart.find(
    (item) => item.id === product.id && item.size === product.size,
  );

  if (existingItem) {
    // If the item already exists, increase the quantity
    existingItem.quantity += 1;
  } else {
    // If the item doesn't exist, set quantity to 1 and add to the cart
    product.quantity = 1;
    cart.push(product);
  }

  // Save the updated cart to LocalStorage
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} has been added to your cart!`);
}

// Handle Add to Cart button clicks
document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const item = this.closest(".item"); // Get the parent item container
    const product = {
      id: item.getAttribute("data-id"), // Product ID
      name: item.getAttribute("data-name"), // Product name
      price: parseFloat(item.getAttribute("data-price")), // Product price
      image: item.querySelector("img").getAttribute("src"), // Product image
      size: item.querySelector(".size-select")
        ? item.querySelector(".size-select").value
        : "default", // Size (if exists)
    };

    // Log the product details for verification
    console.log("Product added:", product);

    // Call the function to add the item to the cart
    addToCart(product);
  });
});

// Search Bar
function searchItems() {
  // Declare variables
  let input = document.getElementById("searchBar").value.toUpperCase();
  let items = document.getElementsByClassName("product-item"); // Class of product items

  // Loop through all items and hide those that don't match the search query
  for (let i = 0; i < items.length; i++) {
    let itemName = items[i].getElementsByClassName("item-name")[0]; // Assuming product name is inside item-name class
    if (itemName) {
      let txtValue = itemName.textContent || itemName.innerText;
      if (txtValue.toUpperCase().indexOf(input) > -1) {
        items[i].style.display = "";
      } else {
        items[i].style.display = "none";
      }
    }
  }
}
