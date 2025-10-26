import React, { useState, useRef, useEffect } from "react";
import { FiMenu, FiPlus, FiMic, FiSend, FiMoreVertical, FiCopy } from "react-icons/fi";
import AiSidebar from "../components/AiSidebar";
import logo from "../assets/artverse.png";

export default function Aichatbot() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, from: "ai", text: "Hello! Welcome to ArtVerse AI assistant. Ask me about styles, colors, or upload your artwork." },
    { id: 2, from: "user", text: "Mujhe ek folk-art style chahiye for my next piece." },
    { id: 3, from: "ai", text: "Great — kaunsa mood chahiye: vibrant ya subtle?" },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [pendingFile, setPendingFile] = useState(null);
  const [uploadPreview, setUploadPreview] = useState(null);
  const [isRecording, setIsRecording] = useState(false);

  const fileRef = useRef(null);
  const messagesRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  const toggleSidebar = () => setSidebarOpen((s) => !s);

  const handleFileChange = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;

    const url = URL.createObjectURL(f);
    setPendingFile({ file: f, url }); // store temporarily
    setUploadPreview(url); // show preview
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim() && !pendingFile) return; // kuch bhi nahi hai to return

    const newMessages = [];

    // Text message
    if (inputValue.trim()) {
      newMessages.push({ id: Date.now(), from: "user", text: inputValue.trim() });
    }

    // File message
    if (pendingFile) {
      newMessages.push({
        id: Date.now() + 1,
        from: "user",
        text: "[Uploaded file]",
        file: pendingFile.url,
        filename: pendingFile.file.name
      });
      setPendingFile(null);
      setUploadPreview(null);
    }

    setMessages((m) => [...m, ...newMessages]);
    setInputValue("");
    if (textareaRef.current) textareaRef.current.style.height = "auto";

    // Dummy AI response
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        { id: Date.now() + 2, from: "ai", text: "Yeh accha idea hai — tum deep earthy colors use kar sakte ho, aur border me tribal motifs add karo." }
      ]);
    }, 700);
  };

  const handleMic = () => setIsRecording((r) => !r);

  return (
    <div className="pl-40 ai-page h-screen w-full flex bg-white ">
      <AiSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col w-full">
        {/* Header */}
        <header className="flex items-center w-full justify-between px-4 py-4 drop-shadow-sm bg-white z-40">
          <div className="flex items-center gap-3">
            <button aria-label="Open sidebar" onClick={toggleSidebar} className="p-2  text-[var(--primary)] rounded-md ">
              <FiMenu size={20} />
            </button>
           
          </div>
          <div className="w-[200px]">
          <img src={logo} alt="ArtVerse" className="h-8 w-auto object-contain" />
          </div>
          <div className="flex items-center gap-2">
            <button title="More" className="p-2 rounded-md text-[var(--primary)]">
              <FiMoreVertical size={18} />
            </button>
          </div>
        </header>

        {/* Messages */}
        <main
          ref={messagesRef}
          className="flex-1 px-3 py-6 overflow-y-auto bg-white"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="max-w-3xl mx-auto flex flex-col gap-8">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className="relative max-w-[78%] p-3 rounded-2xl bg-[var(--bg)] text-[var(--dark)]">
                  {m.file && <img src={m.file} alt={m.filename || "upload"} className="max-h-48 rounded-md object-contain mb-2" />}
                  <div className="whitespace-pre-wrap break-words text-sm">{m.text}</div>
                  <button
                    onClick={() => navigator.clipboard.writeText(m.text)}
                    className="absolute -top-5 right-1 p-1 hover:bg-[var(--primary)] rounded-full"
                    title="Copy text"
                  >
                    <FiCopy size={12} />
                  </button>
                </div>
              </div>
            ))}
           
          </div>
        </main>

        {/* Input area */}
        <div className="px-3 py-3 ">
          <form className="max-w-3xl mx-auto bg-[var(--bg)] px-2 py-4 rounded-2xl mb-12  flex items-end gap-3" onSubmit={handleSend}>
            {/* Upload button */}
            <label className="p-2 rounded-md text-[var(--primary)] hover:bg-white/5 cursor-pointer flex-shrink-0">
              <FiPlus size={18} />
              <input type="file" accept="image/*,video/*" className="hidden" ref={fileRef} onChange={handleFileChange} />
            </label>
            {uploadPreview && (
              <div className="flex justify-center">
                <img src={uploadPreview} alt="preview" className="h-12 rounded-md" />
              </div>
            )}

            {/* Textarea */}
            <textarea
              placeholder="Type a message or use + to upload..."
              className="ai-input flex-1 bg-transparent outline-none text-sm  resize-none overflow-y-auto max-h-24"
              rows={1}
              value={inputValue}
              ref={textareaRef}
              onChange={(e) => setInputValue(e.target.value)}
              onInput={(e) => {
                e.target.style.height = "auto";
                e.target.style.height = e.target.scrollHeight + "px";
              }}
            />

            {/* Mic button */}
            <button type="button" onClick={handleMic} title={isRecording ? "Stop recording" : "Record voice"} className="p-2 text-[var(--primary)] rounded-md hover:bg-white/5 flex-shrink-0">
              <FiMic size={18} />
            </button>

            {/* Send button */}
            <button type="submit" title="Send" className="p-2 rounded-md text-[var(--primary)] hover:bg-white/5 flex-shrink-0">
              <FiSend size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
