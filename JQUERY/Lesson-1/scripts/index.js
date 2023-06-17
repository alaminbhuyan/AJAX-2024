$(document).ready(function () {

    $("#btn").click(function () {
        $("h1").toggle(1000);
    });

    // mouse enter event
    $('#enter').mouseenter(() => {
        // alert("You entered");
        $('#enter').css("color", "red");
    });

    // on method in jquery
    $(".p").on('click', function () {
        console.log("alamin clicked me");
    });
    // apply multiple functions
    $(".p2").on({
        mouseenter: function () {
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function () {
            $(this).css("background-color", "lightblue");
        },
        click: function () {
            $(this).css("background-color", "yellow");
        }
    });

    // $(selector).hide(speed, callback);
    // $(selector).show(speed, callback);
    
});
