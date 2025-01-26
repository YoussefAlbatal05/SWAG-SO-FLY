// we want to show the name of the user in home page after signnig in replaceing the sign buttons and hide the sign in and sign up buttons 


let loginBtn = document.querySelector(".login-btn")
let registerBtn = document.querySelector(".register-btn")
let nameOfUser = document.querySelector(".name-of-the-user")
let logoutBtn =  document.querySelector(".logout-btn")


if(localStorage.getItem("username")){  // checks if there is a username in local storage , if there is username the buttons will dissapear and the name of the user will appear instead
    loginBtn.remove()
    registerBtn.remove()
    nameOfUser.style.display = "flex"   // here flex is to show the name cause we give it display none in the html
    nameOfUser.innerHTML = "Welcome, " + localStorage.getItem("username") + " !"  // here we will get the username from local storage and write it in html
    logoutBtn.style.display = "flex"
    logoutBtn.style.textDecoration = "none"; 
} 


logoutBtn.addEventListener("click" , deleteData)
function deleteData(){
    localStorage.removeItem("username")
    setTimeout ( () => {
            window.location("index (2).html")
     } , 1500 )
}






let products = [ // we will write our products in the form of objects 
    {
        id : 1,
        title : "Off-White Sweater",
        price : "2,290 EGP",
        category : "Sweater",
        imageUrl : "imgs/211510093_516227029712739_7984597615674292056_n.jpg",
    },

    {
        id : 2,
        title : "Rick owens Shoes",
        price : "3,290 EGP",
        category : "Shoes",
        imageUrl : "imgs/881956.webp",
        
    },

    {
        id : 3,
        title : "Louis Vuitton Bag",
        price : "5,290 EGP",
        category : "Bag",
        imageUrl : "imgs/413231444_681473837166897_683434171170463269_n.jpg",
    },

    {
        id : 4,
        title : "Rick owens Vomit jacket",
        price : "4,290 EGP",
        category : "Jacket",
        imageUrl : "imgs/bdzh7xp1kdw71.jpg",
    },

    {
        id : 5,
        title : "Vlone X Testing",
        price : "6,290 EGP",
        category : "Jacket",
        imageUrl : "imgs/8c2552721707a15f7669b4ec739ba1e7.jpg",
    },

    {
        id : 6,
        title : "Moncler Grenoble poncho",
        price : "6,590 EGP",
        category : "Poncho",
        imageUrl : "imgs/best-young-thug-outfits-uncut-gems-133954166.jpg",
    },

    {
        id : 7,
        title : "Louis Vuitton Coat",
        price : "6,590 EGP",
        category : "Coat",
        imageUrl : "imgs/403822975_2075233482835548_3529572441562149836_n.jpg",
    },

    {
        id : 8,
        title : "Designer Jacket",
        price : "8,700 EGP",
        category : "Jacket",
        imageUrl : "imgs/29072021_KANYE_010.jpg",
    },

    {
        id : 9,
        title : "Moschino pink cartoon face",
        price : "2,890 EGP",
        category : "Sweater",
        imageUrl : "imgs/playboi-carti-cover-story.jpg",
    },


]

// we will take one product and make the dynamic changes in $ so it will change with each product and write its descriptions instead of writing in html

let allProducts = document.querySelector(".products") // here we will call the div that will carry all the products
function drawItems(){
    products.map((item) => {     // map means it will check on every item    // item here refers to the objects we wrote above  
        // the return line here will return the products data to the div html that is vacant
        return  allProducts.innerHTML += ` 
                
 <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 pt-3">
    <div class="card product-card" style="width:300px; height: 460px; ">
        <img class="card-img-top" src=${item.imageUrl} alt="Card image" style="height:300px"> 
        <div class="card-body container" style="margin-top: -30px;">
          <p class="card-text my-3 itemTitle"  style="padding-top: 10px; font-weight: bold; font-size: 25px;" >${item.title}</p>
          <p class="card-text my-2 itemCategory" style="padding-bottom: 3px; font-size: 20px;">${item.category}</p>
          <p class="card-text my-2 itemPrice" style="font-weight: bold; font-size: 20px;">${item.price}</p>
          <a href="#" class="btn btn-primary my-1 add-to-cart-btn" onClick="addToCart(event, ${item.id})" style="background-color : #868A96; border-color: #868A96;">Add to cart</a>
          <i class="fa-regular fa-heart d-flex justify-content-end itemIcon" style="margin-left: auto; width: 20px; cursor: pointer; margin-top: -29px; font-size: 22px;"></i>
        </div>
    </div>
</div>
                
            `
        })
    } 

drawItems()


// this code will put the products in the div of the cart 
let viewAllProductsDiv = document.querySelector(".View-Products-Parent .View-Products-son") 
let viewProductsBtn = document.querySelector(".view-products-btn")

function addToCart( e , id ){
    e.preventDefault();
    let choosenItem = products.find( (item) => item.id === id); // here it will check products and if the id of the item (product) = the id you chose it will return the product full details 
    viewAllProductsDiv.innerHTML += `<div class="product-item"><p>${choosenItem.title}</p></div>`;  // we chose <p> cuz its a block element so the products will be under each other not in the same line , choosenItem already return the product so will write .title and it will return the title of the product
}

