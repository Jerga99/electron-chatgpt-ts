import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = () => {
    
    setMessages((messages) => {
      return [
        ...messages,
        {
          text: prompt,
          id: new Date().toISOString(),
          author: "human"
        }
      ]
    });

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
        { messages.map((message) =>
          <div key={message.id} className="answer">
            <div className="author author-human">
              {message.author}:
            </div>
            <div className="message">
              {message.text}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
