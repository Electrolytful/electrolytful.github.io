// submit event listener
const form = document.getElementById("contact-form");
form.addEventListener("submit", submitMail);


// function to get user input from the contact form and submit the mail
async function submitMail() {
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const params = {
    name,
    number,
    email,
    message
  };

  const res = await emailjs.send("service_qjun3uq", "template_g4rwbb9", params);
  alert("Your email has been sent successfully. Thank you!");

  // reset form
  form.reset();
}
