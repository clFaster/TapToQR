"use strict";

const DEFAULT_SVG_SIZE = 230;
const DEFAULT_PNG_SIZE = 500;
const DEFAULT_LOGO = true;

const qrCodeSizeSlider = document.getElementById('qrCodeSize');
const qrCodeSizeValue = document.getElementById('qrCodeSizeValue');
const qrCodeDownloadSizeSlider = document.getElementById('qrCodeDownloadSize');
const qrCodeDownloadSizeValue = document.getElementById('qrCodeDownloadSizeValue');
const displayLogoCheckbox = document.getElementById('displayLogo');
const toast = document.getElementById('toast');

async function saveOptions() {
    const qrCodeSize = parseInt(qrCodeSizeSlider.value, 10);
    const qrCodeDownloadSize = parseInt(qrCodeDownloadSizeSlider.value, 10);
    const displayLogo = displayLogoCheckbox.checked;

    await browser.storage.local.set({
        qrCodeSize: isNaN(qrCodeSize) ? DEFAULT_SVG_SIZE : qrCodeSize,
        qrCodeDownloadSize: isNaN(qrCodeDownloadSize) ? DEFAULT_PNG_SIZE : qrCodeDownloadSize,
        displayLogo: displayLogo
    });

    showToast('Settings saved!');
}

async function loadOptionsAndRestoreUi() {
    const result = await browser.storage.local.get(["qrCodeSize", "qrCodeDownloadSize", "displayLogo"]);

    const qrCodeSize = result.qrCodeSize !== undefined ? result.qrCodeSize : DEFAULT_SVG_SIZE;
    const qrCodeDownloadSize = result.qrCodeDownloadSize !== undefined ? result.qrCodeDownloadSize : DEFAULT_PNG_SIZE;
    const displayLogo = result.displayLogo !== undefined ? result.displayLogo : DEFAULT_LOGO;

    qrCodeSizeSlider.value = qrCodeSize;
    qrCodeSizeValue.textContent = qrCodeSize;
    qrCodeDownloadSizeSlider.value = qrCodeDownloadSize;
    qrCodeDownloadSizeValue.textContent = qrCodeDownloadSize;
    displayLogoCheckbox.checked = displayLogo;
}

async function revertOptions() {
    await browser.storage.local.set({
        qrCodeSize: DEFAULT_SVG_SIZE,
        qrCodeDownloadSize: DEFAULT_PNG_SIZE,
        displayLogo: DEFAULT_LOGO
    });
    await loadOptionsAndRestoreUi();
    showToast('Settings reverted to defaults!');
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// Event Listeners
qrCodeSizeSlider.addEventListener('input', function() {
    qrCodeSizeValue.textContent = this.value;
});

qrCodeDownloadSizeSlider.addEventListener('input', function() {
    qrCodeDownloadSizeValue.textContent = this.value;
});

document.addEventListener("DOMContentLoaded", loadOptionsAndRestoreUi);
document.getElementById("save-btn").addEventListener("click", saveOptions);
document.getElementById("revert-btn").addEventListener("click", revertOptions);
