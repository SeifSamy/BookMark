var nameInput = document.getElementById('name-login');
var emailInput = document.getElementById('email-login');
var passInput  = document.getElementById('login-password');
var btn1 = document.querySelector('.sign-up');
var data;
if (localStorage.getItem('data') == null) {
    data = [];
} else {
    data = JSON.parse(localStorage.getItem('data'));
}
var userName = JSON.parse(localStorage.getItem('userName'));
function signUp(){
    if(isEmpety()==false)
    {
        document.querySelector('.exit').classList.replace('d-none','d-block')
        return false;
    }
    if(isNameValid()&&isEmailValid()&&isPassValid)
    {
        var users = {
            name : nameInput.value,
            email : emailInput.value,
            pass : passInput.value
        }
        if(data.length==0){
            data.push(users);
            localStorage.setItem('data' , JSON.stringify(data));
            document.querySelector('.text-success').classList.replace('d-none','d-block');
            return true;
        }
        else{
            document.querySelector('.text-success').classList.add('d-none');
        }
        if(isEmailExit()==false)
        {
            document.querySelector('.text-danger').classList.replace('d-none','d-block');
        }
        else{
            document.querySelector('.text-danger').classList.add('d-none');
            data.push(users);
            localStorage.setItem('data' , JSON.stringify(data));
            document.querySelector('.text-success').classList.replace('d-none','d-block');
        }
    }
}

function isNameValid(){
    var regexName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm;
    if(regexName.test(nameInput.value))
    return true;
    else 
    return false;
}
function isEmailValid(){
    var regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (regexEmail.test(emailInput.value)) {
        return true;
    } else {
        return false;
    }
}
function isPassValid(){
    var regexPsaa = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    if (regexPsaa.test(passInput.value)) {
        return true;
    } else {
        return false;
    }
}
function isEmpety(){
    if (nameInput.value == ''||emailInput.value==''||passInput.value=='') {
        return false;
    } else {
        return true;
    }
}

function isEmailExit(){
    for(var i = 0;i<data.length;i++)
    {
        if(data[i].email.toLowerCase()==emailInput.value.toLowerCase())
        {
            return false;
        }
        else{
            return true;
        }
    }
}

function login(){
    var emailLogin = document.getElementById('emailLogin');
    var passLogin = document.getElementById('loginPassword');
    var btn = document.getElementById('loginBtn');
    var wrongMsg = document.getElementById('wrongMsg');
    if(emailLogin.value == ''||passLogin.value == '')
    {
        var fillMsg = document.getElementById('fillMsg');
        fillMsg.classList.replace('d-none','d-block');
        return false;
    }
    for(var i = 0;i<data.length;i++)
    {
        if(data[i].email.toLowerCase()==emailLogin.value.toLowerCase()&&data[i].pass.toLowerCase()==passLogin.value.toLowerCase())
        {
            localStorage.setItem('userName', JSON.stringify(data[i].name));
            btn.setAttribute('href','welcome.html');
        }
        else{
            wrongMsg.classList.replace('d-none','d-block');
        }
    }
    

}
function displayUserName(){
    var welcome = document.getElementById('welcome');
    welcome.innerHTML = 'Welcome '+ userName;
}
function logOut(){
    var logOutBtn = document.getElementById('logOut');
    localStorage.removeItem('userName');
    logOutBtn.setAttribute('href','index.html');
}