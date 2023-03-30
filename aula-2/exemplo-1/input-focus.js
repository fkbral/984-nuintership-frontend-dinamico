const inputs = [userEmail, userPassword];

inputs.forEach((input) => {
  input.onfocus = () => {
    // input.style.backgroundColor = "red";
    // input.style.outline = "none";
    input.classList.toggle("input-focused");
  };

  input.onblur = () => {
    // input.style.backgroundColor = "initial";
    input.classList.toggle("input-focused");
  };
});
