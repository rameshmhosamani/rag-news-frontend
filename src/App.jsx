import React, { useEffect, useState } from "react";
import { createSession, sendMessage, history, reset } from "./api";

function App() {
  const [session, setSession] = useState("");
  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    createSession().then(res => {
      setSession(res.data.sessionId);
    });
  }, []);

  const loadHistory = () => {
    history(session).then(res => setMsgs(res.data));
  };

  useEffect(() => {
    if (session) loadHistory();
  }, [session]);

  const handleSend = async () => {
    const { data } = await sendMessage({
      sessionId: session,
      message: input
    });

    setMsgs([
      ...msgs,
      { role: "user", text: input },
      { role: "bot", text: data.answer }
    ]);

    setInput("");
  };

  return (
    <div className="chatbox">
      <h2>News RAG Chatbot</h2>

      <div className="window">
        {msgs.map((m, i) => (
          <div key={i} className={m.role}>
            <strong>{m.role}:</strong> {m.text}
          </div>
        ))}
      </div>

      <input
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={handleSend}>Send</button>
      <button onClick={() => reset(session)}>Reset Session</button>
    </div>
  );
}

export default App;
