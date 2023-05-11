

type Electron = {
  chatGPTApi: {
    getCompletion: (value: string) => void;
  }
};

declare let electron: Electron;
