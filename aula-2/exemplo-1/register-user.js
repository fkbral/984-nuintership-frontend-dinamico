const registerForm = document.querySelector("[data-register-user]");
// const inputs = registerForm.querySelectorAll("input");
const userEmail = registerForm.querySelector("input#user-email");
const userPassword = registerForm.querySelector("input#user-password");

registerForm.onsubmit = (event) => {
  event.preventDefault();
  const user = {
    email: userEmail.value,
    password: userPassword.value,
  };

  const userListUL = document.querySelector("[data-user-list]");

  if (userEmails.includes(user.email)) {
    alert("Email já cadastrado");
    return;
  }

  userEmails.push(user.email);
  localStorage.setItem(localStorageUsersKey, JSON.stringify(userEmails));
  renderUser(user.email, userListUL);

  // userEmail.value = "";
  // userPassword.value = "";

  registerForm.reset();

  // [...inputs].map((input) => {
  //   user[input.type] = input.value;
  // });
};
