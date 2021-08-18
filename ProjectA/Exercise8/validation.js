window.onload = main;
function main() {
    
    const input = document.querySelector('input');

    input.addEventListener('input', () => {
        input.setCustomValidity('');
        input.checkValidity();
    });


    password = document.getElementById('passw');
    password2 = document.getElementById('passw2');
    password2.onchange = function (){
        if(password.value == password2.value) {
            this.setCustomValidity('');
        } else {
            password2.setCustomValidity('Password did not match');
            password2.reportValidity();
        }
    }
    
    username = document.getElementById('uname');
    username.onchange = function(){
        if(username.value == null || username.value == ""){
            username.setCustomValidity("Enter an username");
            username.reportValidity();
        }
    }
    
    var maxYear = (new Date()).getFullYear();

    
    field = document.getElementById('birthday');

        field.onchange = function(){
        console.log(field.value);
        if(Date.parse(field.value) < Date.parse('1911-01-01')){
            field.setCustomValidity("Too old!");
            field.reportValidity();
            
        } else if(Date.parse(field.value) > Date.parse(maxYear+'-01-01')){
            field.setCustomValidity("Too young!");
            field.reportValidity();
        }
    }   
}