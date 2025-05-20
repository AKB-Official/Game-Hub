/* ADD TO CART AND THIS DISPLAY IT ON CART PAGE */
function addToCart(product) {
  // Retrieve the current cart from localStorage or initialize it as an empty array
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  // Add the new product to the cart
  cart.push(product);
  // Save the updated cart back to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(product + ' has been added to the cart.');
}

function displayCart() {
  // Retrieve the cart from localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let cartList = document.getElementById('cart-list');
  
  // Clear the list before displaying updated items
  cartList.innerHTML = '';

  // Add each product to the list
  cart.forEach(product => {
      let listItem = document.createElement('li');
      listItem.textContent = product;
      cartList.appendChild(listItem);
  });
}

function clearCart() {
  // Clear the cart in localStorage
  localStorage.removeItem('cart');
  // Refresh the displayed list
  displayCart();
  alert('Cart cleared.');
}

// Call displayCart when the page loads
window.onload = displayCart;

function addToCart(product, price) {
  // Retrieve the current cart from localStorage or initialize it as an empty array
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  // Add the new product as an object with name and price
  cart.push({ name: product, price: price });
  // Save the updated cart back to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(product + ' has been added to the cart.');
}

function displayCart() {
  // Retrieve the cart from localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let cartList = document.getElementById('cart-list');
  
  // Clear the list before displaying updated items
  cartList.innerHTML = '';

  // Add each product to the list with its price
  cart.forEach(item => {
      let listItem = document.createElement('li');
      listItem.textContent = `${item.name} • $${item.price}`;
      cartList.appendChild(listItem);
  });
}

function clearCart() {
  // Clear the cart in localStorage
  localStorage.removeItem('cart');
  // Refresh the displayed list
  displayCart();
  alert('Cart cleared.');
}

// Call displayCart when the page loads
window.onload = displayCart;

function displayCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let cartList = document.getElementById('cart-list');
  let totalPriceElement = document.getElementById('total-price');
  let totalPrice = 0;

  cartList.innerHTML = ''; // Clear the list before displaying updated items

  cart.forEach(item => {
      let listItem = document.createElement('li');
      listItem.textContent = `${item.name} • $${item.price}`;
      cartList.appendChild(listItem);
      totalPrice += item.price; // Add the item's price to the total
  });

  totalPriceElement.textContent = `Total Price: $${totalPrice}`; // Update total price display
}

function clearCart() {
  localStorage.removeItem('cart'); // Clear the cart in localStorage
  displayCart(); // Refresh the displayed list
  alert('Cart cleared.');
}

window.onload = displayCart; // Call displayCart when the page loads