
let username = document.querySelector(".username")
let password = document.querySelector(".password")
let signInBtn = document.querySelector(".sign-in-btn")
let signInForm = document.querySelector(".sign-in-form")



signInForm.addEventListener( "submit" , function(e){
    e.preventDefault()
})



signInBtn.addEventListener( "click" , function(e){
        e.preventDefault()

        if( username.value === "" || password.value === ""){
            alert("Fill Fields")
        } else {

            let users = JSON.parse(localStorage.getItem("users"));
            let userFound = users.find( user => user.username.trim() === username.value && user.password.trim() === password.value ) // we will use find method to find the matching username and password user is like a parameter that will check every object in the array users , so user in user.username.trim() will check every username in the array if there is one that matches the one the user put (username.value)
            
        if(userFound){
         
            localStorage.setItem("username", username.value); // here we will add the the key to direct us to the index.html cuz the code in java home if(localStorage.getItem("username")) username and its value will be the name the user will write  

            setTimeout( () => {
                   window.location = "index.html"
                } , 1200 )

            } else {
                alert("Wrong Data") // if the data applied is wrong
            }
        

        }

        
})


