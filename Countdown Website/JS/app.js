const submitBtn = document.querySelector(".js-submit-btn");
const email = document.querySelector(".js-email-input");
const passwordLogin = document.querySelector(".js-password-input-login");
const passwordSingup = document.querySelector(".js-password-input-singup");
const LoginPage = document.querySelector(".Login");
const SingupPage = document.querySelector(".SingUp");
const mainPage = document.querySelector(".page")

//When Login/Singup button is clicked, check is the form element are valid

const loginForm=document.querySelector(".js-form-login");
const singupForm=document.querySelector(".js-form-singup");

singupForm.addEventListener('submit', (e)=>{
    if (passwordSingup.value.trim().length<8){
        e.preventDefault();
        showErrorMessagePassword();
    }else{
        unshowMessagePassword();
    };

    if (!isEmail(email.value)){
        e.preventDefault();
        showErrorMessageEmail();
    }else{
        unshowMessageEmail();
    };
});

//DEFINIR ADDEVENT POUR LE LOGIN FORM

//show error message if mail or passord are not valid

function showErrorMessagePassword(){
    const message = ".js-password-error-message"
    $(message).css("display","block");
}
function showErrorMessageEmail(){
    const message = ".js-email-error-message"
    $(message).css("display","block");
}

//unshow error message if mail or passord are valid

function unshowMessageEmail(){
    const message = ".js-email-error-message"
    $(message).css("display","none");
}
function unshowMessagePassword(){
    const message = ".js-password-error-message"
    $(message).css("display","none");
}

//check if email is valid

function isEmail(email){
    return  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};

//show/unshow password if the checkbox is checked or not

const checkboxLogin = document.querySelector(".js-checkbox-login");
const checkboxSingup = document.querySelector(".js-checkbox-singup");


checkboxLogin.addEventListener("change", function(){
    if (this.checked){
        console.log("checked")
        document.querySelector(".js-password-input-login").type="text"
    }else{
        console.log("unchecked")
        console.log(this.checked)
        document.querySelector(".js-password-input-login").type="password"
    }
});

checkboxSingup.addEventListener("change", function(){
    if (this.checked){
        console.log("checked")
        document.querySelector(".js-password-input-singup").type="text"
    }else{
        console.log("unchecked")
        console.log(this.checked)
        document.querySelector(".js-password-input-singup").type="password"
    }
});


function displayLogin(){
    $(LoginPage).css("scale","1");
    $(SingupPage).css("scale","0");
    $(mainPage).css("display","none");
};

document.querySelector(".js-redirect-to-login").addEventListener("click",function(){
    displayLogin()
})

document.querySelector(".js-display-login").addEventListener("click",function(){
    displayLogin();
});

function displaySingup(){
    $(LoginPage).css("scale","0");
    $(SingupPage).css("scale","1");
    $(mainPage).css("display","none");
};

document.querySelector(".js-redirect-to-singup").addEventListener("click",function(){
    displaySingup()
})

document.querySelector(".js-display-singup").addEventListener("click",function(){
    displaySingup();
});

function displayPage(){
    $(LoginPage).css("scale","0");
    $(SingupPage).css("scale","0");
    $(mainPage).css("display","block");
};

const croix = [document.querySelector(".js-login-croix"),document.querySelector(".js-singup-croix")];
console.log(croix)
croix.forEach(function(element){
    element.addEventListener("click",function(){
        displayPage();
    });
});
/*
document.querySelector(".page").addEventListener("click",function(){
    displayPage();
})
*/