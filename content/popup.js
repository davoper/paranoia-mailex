import { getPopup } from "./overlay.js";

browser.tabs.query({
    active: true,
    currentWindow: true,
}).then(tabs => {
    let tabId = tabs[0].id;
    browser.messageDisplay.getDisplayedMessage(tabId).then((message) => {
        document.body.textContent = "";

        const div = document.createElement('div');
        div.setAttribute('id', 'myDiv');
        document.body.appendChild(div);

        getPopup(message).then(popup => {
            document.getElementById('myDiv').appendChild(popup);
        });
    });
});
