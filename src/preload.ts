

import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electron", {
  chatGPTApi: {
    getCompletion(prompt: string) {
      ipcRenderer.send("getCompletion", prompt);
    }
  }
});
