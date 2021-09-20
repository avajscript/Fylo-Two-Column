window.onload = () => {
  // Variables

  const buttons = document.querySelectorAll("button");
  const emailText = document.querySelectorAll(".email-text");
  // Functions
  function checkEmail(emailField) {}

  // Event listeners
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      let regex = /[0-9]/g;
      let id = e.currentTarget.id.match(regex);
      console.log(e.currentTarget);
    });
  });
};
