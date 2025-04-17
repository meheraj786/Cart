const products=
[{
  img: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch.jpg',
  title: 'Lorem Watch',
  description: 'Stylish, elegant, super watch',
  price: '$100.00'
},
{
  img: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch.jpg',
  title: 'Lorem Watch',
  description: 'Stylish, elegant, super watch',
  price: '$100.00'
},
{
  img: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch.jpg',
  title: 'Lorem Watch',
  description: 'Stylish, elegant, super watch',
  price: '$100.00'
},
{
  img: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch.jpg',
  title: 'Lorem Watch',
  description: 'Stylish, elegant, super watch',
  price: '$100.00'
},
]
const main= document.querySelector('#main')

products.map((product)=>{
  const productBox= document.createElement("div")
productBox.classList.add("cart-box")
productBox.innerHTML=`
      <div class="product-image">
        <img src=${product.img} alt="">
      </div>
      <div class="product-details">
        <h2 class="product-name">${product.title}</h2>
        <p class="product-description">Product Description</p>
        <div class="product-selection">
          <p class="product-price">${product.price}</p>
          <div class="number">
            <button class="decrease">-</button>
            <input type="number" min="1" name="" value="1" id=""><button class="increase">+</button>
          </div>
        </div>
        <div class="add"><button>Add To cart</button></div>
    </div>
`
main.appendChild(productBox)
})
