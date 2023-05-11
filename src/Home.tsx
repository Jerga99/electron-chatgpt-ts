import { useEffect, useState } from "react";

type Message = {
  text: string;
  id: string;
  author: "human" | "ai";
}

type MessageItemProps = { message: Message; }

function MessageItem({message}: MessageItemProps) {
  const [text, setText] = useState(message.author === "ai" ? "" : message.text);

  useEffect(() => {
    setTimeout(() => {
      setText(message.text.slice(0, text.length + 1));
    }, 10);
  }, [text, message.text])
  
  return (
    <div className="answer">
      <div className={`author author-${message.author}`}>
        {message.author}:
      </div>
      <div className="message">
        {text}
      </div>
    </div>
  )
}

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSubmit = async () => {
    if (prompt.trim().length === 0) {
      return;
    }
    
    setMessages((messages) => {
      return [
        ...messages,
        {
          text: prompt,
          id: new Date().toISOString() + Math.random(),
          author: "human"
        }
      ]
    });

    setPrompt("");
    const result = await electron.chatGPTApi.getCompletion(prompt);

    setMessages(messages => 
      [
        ...messages,
        {
          text: result,
          id: new Date().toISOString() + Math.random(),
          author: "ai"
        }
      ]
    );
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
          <MessageItem 
            key={message.id} 
            message={message} 
          />
        )}
      </div>
    </div>
  )
}
