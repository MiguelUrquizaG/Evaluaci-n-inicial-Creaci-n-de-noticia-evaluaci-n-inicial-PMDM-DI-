$(document).ready(function () {
    var inputTitle = $("#inputTitle").val();
    console.log("input" + inputTitle);
    var max = 10

    $(document).on("click", "#btnSave", function () {



        if ($("input").val() == "") {
            alert("Rellena todos los campos por favor.");
        } else if ($("#inputRobot".val())!=num1+num2) {
            alert("Cuenta no realizada correctamente")
        } else {
            alert("Se ha guardado correctamente");
        }
    })

    $(document).on("click", "#btnURL", function () {
        inputTitle = $("#inputTitle").val();
        $("#inputUrl").val(inputTitle);

    })


    var num1 = getRandom(max);
    var num2 = getRandom(max);

    $("#labelRobot").html("Cuánto es el resulato de la suma: " + num1 + " + " + num2)


    function getRandom(max) {
        return Math.floor(Math.random() * max)

    }

})