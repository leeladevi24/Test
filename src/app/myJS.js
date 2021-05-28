const { app, BrowserWindow, ipcRenderer, ipcMain } = require('electron');

function callTagUI() {
    console.log("Maybe it's working");
    ipcRenderer.send("runEvent");
}

// ipcrenderer.send