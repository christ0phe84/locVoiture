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
    url: "http://localhost/location.php",
    type: "POST",
    data: {
      nom: $('#nom').val(),
      prenom: $('#prenom').val(),
      mail: $('#email').val(),
      voiture: $('#voiture').val(),
      dateDebut: $('#debut').val(),
      dateFin: $('#fin').val(),
    },

    success: function success(result) {
      alert(result);
    },

    error: function error(error) {}
  });
}
