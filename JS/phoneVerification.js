$(document).ready(function () {
  $("#phoneTitle").text(
    `کد ارسال شده به شماره موبایل ${localStorage.getItem(
      "phoneNumber"
    )} را وارد نمائید.`
  );
  let phoneNumber = localStorage.getItem("phoneNumber");
  let html = $("#phoneTitle").html();
  let coloredHtml = html.replace(
    phoneNumber,
    `<span class="text-success-emphasis">${phoneNumber}</span>`
  );
  $("#phoneTitle").html(coloredHtml);
  $("#prev-page").click(function (e) {
    e.preventDefault();
    document.location.href = "/index.html";
  });
  $("#verify").click(function (e) {
    e.preventDefault();
    document.location.href = "/verifyInfo.html";
  });
  $("#phone-number").on("input", function () {
    if ($(this).val().trim() !== "") {
      $("#verify").removeClass("disabled");
    } else {
      $("#verify").addClass("disabled");
    }
  });
});
