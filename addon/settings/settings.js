"use strict";

const DEFAULT_CELL_SIZE =  150;
const DEFAULT_LOGO =  true;

function saveOptions(e) {
    e.preventDefault();
    browser.storage.local.set({
        qrCodeSize: document.querySelector("#qrCodeSize").value
    });
    browser.storage.local.set({
        displayLogo: document.querySelector("#displayLogo").value
    });
}

function restoreOptions() {
    browser.storage.local.get("qrCodeSize").then(result => {
        document.querySelector("#qrCodeSize").value = result.qrCodeSize || DEFAULT_CELL_SIZE;
    }, error => {
        console.log(error);
    });
    browser.storage.local.get("displayLogo").then(result => {
        document.querySelector("#displayLogo").value = result.displayLogo || DEFAULT_LOGO;
    }, error => {
        console.log(error);
    });
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);