import { useState } from "react";

type Message = {
  text: string;
  id: string;
  author: "human" | "ai";
}

type MessageItemProps = { message: Message; }

function MessageItem({message}: MessageItemProps) {
  
  return (
    <div className="answer">
      <div className={`author author-${message.author}`}>
        {message.author}:
      </div>
      <div className="message">
        {message.text}
      </div>
    </div>
  )
}

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSubmit = async () => {
    
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

    await new Promise((res) => setTimeout(res, 1000));

    setMessages(messages => 
      [
        ...messages,
        {
          text: "Here is my super smart answer, can be little bit longer, bla bla bla ...",
          id: new Date().toISOString(),
          author: "ai"
        }
      ]
    );


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
          <MessageItem 
            key={message.id} 
            message={message} 
          />
        )}
      </div>
    </div>
  )
}
