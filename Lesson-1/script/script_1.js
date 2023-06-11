
const loadData = () => {
    // Make xmlhttprequest object
    const xhr = new XMLHttpRequest();

    // Create the functionality after getting response from server
    xhr.onload = function() {
        const container = document.getElementById('demo');
        container.innerHTML = this.responseText;
    }

    // Send the request to the server
    xhr.open("GET", "./data/text.txt");

    xhr.send();

    // Cancels the current request
    // xhr.abort();
};