

import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electron", {
  chatGPTApi: {
    async getCompletion(prompt: string) {
      const result = await ipcRenderer.invoke("getCompletion", prompt);
      return result as string;
    }
  }
});
