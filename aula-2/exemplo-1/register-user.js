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

  users.push(user.email);
  renderUser(user.email, userListUL);

  // [...inputs].map((input) => {
  //   user[input.type] = input.value;
  // });

  alert(JSON.stringify(user));
};
