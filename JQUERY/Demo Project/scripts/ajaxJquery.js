// Properties:

// url: The URL to which the request is made.
// type: The HTTP method for the request (e.g., "GET", "POST", "PUT", "DELETE").
// data: The data to be sent to the server.
// dataType: The expected data type of the response ("xml", "json", "html", or "text").
// contentType: The content type of the data being sent to the server.
// headers: An object of additional headers to send along with the request.
// timeout: The maximum time (in milliseconds) allowed for the request to complete.
// cache: A Boolean value indicating whether to cache the response or not.
// async: A Boolean value indicating whether the request should be asynchronous or not.
// beforeSend: A function to be executed before the request is sent.
// success: A function to be executed if the request is successful.
// error: A function to be executed if the request encounters an error.
// complete: A function to be executed when the request completes, regardless of success or failure.


// Functions:

// $.ajax(): The main function for making AJAX requests.
// $.ajaxSetup(): Sets default values for future AJAX requests.
// $.ajaxPrefilter(): Registers prefilter functions to customize AJAX requests.
// $.param(): Serializes an object into a query string format.
// $.get(): Shorthand method for making a GET request.
// $.post(): Shorthand method for making a POST request.
// $.getJSON(): Shorthand method for making a GET request and expecting JSON response.
// $.getScript(): Shorthand method for fetching and executing a JavaScript file.
// $.ajaxTransport(): Registers custom transports for AJAX requests.
// $.ajaxStart(): Registers a function to be executed when the first AJAX request starts.
// $.ajaxStop(): Registers a function to be executed when all AJAX requests have completed.

$(document).ready(function () {
    // Make the GET request using AJAX
    $("#get").click(function () {
        $.ajax({
            // URL to fetch data from
            url: "https://jsonplaceholder.typicode.com/posts/2",

            // HTTP method
            type: "GET",
            // method: "GET",

            // Data type expected in the response
            dataType: "json",
            // This function is called when the request is successful
            success: function (response) {
                console.log(typeof response);
                console.log(response);
                console.log(response.userId);
                console.log(response.title);
                console.log(response.body);
            },
            // This function is called when the request encounters an error
            error: function(xhr, status, error) {
                console.log("Request failed: " + error);
            }
        });
    });

    // Make the POST request using AJAX
    $("#send").click(function () {
        $.ajax({
            // URL to fetch data from
            url: "https://jsonplaceholder.typicode.com/posts",
            // HTTP method
            // type: "GET",
            method: "POST",
            data: JSON.stringify({
                title: 'Name',
                body: 'Alamin',
                userId: 1,
            }),
            // Data type expected in the response
            dataType: "json",
            contentType: "application/json; charset=UTF-8",
            // This function is called when the request is successful
            success: function (response) {
                console.log(typeof response);
                console.log(response);
                console.log("Add success");
            },
            // This function is called when the request encounters an error
            error: function (xhr, status, error) {
                console.log("Failed to post");
                console.log("xhr is: ", xhr);
                console.log("Status is: ", status);
                console.log("Error is: ", error);
            }
        });
    });


    // Make the UPDATE request using AJAX
    $("#update").click(function () {
        $.ajax({
            // URL to fetch data from
            url: "https://jsonplaceholder.typicode.com/posts/1",
            // HTTP method
            type: "PUT",
            // method: "POST",
            data: JSON.stringify({
                id: 1,
                title: 'Name',
                body: 'Alamin Bhuyan',
                userId: 1,
            }),
            // Data type expected in the response
            dataType: "json",
            contentType: "application/json; charset=UTF-8",
            // This function is called when the request is successful
            success: function (response) {
                console.log(typeof response);
                console.log(response);
                console.log("Update successfully");
            },
            // This function is called when the request encounters an error
            error: function (xhr, status, error) {
                console.log("Failed to post");
                console.log("xhr is: ", xhr);
                console.log("Status is: ", status);
                console.log("Error is: ", error);
            }
        });
    });
});