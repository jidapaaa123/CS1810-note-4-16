const setUpForm = () => {
  const formElement = document.getElementById("file-upload-form");
  formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("i am here");
  });
};

setUpForm();
