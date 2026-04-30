import { app, BrowserWindow, ipcMain } from "electron";
import { join } from "node:path";

function createMainWindow(): BrowserWindow {
  const mainWindow = new BrowserWindow({
    height: 720,
    minHeight: 560,
    minWidth: 900,
    show: false,
    title: "DwemerForge",
    width: 1120,
    webPreferences: {
      preload: join(__dirname, "../preload/index.js"),
      sandbox: false
    }
  });

  mainWindow.on("ready-to-show", () => {
    mainWindow.show();
  });

  if (process.env.ELECTRON_RENDERER_URL) {
    void mainWindow.loadURL(process.env.ELECTRON_RENDERER_URL);
  } else {
    void mainWindow.loadFile(join(__dirname, "../renderer/index.html"));
  }

  return mainWindow;
}

ipcMain.handle("dwemerforge:platform", () => process.platform);

await app.whenReady();
createMainWindow();

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow();
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
