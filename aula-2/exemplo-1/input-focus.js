const inputs = [userEmail, userPassword];

inputs.forEach((input) => {
  input.onfocus = () => {
    // input.style.backgroundColor = "red";
    // input.style.outline = "none";
    input.classList.add("input-focused");
    // input.classList.toggle("input-focused");
  };

  input.onblur = () => {
    // input.style.backgroundColor = "initial";
    input.classList.remove("input-focused");
    // input.classList.toggle("input-focused");
  };
});
