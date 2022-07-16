//admin, admin
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username.toUpperCase()=='ADMIN' && username == 'admin'){
        alert('que la fuerza te acompañe');
    }
    else{
        alert('algo anda mal');
    }
}