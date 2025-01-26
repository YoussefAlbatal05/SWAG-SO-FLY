// we will call and define the inputs
let username = document.querySelector(".username") 
let email = document.querySelector(".email")
let password = document.querySelector(".password")
let signUpBtn = document.querySelector(".sign-up")
let form = document.querySelector(".sign-up-form")


form.addEventListener("submit" , function(e){  // this will prevent the page to be directed to an error page 
    e.preventDefault();
})  


signUpBtn.addEventListener("click" , function(b){    // here we want to do some prompts to the sign up button to check if the fields is full or not  ,  addEventListener is like what will happen (function) when you do a certain action ( the certain action here is "click")
    b.preventDefault();   // sign up button is type submit so we need to prevent default to go directly to login page               
                       
    if( username.value === "" || email.value === "" || password.value === ""){  // this function means if one of (username , email , password) is empty an alert will appear that i must fill them 
        
            alert("fill data")

    } else {  // here you will write what will happen if you filled the three values , you will store the data filled

 
        let users = JSON.parse(localStorage.getItem("users")) || []   // Get existing users keyword from localStorage, or if its the first user set an empty array if none exist
        
        let newUsers = {    // this is the new data we will get and put in the local storage in the array users
              username : username.value,
              email : email.value,
              password : password.value,
        }
 
        let updatedUsers = [ ...users , newUsers ]  // here we Used the spread operator to add the new user (newUsers) to the existing users array (users)

        localStorage.setItem( "users" , JSON.stringify(updatedUsers) ) 


           setTimeout( () => {   // this is when you want to go to login (index (2).html) after you put the information in sign up
               window.location = "index (2).html"
           } , 1500) // 1500 = 1.5sec.
    }
    
})    