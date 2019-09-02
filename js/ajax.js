function creationVoiture() {
  $.ajax({
    url: "http://localhost/location.php",
    type: "POST",
    data: {
      voiture: $("#voiture").val(),
      immat: $("#immat").val()
    },
    success: function success(result) {
      console.log("Coucou");
      alert(result);
    },
    error: function error(error) {}
  });
}

function reservation() {
  $.ajax({
    url: "",
    type: "POST",
    data: {},

    success: function success(result) {
      alert(result);
    },

    error: function error(error) {}
  });
}
