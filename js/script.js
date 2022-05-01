var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
// var submitError = document.getElementById('subit-error');
// var form = document.getElementById('f-appointment');

function validateName() {
    var name = document.getElementById('fname').value;

    if (name.length == 0) {
        nameError.innerHTML = "*Name can't be empty";
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validatePhone() {
    var num = document.getElementById('fnumber').value;
    if (num.length == 0) {
        phoneError.innerHTML = "*Phone no. is required";
        return false;
    }
    if (num.length != 10) {
        phoneError.innerHTML = "*Phone no. should be of 10 digits";
        return false;
    }
    if (!num.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "*Only digits please";
        return false;
    }
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateEmail() {
    var email = document.getElementById('femail').value;
    if (email.length == 0) {
        emailError.innerHTML = "*Email is required";
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "*Email is invalid";
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateMessage() {
    var message = document.getElementById('fmessage').value;
    var required = 30;
    var left = required - message.length;
    if (left > 0) {
        messageError.innerHTML = left + " more characters required";
        return false;
    }
    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function submitForm(){
    $.ajax({
        type: "POST",
        url: "php/form-process.php",
    });
}

// function validateForm() {
//     if (!validateName() || !validateEmail()) {
// submitError.style.display = 'block';
// submitError.innerHTML = "*Please fix all the errors!!";
// setTimeout(function() { submitError.style.display = 'block'; }, 3000)
// return false;
//     } else {
// submitError.innerHTML = '<i class="fas fa-check-circle"></i>';
// return true;
//     }
// }

// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     if (!validateName() || !validateEmail()) {
//         submitError.style.display = 'block';
//         submitError.innerHTML = "*Please fix all the errors!!";
//         setTimeout(function() { submitError.style.display = 'block'; }, 3000)
//         return false;
//     } else {
//         submitError.innerHTML = '<i class="fas fa-check-circle"></i>';
//         return true;
//     }
// })