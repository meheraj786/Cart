const products=
[{
  img: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch.jpg',
  title: 'Lorem Watch',
  description: 'Stylish, elegant, super watch',
  price: '$100.00'
},
{
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmyib2yh6G255_f2sPPcpl9DisYjb1osty4codJdDh2vHp1PwOGRXiwXMKBQooUR6Mb0Q&usqp=CAU',
  title: 'Lorem Camera',
  description: 'Stylish, elegant, super camera',
  price: '$500.00'
},
{
  img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
  title: 'Lorem Sunglass',
  description: 'Stylish, elegant, super sunglass',
  price: '$50.00'
},
{
  img: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
  title: 'Lorem Headphone',
  description: 'Stylish, elegant, super Headphone',
  price: '$200.00'
},
{
  img: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
  title: 'Lorem Smart Watch',
  description: 'Stylish, elegant, super smart watch',
  price: '$150.00'
},
{
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
        <div class="add"><button>Add To cart</button></div>
    </div>
`
main.appendChild(productBox)
})

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