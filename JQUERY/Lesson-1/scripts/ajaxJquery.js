$(document).ready(function () {
    // AJAX = Asynchronous JavaScript and XML.
    // What About jQuery and AJAX ?
    // jQuery provides several methods for AJAX functionality.

    // With the jQuery AJAX methods, you can request text, HTML, XML, or JSON from a remote server using both HTTP Get and HTTP Post - And you can load the external data directly into the selected HTML elements of your web page!

    $("button").click(function () {
        $("#div1").load("./data/text.txt", function (responseTxt, statusTxt, xhr) {
            console.log(responseTxt);
            console.log(statusTxt);
            console.log(xhr);
        });
    });
});