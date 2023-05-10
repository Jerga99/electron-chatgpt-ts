import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = () => {
    alert(`Sending to chatGPT: ${prompt}`);

    setPrompt("");
  }

  return (
    <div className="container">
      <div className="inputContainer">
        <textarea 
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
          placeholder="Ask a question" 
          rows={3} 
        />
        <button 
          onClick={handleSubmit}
          className="submit">Submit
        </button>
      </div>
      <div className="answers">
        <div className="answer">
          <div className="author author-human">
            Human:
          </div>
          <div className="message">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <div className="answer">
          <div className="author author-ai">
            AI:
          </div>
          <div className="message">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    </div>
  )
}
