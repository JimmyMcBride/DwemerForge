import { contextBridge, ipcRenderer } from "electron";

const api = {
  platform: () => ipcRenderer.invoke("dwemerforge:platform") as Promise<NodeJS.Platform>
};

contextBridge.exposeInMainWorld("dwemerForge", api);

export type DwemerForgePreloadApi = typeof api;
