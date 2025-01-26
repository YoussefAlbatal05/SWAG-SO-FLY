
let allProducts = document.querySelector(".products") 
let productsInCart = localStorage.getItem("productsInCart")
let totalPrice = document.querySelector(".total-price")
let h555 = document.querySelector(".h55")

if(productsInCart){  // means if there is a username called productsInCart the following will happen
    var product = JSON.parse(productsInCart) // here we will return the items to object once again using JSON.parse() to be able to display them after we changed them to string in the java.home using JSON.stringify()
    drawItems(product) 
    totalP(product)
}

// here we will draw the div that will contain all the information we got from the let product = JSON.parse(productsInCart)

function drawItems(product){
    product.map((item) => {     // we took the same function that was in the java home to write items and we will use it here with some changes
        return  allProducts.innerHTML += ` 
                
  <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 pt-3">
    <div class="card product-card" style="width:300px; height: 438px;">
        <img class="card-img-top" src=${item.imageUrl} alt="Card image" style="height:300px; font-size: 25px;"> 
        <div class="card-body" style="margin-top: -15px;">
          <p class="card-text my-2 itemTitle" style=" font-weight: bold; font-size: 25px;">${item.title}</p>
          <p class="card-text itemPrice" style="font-weight: bold; font-size: 25px;">${item.price}</p>
          <a href="#" class="btn btn-primary remove-btn remove-from-cart-btn" onClick = "removeFromCart( event , ${item.id})" style=" background-color : #868A96; border-color: #868A96 ; padding-bottom: 9px;" >Remove from cart</a>
        </div>
      </div>
  </div>
                
                
            `
        })
    } 


  function totalP(product){
           let total = product.reduce( (acc , item2) => {  // item2 here is the parameter that will iterate on each item in product array like item in the code above this ,  The reduce() method in JavaScript is used to iterate over an array and reduce it to a single value , acc (accumulator) = 0 (initial value) in the first iteration + price2 = item2.price = 2,290  in the first iteration , acc (accumulator) = 2,290 in the second iteration + price = item2.price2 = 3,290  in the second iteration
           let price2 = parseFloat(item2.price.replace(/EGP\s|,/g, '')); // EGP: This matches the literal string "EGP" , \s: This matches any whitespace character (spaces, tabs, etc.) , |: This is the OR operator in regex. It means either match "EGP\s" or match (,)This matches any comma
           return acc + price2;    
      } , 0)

         h555.innerHTML = `Total Price : ${total.toLocaleString()} EGP`

    }
    totalP(product)



function removeFromCart( e , id ){
  e.preventDefault()

  let productsInCart = localStorage.getItem("productsInCart")
  let products = JSON.parse(productsInCart) // we turned it to object again cuz we turned it to string before when we stored it in local storage 

  products = products.filter(products => products.id !== id )  // filter method here iterates in the local storage productsInCart (products) to check if the id of the current product in the loop (products.id) not equal (!==) the id you cklicked on to remove it (evalutes to true) it will be kept in the array , if it evalutes to false this means the product.id = id so it will be filtered from the array
  localStorage.setItem("productsInCart" , JSON.stringify(products))
  
  allProducts.innerHTML = '' ; // here we Cleared the current displayed products then draw it one more time updated without the removed products

  drawItems(products); // here we will redraw the products after we removed a product
  totalP(products) // here we will redraw the products price after we removed a product

}




