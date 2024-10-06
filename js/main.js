'use strict'
// selecting elemts
const btnLogin=document.querySelector(".btn-login");
const emailInput=document.querySelector("input[type='email']")
const passInput=document.querySelector("input[type='password']")
const nameInput=document.querySelector("input[type='text']")
const signupLink=document.querySelector(".sign-up-link ")
const btnSignUp=document.querySelector(".btn-signup")
const btnLogOut=document.querySelector(".btn-logout")
const allInputs=Array.from(document.querySelectorAll("input"))
const welcome= document.querySelector('.welcome')
const signUpAlert=document.querySelector(".signUpAlert")
const sigInAlert=document.querySelector(".signInAlert")
let validation=false
let usersContainer;



//check if localstorage has a values or not 
if (localStorage.getItem("users")===null){
    usersContainer=[]
     location.href='../index.html'
}else{
    usersContainer=JSON.parse(localStorage.getItem('users'))
}

// clear inputs
function clearInputs(){
    nameInput.value=null;
    emailInput.value=null;
    passInput.value=null
   }

// clear input validation
function clearInputValidation(){
nameInput.classList.remove('is-valid')
emailInput.classList.remove('is-valid')
passInput.classList.remove('is-valid')
}


// check if the inputs are
function checkRequiredInputs(inputs, alertElement) {
    for (const input of inputs) {
        if (!input.value) {
            alertElement.classList.remove("d-none");
            alertElement.classList.replace("alert-success",'alrt-danger')
            alertElement.innerHTML = 'All inputs are required!';
            return false;
        }
    }
    return true;
}

// add user function
function addUser(){  
   if(validation&& emailInput.value&&nameInput.value&&passInput.value){
    const user={
        userName:nameInput.value.trim(),
        email:emailInput.value.trim(),
        password:passInput.value.trim()
    }
    usersContainer.push(user)
    localStorage.setItem("users",JSON.stringify(usersContainer))
    location.href='../index.html'
    clearInputs()
    clearInputValidation()
   }
}

// signup page
if (location.pathname.includes('signup.html')){
    btnSignUp.addEventListener("click",function(e){
    e.preventDefault()
   if(checkDataSignUp()){
    addUser()
   }
    })

function checkDataSignUp(){
    signUpAlert.classList.remove("d-none")

    if(!checkRequiredInputs(allInputs,signUpAlert)) return
    for(const user of usersContainer){
        if(emailInput.value===user.email){
            signUpAlert.innerHTML='email already exists'
            signUpAlert.classList.replace("alert-success",'alert-danger')
          return  false
        }
    }

    signUpAlert.classList.replace("alert-danger",'alert-success') 
    signUpAlert.innerHTML='success'
    return true
}
// validation to the inputs
for (const input of allInputs) {

    const regex={
        userName:/^[A-Za-z][A-Za-z0-9_-]{2,14}$/,
        email:/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        password:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
       }
    input.addEventListener("input",function(e){

    if (regex[e.target.id].test(e.target.value.trim())){
        e.target.classList.add('is-valid')
        e.target.classList.remove('is-invalid')
        e.target.closest(".form-floating").nextElementSibling.classList.replace("d-block",'d-none')
        validation=true
    }
    
    else{
        e.target.classList.remove('is-valid')
        e.target.classList.add('is-invalid')
        e.target.closest(".form-floating").nextElementSibling.classList.replace("d-none",'d-block')
      validation=false
       }
    })
}
}


// login page
if(location.pathname.includes("index.html")){
    btnLogin.addEventListener("click",function(e){
        e.preventDefault()

        if(!checkRequiredInputs(allInputs,sigInAlert)) return

        for(const user of usersContainer){
                if(user.email==emailInput.value.trim()&&user.password==passInput.value.trim()){
                sigInAlert.classList.add("d-none")
                localStorage.setItem('loggedInUser', JSON.stringify(user));
                location.href='pages/welcome.html'  
                return
            }
            
        }
        sigInAlert.innerHTML='incorrect email or password!'
        sigInAlert.classList.remove("d-none")
    })
   
}


// welcome page
if(location.pathname.includes('welcome.html')){
const loggrdObj=JSON.parse(localStorage.getItem("loggedInUser"))
welcome.innerHTML=`Welcome <span class='fw-bold'>${loggrdObj.userName}</span>`
btnLogOut.addEventListener("click",function(){
     localStorage.removeItem('loggedInUser')
    location.href='../index.html' 
})
}





