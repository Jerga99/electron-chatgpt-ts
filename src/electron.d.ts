
type AIResponse = {
  message: string;
  error?: string;
}

type Electron = {
  chatGPTApi: {
    getCompletion: (value: string) => Promise<AIResponse>;
  }
};

declare let electron: Electron;
