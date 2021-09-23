window.onload = () => {
  // Variables

  const buttons = document.querySelectorAll("button");
  const emailText = document.querySelectorAll(".email-text");
  const inputFields = document.querySelectorAll(".email-input");
  // Functions
  function checkEmail(emailIndex) {
    let regex = /[a-z0-9]+@[a-z]+\.[a-z]+/i;
    console.log(emailIndex);
    if (regex.test(inputFields[emailIndex].value)) {
      emailText[emailIndex].style.display = "none";
      inputFields[emailIndex].style.border = "1px solid black";
    } else {
      emailText[emailIndex].style.display = "block";
      inputFields[emailIndex].style.border = "1px solid #dc143c";
    }
  }

  // Event listeners
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      let regex = /[0-9]/g;
      let id = e.currentTarget.id.match(regex);
      checkEmail(parseInt(id - 1));
    });
  });
};
