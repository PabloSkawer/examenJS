function sendJSON(url, med) {
    var xhr = new XMLHttpRequest();
    xhr.timeout = 2000;
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                //callback(null, xhr.response);
                console.log('ko')
            }
            else {
                //callback(xhr.status, null);
                console.log('ok')
            }
        }

    }
    xhr.ontimeout = function () {

        console.log("xhr.timeout");
    }
    xhr.open('POST', url);
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.send(JSON.stringify(med));
}

function getJSON(url) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.timeout = 2000;
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.response);
                } else {
                    reject(xhr.status);
                }
            }
        };
        xhr.ontimeout = function () {
            reject('timeout')
        };
        xhr.open('get', url, true);
        xhr.send();
    });
}

function updateJSON(url, med) {
    var xhr = new XMLHttpRequest();
    xhr.timeout = 2000;
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                //callback(null, xhr.response);
                console.log('ko')
            }
            else {
                //callback(xhr.status, null);
                console.log('ok')
            }
        }

    }
    xhr.ontimeout = function () {

        console.log("xhr.timeout");
    }
    xhr.open('put', url);
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.send(JSON.stringify(med));
}

function deleteJSON(url) {
    var xhr = new XMLHttpRequest();
    xhr.timeout = 2000;
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                //callback(null, xhr.response);
                console.log('ko')
            }
            else {
                //callback(xhr.status, null);
                console.log('ok')
            }
        }

    }
    xhr.ontimeout = function () {

        console.log("xhr.timeout");
    }
    xhr.open('delete', url);
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.send();
}