const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    fullscreen: true,
    frame: true,
    backgroundColor: '#000000',
    autoHideMenuBar: true, // Esconde a barra de menu
    titleBarStyle: 'hidden', // Esconde a barra de título mas mantém os controles de janela
    titleBarOverlay: {
      color: '#000000',
      symbolColor: '#FFFFFF'
    }
  });

  // Adiciona atalho para alternar tela cheia
  win.setMenuBarVisibility(false);
  
  win.loadFile('src/index.html');
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