const userListUL = document.querySelector("[data-user-list]");

const users = ["jp@hotmail.com", "mria@gmail.com", "tonia@outlook.com"];

users.map((user) => renderUser(user, userListUL));

function renderUser(email, userListUL) {
  const userLI = document.createElement("li");
  userLI.textContent = email;
  userListUL.append(userLI);
}
