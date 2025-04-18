const products=
[{
  id:1,
  img: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch.jpg',
  title: 'Lorem Watch',
  description: 'Stylish, elegant, super watch',
  price: '$100.00'
},
{
  id:2,
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmyib2yh6G255_f2sPPcpl9DisYjb1osty4codJdDh2vHp1PwOGRXiwXMKBQooUR6Mb0Q&usqp=CAU',
  title: 'Lorem Camera',
  description: 'Stylish, elegant, super camera',
  price: '$500.00'
},
{
  id:3,
  img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
  title: 'Lorem Sunglass',
  description: 'Stylish, elegant, super sunglass',
  price: '$50.00'
},
{
  id:4,
  img: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
  title: 'Lorem Headphone',
  description: 'Stylish, elegant, super Headphone',
  price: '$200.00'
},
{
  id:5,
  img: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
  title: 'Lorem Smart Watch',
  description: 'Stylish, elegant, super smart watch',
  price: '$150.00'
},
{
  id:6,
  img: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
  title: 'Lorem Shoe',
  description: 'Stylish, elegant, super shoe',
  price: '$300.00'
},
]
const main= document.querySelector('#main')
const cartBtn= document.querySelector(".cart")
const sideBar= document.querySelector("#side")
const closeBtn= document.querySelector(".close")
const cartList= document.querySelector("#sidebar")


let cart=[]

products.map((product)=>{
  const productBox= document.createElement("div")
productBox.classList.add("cart-box")
productBox.innerHTML=`
      <div class="product-image">
        <img src=${product.img} alt="">
      </div>
      <div class="product-details">
        <h2 class="product-name">${product.title}</h2>
        <p class="product-description">${product.description}</p>
        <div class="product-selection">
          <p class="product-price">${product.price}</p>
          <div class="number">
            <button class="decrease">-</button>
            <input type="number" min="1" name="" value="1" id=""><button class="increase">+</button>
          </div>
        </div>
        <div class="add"><button onclick="addToCart(${product.id})">Add To cart</button></div>
    </div>
`
main.appendChild(productBox)
})
function addToCart(productId) {
  console.log("click");
  products.find((product)=>{
    if (productId===product.id) {
      cart.push(product)
      displayCart()
    }
  })

  
}
function erase(productId) {
  console.log("click");

  // Keep all items except the one to remove
  cart = cart.filter(product => product.id !== productId);

  // Re-display the updated cart
  displayCart();
}

function displayCart() {
  cartList.innerHTML = ""; // clear existing items

  cart.forEach((product) => {
    let cardItem = document.createElement("div");
    cardItem.classList.add("cart-item");
    cardItem.innerHTML = `
      <div class="cart-product-image">
        <img src="${product.img}" alt="">
      </div>
      <div class="cart-product-details">
        <h2 class="cart-product-name">${product.title}</h2>
        <p class="cart-product-description">${product.description}</p>
        <div class="cart-product-selection">
          <p class="cart-product-price">${product.price}</p>
          <div class="cart-number">
            <button class="decrease">-</button>
            <input type="number" min="1" name="" value="1" id="">
            <button class="increase">+</button>
            <button class="erase-cart" onclick="erase(${product.id})">X</button>
          </div>
        </div>
      </div>
    `;
    cartList.appendChild(cardItem);
  });
}

cartBtn.addEventListener("click", ()=>{
if (sideBar.style.display=="block") {
  sideBar.style.display="none"
}else{
  sideBar.style.display="block"
}
})
closeBtn.addEventListener("click", ()=>{
  sideBar.style.display="none"

})