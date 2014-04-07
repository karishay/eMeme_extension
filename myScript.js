var port = chrome.runtime.connect();

window.addEventListener("onLoad", function(event) {
    console.log("This is working properly!");
    // we only accempt messages from ourselves?
    if (event.source != window)
        return;

    if (event.data.type && (event.data.type == "FROM_PAGE")) {
        console.log("Content script recieved: " + event.data.text);
        port.postMessage(event.data.text);
    }
}, false);


ted();