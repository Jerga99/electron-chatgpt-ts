

import { contextBridge } from "electron";

contextBridge.exposeInMainWorld("electron", {
  chatGPTApi: {
    getCompletion(prompt: string) {
      console.log(`RECEVEID: ${prompt}`);
    }
  }
});
