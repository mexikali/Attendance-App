const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        icon:'./templates/img/rfid.png'
    });

    mainWindow.maximize();

    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, 'templates/html/main.html'),
            protocol: 'file',
            slashes: true
        })
    );

    ipcMain.on("navigate", (event, page) => {
        mainWindow.loadURL(
            url.format({
                pathname: path.join(__dirname, `templates/html/${page}`),
                protocol: 'file',
                slashes: true
            })
        );
      });
});