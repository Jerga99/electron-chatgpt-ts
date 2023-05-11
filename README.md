# Electron with ChatGPT integration APP 

This is an example Electron with ChatGPT integration app.

## Setup

1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/) (Node.js version >= 14.6.0 required)

2. Clone or download this repository

3. Navigate into the project directory

   ```bash
   $ cd electron-chatgpt-ts
   ```

4. Install the requirements

   ```bash
   $ npm install
   ```

5. Create  ```keys.js``` file in ```src``` folder to setup API KEY to OpenAI (explained in the Course)

6. Add your [API key](https://platform.openai.com/account/api-keys) to the newly created `keys.js` file

```export const OPENAI_SECRET_KEY = "your-key";```

7. Run the app

   ```bash
   $ npm start
   ```

You should now be able to access the app. For the full context behind this example app, check out the full course [tutorial](https://academy.eincode.com).
