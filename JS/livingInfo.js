$(document).ready(function () {
  // Initializing the map 
  var map = L.map("map").setView([35.6892, 51.3890], 12);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  var marker = L.marker([35.6892, 51.3890]).addTo(map);

  let debounceTimeout = null;
  $("#user-address").on("input", function () {
    const city = $(this).val();

    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      updateMapByCity(city);
    }, 500);

  // This function updates the map when the user put a city name
  function updateMapByCity(city) {
    if (!city || city.length < 2) return; // Prevents from short inputs

    $.getJSON(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        city
      )}`,
      function (data) {
        if (data.length > 0) {
          var lat = parseFloat(data[0].lat);
          var lon = parseFloat(data[0].lon);

          map.setView([lat, lon], 13);

          if (marker) {
            marker.setLatLng([lat, lon]).setPopupContent(city).openPopup();
          } else {
            marker = L.marker([lat, lon])
              .addTo(map)
              .bindPopup(city)
              .openPopup();
          }
        }
      }
    );
  }
  });
  $("#register").click(function (e) { 
    e.preventDefault();
    document.location.href = "followUp.html";
  });
});
