$(document).ready(function () {
  $("#profile-img").on("change", function (event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const inputImage = $("<input>", {
          type: "image",
          src: e.target.result,
          alt: "Uploaded Image",
        }).css({
          "max-width": "250px",
          "max-height": "250px",
        });

        $("#profile").replaceWith(inputImage);
      };

      reader.readAsDataURL(file); // Converts the image to a base64 data URL
    } else {
      alert("Please select a valid image file.");
    }
  });
  $("#id-card-front-img").on("change", function (event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const inputImage = $("<input>", {
          type: "image",
          src: e.target.result,
          alt: "Uploaded Image",
        }).css({
          "max-width": "250px",
          "max-height": "250px",
        });
        $("#id-card-front").replaceWith(inputImage);
      };
      reader.readAsDataURL(file); // Converts the image to a base64 data URL
    } else {
      alert("Please select a valid image file.");
    }
  });
  $("#id-card-back-img").on("change", function (event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const inputImage = $("<input>", {
          type: "image",
          src: e.target.result,
          alt: "Uploaded Image",
        }).css({
          "max-width": "250px",
          "max-height": "250px",
        });
        $("#id-card-back").replaceWith(inputImage);
      };
      reader.readAsDataURL(file); // Converts the image to a base64 data URL
    } else {
      alert("Please select a valid image file.");
    }
  });
  $("#register").click(function (e) {
    e.preventDefault();
    document.location.href = "/livingInfo.html";
  });
});
