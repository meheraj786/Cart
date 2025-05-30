const products = [
  {
    id: 1,
    img: "https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch.jpg",
    title: "Lorem Watch",
    description: "Stylish, elegant, super watch",
    price: 100.0,
    category: "Accesories",
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmyib2yh6G255_f2sPPcpl9DisYjb1osty4codJdDh2vHp1PwOGRXiwXMKBQooUR6Mb0Q&usqp=CAU",
    title: "Lorem Camera",
    description: "Stylish, elegant, super camera",
    price: 500.0,
    category: "Accesories",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Lorem Sunglass",
    description: "Stylish, elegant, super sunglass",
    price: 50.0,
    category: "Accesories",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    title: "Lorem Headphone",
    description: "Stylish, elegant, super Headphone",
    price: 200.0,
    category: "Accesories",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    title: "Lorem Smart Watch",
    description: "Stylish, elegant, super smart watch",
    price: 150.0,
    category: "Accesories",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    title: "Lorem Shoe",
    description: "Stylish, elegant, super shoe",
    price: 300.0,
    category: "Shoes",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Lorem Check Shirt",
    description: "Stylish, elegant, super Shirt",
    price: 600.0,
    category: "Topwear",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Lorem Black T-Shirt",
    description: "Stylish, elegant, super Shirt",
    price: 500.0,
    category: "Topwear",
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/2887775/pexels-photo-2887775.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Lorem Coke T-Shirt",
    description: "Stylish, elegant, super Shirt",
    price: 450.0,
    category: "Topwear",
  },
  {
    id: 10,
    img: "https://images.pexels.com/photos/4066290/pexels-photo-4066290.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Lorem Jeans Pant",
    description: "Stylish, elegant, super Pant",
    price: 750.0,
    category: "Bottomwear",
  },
  {
    id: 11,
    img: "https://images.pexels.com/photos/2897533/pexels-photo-2897533.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Lorem Check Pant",
    description: "Stylish, elegant, super Pant",
    price: 700.0,
    category: "Bottomwear",
  },
  {
    id: 12,
    img: "https://images.pexels.com/photos/7764611/pexels-photo-7764611.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Lorem Sky-Blue Pant",
    description: "Stylish, elegant, super Pant",
    price: 800.0,
    category: "Bottomwear",
  },
];
const productSection= document.querySelector(".products-section")
const sidebar= document.querySelector("#sidebar")
const cartList= document.querySelector(".cart-items")
const totalPrice= document.querySelector("#total-price")
const notification= document.querySelector(".notification")


function sidebarToggle(){
if (sidebar.style.display=="none") {
  sidebar.style.display="block"
}else{
  sidebar.style.display="none"
}
}

let cart = [];

const product = [
  /* your product array stays unchanged */
];

products.forEach((product) => {
  const productBox = document.createElement("div");
  productBox.classList.add("cart-box");
  productBox.innerHTML = `
    <div class="product-image">
      <img src=${product.img} alt="">
    </div>
    <div class="product-details">
      <h2 class="product-name">${product.title}</h2>
      <p class="product-description">${product.description}</p>
      <div class="product-selection">
        <p class="product-price">$${product.price}</p>
      </div>
      <div class="add"><button onclick="addToCart(${product.id})">Add To Cart</button></div>
    </div>
  `;
  productSection.appendChild(productBox);
});

function filterProduct(category) {
  productSection.innerHTML = "";
  if (category === "All") {
    products.map((product) => {
      const productBox = document.createElement("div");
      productBox.classList.add("cart-box");
      productBox.innerHTML = `
      <div class="product-image">
        <img src=${product.img} alt="">
      </div>
      <div class="product-details">
        <h2 class="product-name">${product.title}</h2>
        <p class="product-description">${product.description}</p>
        <div class="product-selection">
          <p class="product-price">$${product.price}</p>
        </div>
        <div class="add"><button onclick="addToCart(${product.id})">Add To Cart</button></div>
      </div>
    `;
    productSection.appendChild(productBox);
    });
  } else {
    products.filter((product) => {
      if (product.category == category) {
        const productBox = document.createElement("div");
        productBox.classList.add("cart-box");
        productBox.innerHTML = `
      <div class="product-image">
        <img src=${product.img} alt="">
      </div>
      <div class="product-details">
        <h2 class="product-name">${product.title}</h2>
        <p class="product-description">${product.description}</p>
        <div class="product-selection">
          <p class="product-price">$${product.price}</p>
        </div>
        <div class="add"><button onclick="addToCart(${product.id})">Add To Cart</button></div>
      </div>
    `;
    productSection.appendChild(productBox);
      }
    });
  }
}

function addToCart(productId) {
  notification.innerHTML=cart.length
  console.log(cart.length);
  const existingProduct = cart.find((p) => p.id === productId);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    const product = products.find((p) => p.id === productId);
    cart.push({ ...product, quantity: 1 });
  }

  displayCart();
  updateTotal();
}

function displayCart() {
  cartList.innerHTML = "";

  cart.forEach((product) => {
    const item = document.createElement("div");
    item.classList.add("cart-item");
    item.innerHTML = `
      <div class="cart-product-image">
        <img src="${product.img}" alt="">
      </div>
      <div class="cart-product-details">
        <h2 class="cart-product-name">${product.title}</h2>
        <p class="cart-product-description">${product.description}</p>
        <div class="cart-product-selection">
          <p class="cart-product-price">$${product.price} x ${
      product.quantity
    } = $${(product.price * product.quantity).toFixed(2)}</p>
          <div class="cart-number">
            <button onclick="changeQuantity(${
              product.id
            }, 'decrease')">-</button>
            <span>${product.quantity}</span>
            <button onclick="changeQuantity(${
              product.id
            }, 'increase')">+</button>
            <button class="erase-cart" onclick="erase(${product.id})">X</button>
          </div>
        </div>
      </div>
    `;
    cartList.appendChild(item);
  });
}

function changeQuantity(productId, action) {
  cart = cart.map((product) => {
    if (product.id === productId) {
      if (action === "increase") {
        product.quantity += 1;
      } else if (action === "decrease" && product.quantity > 1) {
        product.quantity -= 1;
      }
    }
    return product;
  });

  displayCart();
  updateTotal();
}

function erase(productId) {
  cart = cart.filter((product) => product.id !== productId);
  displayCart();
  updateTotal();
}

function updateTotal() {
  let total = 0;
  cart.forEach((product) => {
    total += product.price * product.quantity;
  });
  totalPrice.innerHTML = `$${total.toFixed(2)}`;
}

