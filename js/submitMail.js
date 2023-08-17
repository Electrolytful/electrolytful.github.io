// function to send an email from contact form through EmailJS.  < needs check to see if response returned OK or an error >
// contact form requires some input validation
async function submitMail() {
  const params = {
    name: document.getElementById("name").value,
    number: document.getElementById("number").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const res = await emailjs.send("service_qjun3uq", "template_g4rwbb9", params);
  alert("Your email has been sent successfully. Thank you!");
}
