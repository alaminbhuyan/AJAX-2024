
const loadData = (callBackFunc) => {
    // Make xmlhttprequest object
    const xhr = new XMLHttpRequest();

    // Create the functionality after getting response from server
    xhr.onload = function () {
        callBackFunc(xhr);
    }

    // Send the request to the server
    xhr.open("GET", "./data/text.txt");

    xhr.send();

    // Cancels the current request
    // xhr.abort();
};

function myCallBack1(xhr) {
    const container = document.getElementById('demo');
    container.innerHTML = xhr.responseText;
}

function myCallBack2(xhr) {
    const container = document.getElementById('demo2');
    container.innerHTML = xhr.responseText;
}