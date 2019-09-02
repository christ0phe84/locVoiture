

function creationVoiture (){

    $.ajax({

        url:"localhost/location.php",
        type:"POST",
        data:{
            voiture: $('#voiture').value,
            immat: $('#immat').value,
        },

        success: function success (result){

            alert(result);
        },

        error: function error (error){


        }


    });

}

function reservation (){

    $.ajax({

        url:"",
        type:"POST",
        data:{

        },

        success: function success (result){

            alert(result);
        },

        error: function error (error){


        }


    });

}