// this is the code to show and hide your products div when you click on the cart icon
let shoppingCartIcon = document.querySelector(".cart-icon");
let viewProductsParent = document.querySelector(".View-Products-Parent");

shoppingCartIcon.addEventListener("click", opencart);
function opencart() {
    // Check if any products have been added to the cart
    if (viewAllProductsDiv.innerHTML != "") {
        // Toggle the display of the view products parent (including the button)
        if (viewProductsParent.style.display === "none" || viewProductsParent.style.display === "") {
            viewProductsParent.style.display = "block"; // Show the products list and button
        } else {
            viewProductsParent.style.display = "none"; // Hide them
        }
    }
}

viewProductsBtn.addEventListener("click", function () {
    window.location = "index (4).html";
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// this code will put the items you chose in array to display it the product-cart html (index (4).html) and will make the badge of course , all of this is in the case that there is a username else you will go to index (2).html

let addedItems = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : []    // this checks if there is a product in productsInCart in local storage we will get it and change it to object and then use it in if(addedItems) to get the title and put it in length of the badge if not it will put it in array  ( ?  yes : no)
     

    if(localStorage.getItem("username")){  
    // this code is to get the item you clicked on and set it in local storage and then will call all the products to get thier length and write it in the badge
        function addToCart( e , id ){
            e.preventDefault();
            let choosenItem = products.find( (item) => item.id === id); // find method here iterates in the array products as (item.id) till it matches the product you clicked on as (id)
            viewAllProductsDiv.innerHTML += `<div class="product-item"><p>${choosenItem.title}</p></div>`  // we chose <p> cuz ita a block element so the products will be under each other not in the same line , choosenItem already return the product so will write .title and it will return the title of the product
             
              addedItems = [...addedItems , choosenItem]  // here it will add the (choosenItem) which is the product you will click on to the array (addedItems) we created above 
              localStorage.setItem("productsInCart" , JSON.stringify(addedItems))  // here we made item in localStorage and named it productsInCart and we will put addedItems in it , we will change the addedItems from object to string by using JSON.stringfy to display the item full details in local storage  
           

            let cartsProductsLength = document.querySelectorAll(".product-item") // this will call all the products you will click on
            badge.innerHTML = cartsProductsLength.length   // this will write in html the number of the products you will click on
        }
    } else {
      
            window.location = "index (2).html"

    }

    // this code will keep the number of the products you chose showing even after refreshing 
    let badge = document.querySelector(".countt")
    if(addedItems){ // if there is products in addedItems we will map every item and take the title 
        addedItems.map(item => {
             viewAllProductsDiv.innerHTML += `<div class="product-item"><p>${item.title}</p></div>`
        })

        badge.innerHTML = addedItems.length // then put the length here in the badge
    }





///////////////////////////////////////////////////////////////////////////////////////////////////////






    


let viewProducts = document.querySelector(".view-products-btn")

const viewProduct = () => {
     window.location = "index (4).html"
}
viewProducts.onclick = viewProduct;






let selectOption = document.querySelector(".select-option")
let productSearch = document.querySelector(".product-search")

productSearch.addEventListener("input" , productsSearch)
function  productsSearch(selectedFilter , choosedProduct){
     selectedFilter = selectOption.value  // here we got the value we chose ( Search By Name or Search By Category )
     choosedProduct = productSearch.value.toLowerCase() // here we got the value we wrote ( title or category of the product we are searching for )

     let filteredProducts 
     if(selectedFilter === "Search By Name"){ // if we chosed search by name 
         filteredProducts = products.filter(item => item.title.toLowerCase().includes(choosedProduct) ) // we will make a new array using filter method and the function will be that we get item according to the name of the product we search for (choosedProduct)

     } else if(selectedFilter === "Search By Category") {
            filteredProducts = products.filter(item => item.category.toLowerCase().includes(choosedProduct)) // we will make a new array using filter method and the function will be that we get item according to the name of the product we search for (choosedProduct)
     }

     displayFilteredProducts(filteredProducts);
}  // filter method used to make an array that satisfies the function (it return output)

function displayFilteredProducts(filteredProducts){

    allProducts.innerHTML = ""

    if(filteredProducts.length === 0){
        allProducts.innerHTML = "<p>No Products Found</p>"
        return;
    }

    filteredProducts.forEach(item => { 
        allProducts.innerHTML +=  `           
 <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 pt-3">
    <div class="card" style="width:300px; height: 460px;">
        <img class="card-img-top" src=${item.imageUrl} alt="Card image" style="height:300px"> 
        <div class="card-body container" style="margin-top: -30px;">
          <p class="card-text my-3"  style="padding-top: 10px; font-weight: bold;" >${item.title}</p>
          <p class="card-text my-2">${item.category}</p>
          <p class="card-text my-2" style="font-weight: bold;">${item.price}</p>
          <a href="#" class="btn btn-primary my-1" onClick = "addToCart( event , ${item.id})" >Add to cart</a>
          <i class="fa-regular fa-heart d-flex justify-content-end" style="margin-left: auto; width: 20px; cursor: pointer; margin-top: -29px; font-size: 22px;"></i>
        </div>
    </div>
</div>
                
        `
    }); // forEach is used to iterate inside the filteredProducts array and generate a product card for each product in the array 
        // forEach doesnt return a result its just used to render or process something
}

