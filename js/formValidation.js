// variables to hold input fields
const name = document.getElementById("name");
const number = document.getElementById("number");
const email = document.getElementById("email");

// setting custom error messages for the inputs
name.oninvalid = function(event) {
    event.target.setCustomValidity("• Cannot be empty\n• Should contain only upper and lowercase letters\n• Maximum 15 characters");
}

number.oninvalid = function(event) {
    event.target.setCustomValidity("• Cannot be empty\n• Should contain only digits\n• Number should be 10-11 digits");
}

email.oninvalid = function(event) {
    event.target.setCustomValidity("• Cannot be empty \n• Should be a valid email address e.g. example@example.com");
}

// resetting error messages on new input
name.oninput = function(event) {
    event.target.setCustomValidity("");
}

number.oninput = function(event) {
    event.target.setCustomValidity("");
}

email.oninput = function(event) {
    event.target.setCustomValidity("");
}
