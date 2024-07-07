const { app, BrowserWindow } = require('electron');
const path = require('path');

function createMainWindow() {
    let mainWindow = new BrowserWindow({
        title: "Amba Shakti Barcode Generator",
        width: 1000,
        height: 1000,
    });

    const startUrl = app.isPackaged
        ? `file://${path.join(__dirname, 'barcode-app/build/index.html')}`
        : 'http://localhost:3000';

    mainWindow.loadURL(startUrl);

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', createMainWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createMainWindow();
    }
});
