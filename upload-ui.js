const setUpForm = () => {
  const formElement = document.getElementById("file-upload-form");
  formElement.addEventListener("submit", async (e) => {
    e.preventDefault();
    const fileInputElement = document.getElementById("file-upload");
    console.log(fileInputElement.files);
    await sendFileToAPIInSVC(fileInputElement.files[0]);
  });
};

const sendFileToAPIInSVC = async (file) => {
  //FormData is amazing to work with images and files. JSON is just text-based, not compatible with IMG
  const formData = new FormData();
  formData.append("uploadedImage", file);

  await fetch("http://localhost:5010/imageUpload", {
    // we need a link to the API here
    method: "POST",
    body: formData, // NO NEED to .JSON()
  });
};

setUpForm();
