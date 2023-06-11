function sendRequest(method, url, data) {
    const promise = new Promise((resolve, reject) => {
        // create xhr instance
        const xhr = new XMLHttpRequest();

        // after getting response from server
        xhr.onload = function () {
            // Handling application error
            if (xhr.status >= 400) {
                reject(`There was an application error and the status code is ${xhr.status}`);
            } else {
                // if success or resolve promise
                resolve(this.response);
            }


            // console.log(this.responseText);
            // console.log(JSON.parse(this.responseText));
            // If we use xhr.responseType, then we need to use only this.response
            // console.log(this.response);
        }

        // if occurred any error
        xhr.onerror = function () {
            reject("Something is wrong");
        }

        // send request to server
        xhr.open(method, url);

        // to make sure the data is returned in JSON format
        xhr.responseType = "json";

        xhr.send(data);
    });

    return promise;
}


function getData() {
    sendRequest('GET', "https://jsonplaceholder.typicode.com/posts/2").then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    });
};

function sendData() {
    sendRequest('POST', "https://jsonplaceholder.typicode.com/posts", JSON.stringify({
        title: 'Name',
        body: 'Alamin',
        userId: 1,
    })).then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    });
};

const getButton = document.getElementById("get");
const sendButton = document.getElementById("send");


getButton.addEventListener("click", getData);
sendButton.addEventListener("click", sendData);