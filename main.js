const { app, contextBridge, BrowserWindow, ipcMain, dialog } = require('electron');
const fs = require('fs');
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1400,
    height: 1200,
    webPreferences: {
      preload: path.resolve(__dirname, 'electron-scripts', 'preload.js'),
      devTools: true
    }
  });

  // Uses Webpack Dev Server in Development
  // Must open 
  // win.loadURL('http://localhost:8080/index.html');
  win.loadFile('./dist/index.html');
  // const contents = win.webContents
  // console.log(contents)
};

app.whenReady().then(() => {
  // Setup an Event listener to listen on the 'export-chart' channel.
  // ipcMain.on('export-chart', (event, code, data) => {
  //   // Make a Direcotry
  //   // Write the Data file in directory
  //   // Write the Code as a File in the Directory
  //   fs.mkdirSync(path.resolve(__dirname, 'temp'));
  //   fs.writeFileSync(path.resolve(__dirname, 'temp', 'data.json'), data)
  //   fs.writeFileSync(path.resolve(__dirname, 'temp', 'code.js'), code)
  // })
  // EXPORT FUNCTIONALITY
  // ipcMain.handle & ipcRenderer.invoke allows for a two-way communication between renderer and main
  // BarChartCodePreview > ipcMain.handle > > .then( {canceled, filePaths})
  ipcMain.handle('show-save-dialog', (event) => {
    const saveDialogPromise = dialog.showOpenDialog({
      properties: ['openDirectory'],
      buttonLabel: 'Export'
    })
    .then(({ canceled, filePaths }) => {
      if (canceled) {
        console.log('Request Canceled')
        return
      } else {
        console.log('File Selected:', filePaths)
        return filePaths[0]
      }
    })
    .catch(err => console.log('ERROR on "show-save-dialog" event: ', err))
    
    // return promise
    return saveDialogPromise
  });
  
  createWindow();
});

