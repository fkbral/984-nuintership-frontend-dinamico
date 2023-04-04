const userListUL = document.querySelector("[data-user-list]");

const localStorageUsersKey =
  "Nuintership@users-280af6c6-42c9-4ad5-9ef8-f590d5397608";
let userEmails = JSON.parse(localStorage.getItem(localStorageUsersKey)) ?? [];
localStorage.setItem(localStorageUsersKey, JSON.stringify(userEmails));
// localStorage.setItem("users", JSON.stringify(users));

userEmails.map((user) => renderUser(user, userListUL));

function renderUser(email, userListUL) {
  const userLI = document.createElement("li");
  const userSpan = document.createElement("span");
  const button = document.createElement("button");

  userSpan.textContent = email;
  button.textContent = "deletar";
  button.dataset.forUser = email;
  userLI.dataset.forUser = email;

  button.onclick = (event) => {
    const userEmailToRemove = event.target.dataset.forUser;
    userEmails = userEmails.filter((email) => email !== userEmailToRemove);
    const userLiToRemove = document.querySelector(
      `[data-user-list] li[data-for-user="${userEmailToRemove}"]`
    );
    userLiToRemove.remove();
    localStorage.setItem(localStorageUsersKey, JSON.stringify(userEmails));
  };

  userLI.append(userSpan, button);
  userListUL.append(userLI);
}
