$(document).ready(function () {
  // Showing a new select for the iranian people
  $("#citizenship").change(function (e) {
    e.preventDefault();

    $("#residenceDisplay").remove(); // Always clean up

    var selectedOption = $(this).val();
    if (selectedOption == "Iranian") {
      $(`<div class="form mb-3 me-5 position-relative" id="residenceDisplay">
                    <i class="bi bi-layers position-absolute top-50 translate-middle-y me-3 text-secondary"
                        style="right: 0.75rem; font-size: 18px;"></i> 
                    <select class="form-select form-select-lg mb-3 ps-5 text-body-secondary fs-6" id="residence">
                        <option selected>نوع اقامت</option>
                        <option value="Resident">ساکنین</option>
                        <option value="Employed">شاغلین</option>
                        <option value="Ownership">مالکیت</option>
                    </select>
                </div>`).insertAfter("#citizenshipDisplay");
    }
  });

  // Showing the profession kind after the user selects the Employed value from residence id
  $(document).on("change", "#residence", function (e) {
    e.preventDefault();
    var selectedOption = $(this).val();

    $("#professionKindDisplay").remove(); // Always clean up

    if (selectedOption == "Employed") {
      $(`
            <div class="form mb-3 me-5 position-relative" id="professionKindDisplay">
                <i class="bi bi-layers position-absolute top-50 translate-middle-y me-3 text-secondary"
                        style="right: 0.75rem; font-size: 18px;"></i>
                <select class="form-select form-select-lg mb-3 ps-5 text-body-secondary fs-6" id="professionKind">
                    <option selected><i class="bi bi-layers"></i>انتخاب نوع شاغلین</option>
                    <option value="FreeZone"><i class="bi bi-layers"></i>کارکنان مناطق آزاد و دستگاه‌های اجرایی</option>
                    <option value="Others"><i class="bi bi-layers"></i>سایر</option>
                </select>
            </div>
        `).insertAfter("#residenceDisplay");
    }
  });

  // Showing the free zone select option after choosing FreeZone
  $("#freeZone").change(function (e) {
    e.preventDefault();

    $("#select-free-zone").remove(); // Always clean up

    var selectedOption = $(this).val();
    if (selectedOption == "FreeZone") {
      $(`<div class="form mb-3 me-5 position-relative" id="select-free-zone-display">
                    <i class="bi bi-layers position-absolute top-50 translate-middle-y me-3 text-secondary"
                        style="right: 0.75rem; font-size: 18px;"></i>
                    <select class="form-select form-select-lg mb-3 ps-5 text-body-secondary fs-6" id="select-free-zone">
                        <option selected>انتخاب منطقه آزاد تجاری-صنعتی</option>
                        <option value="Ilam">منطقه آزاد تجاری-صنعتی ایلام</option>
                        <option value="Busher">منطقه آزاد تجاری-صنعتی بوشهر</option>
                        <option value="ImamKhomeiniAirport">منطقه آزاد تجاری-صنعتی شهر فرودگاه امام خمینی(ره)</option>
                        <option value="Sarakhs">منطقه آزاد تجاری-صنعتی سرخس</option>
                        <option value="Dowqarun">منطقه آزاد تجاری-صنعتی دوغارون</option>
                        <option value="Arvand">منطقه آزاد تجاری-صنعتی اینچه‌برون</option>
                        <option value="Anzali">منطقه آزاد تجاری-صنعتی انزلی</option>
                        <option value="Mazandaran">منطقه آزاد تجاری-صنعتی مازندران</option>
                        <option value="Qeshm">منطقه آزاد تجاری-صنعتی قشم(شهرستان قشم)</option>
                        <option value="kish">منطقه آزاد تجاری-صنعتی کیش</option>
                        </select>
                </div>`).insertAfter("#freeZoneDisplay");
    }
  });

  $("#next-page").click(function (e) {
    e.preventDefault();
    localStorage.setItem("phoneNumber", $("#phone-number").val());
    document.location.href = "/phoneVerification.html";
  });
});
