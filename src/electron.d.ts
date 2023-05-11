

type Electron = {
  chatGPTApi: {
    getCompletion: (value: string) => Promise<string>;
  }
};

declare let electron: Electron;
