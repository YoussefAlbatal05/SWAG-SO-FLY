
let loginBtn = document.querySelector(".login-btn")
let registerBtn = document.querySelector(".register-btn")
let nameOfUser = document.querySelector(".name-of-the-user")
let logoutBtn =  document.querySelector(".logout-btn")

if(localStorage.getItem("username")){  // checks if there is a username in local storage , if there is username the buttons will dissapear and the name of the user will appear instead
    loginBtn.remove()
    registerBtn.remove()
    nameOfUser.style.display = "flex"   // here flex is to show the name cause we give it display none in the html
    nameOfUser.innerHTML = "Welcome, " + localStorage.getItem("username")  // here we will get the username from local storage and write it in html
    logoutBtn.style.display = "flex"
    logoutBtn.style.textDecoration = "none"; 
} 


logoutBtn.addEventListener("click" , deleteData)
function deleteData(){
    localStorage.clear()
    setTimeout ( () => {
            window.location("index (2).html")
     } , 1500 )
}