/*
This file handles the electron workings
*/
const { app, BrowserWindow, ipcRenderer, ipcMain } = require('electron');
const { exec } = require("os");


let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: '#ffffff',
        frame: true,
        icon: `file//${__dirname}/dist/assets/logo.png`,
        webPreferences: {
            nodeIntegration: true,
            webSecurity: false
        }

    });

    mainWindow.loadURL(`file://${__dirname}\\dist\\pb-angular-electron\\index.html`);
    // mainWindow.loadURL(`file://${__dirname}\\dist\\pb-angular-electron\\index.html`);
    // console.log("maybe " + __dirname);

}



app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

ipcMain.on('runEvent', (event) => {

    // console.log(process.cwd());
    console.log("Inside main.js");
    // a = spawn('cd D:\\accubits\\Electron\\PB\\core\\tagui && tagui D:\\accubits\\Electron\\PB\\core\\tagui\\amazon.tag', { detached: true });
    childProcess = exec("tagui D:\\accubits\\Electron\\PB\\core\\tagui\\amazon.tag", { cwd: 'D:\\accubits\\Electron\\PB\\cache\\' }).on('error', function (err) { throw err; });
});