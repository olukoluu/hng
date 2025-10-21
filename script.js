const form = document.getElementById('contactform');
const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;

const successMessage = document.getElementById("success-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.name.value;
  const email = form.email.value;
  const subject = form.subject.value;
  const message = form.message.value;

  const errors = {
    name: document.getElementById("name-error"),
    email: document.getElementById("email-error"),
    subject: document.getElementById("subject-error"),
    message: document.getElementById("message-error"),
  };

  Object.values(errors).forEach(err => err.textContent = "");
  successMessage.classList.add("hidden");

  let valid = true;

  if (name === "") {
    errors.name.textContent = "Full name is required.";
    valid = false;
  }

  if (email === "") {
    errors.email.textContent = "Email is required.";
    valid = false;
  } else if (!emailRegExp.test(email)) {
    errors.email.textContent = "Enter a valid email address.";
    valid = false;
  }

  if (subject === "") {
    errors.subject.textContent = "Subject is required.";
    valid = false;
  }

  if (message === "") {
    errors.message.textContent = "Message is required.";
    valid = false;
  } else if (message.length < 10) {
    errors.message.textContent = "Message must be at least 10 characters.";
    valid = false;
  }

  if (valid) {
    successMessage.classList.remove("hidden");
    form.reset();
  }
});
