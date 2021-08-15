document.getElementById('login-button').addEventListener('click',function () {
    //getting user email 
    const emailField= document.getElementById('user-email');
    const userMail= emailField.value;
    
    //user password 
    const passwordField= document.getElementById('user-pass');
    const userPass= passwordField.value;

    if(userMail=='rayhan@gmail.com' && userPass=="Rayhan"){
        
        window.location.href='myAccount.html'
    }
    else{
        window.location.href='myAccount.html'
    }
    
})