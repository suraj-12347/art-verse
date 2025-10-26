import React, { useState } from "react";
import { FiPlusCircle, FiSearch, FiTrash2, FiShare2, FiX } from "react-icons/fi";

export default function AiSidebar({ isOpen, onClose }) {
  const [search, setSearch] = useState("");
  const [history, setHistory] = useState([
    { id: 1, title: "Mandala Art Ideas" },
    { id: 2, title: "Color Palette Suggestion" },
    { id: 3, title: "Tribal Art Inspiration" },
    { id: 4, title: "Folk Design Reference" },
  ]);

  const [activeMenu, setActiveMenu] = useState(null);

  const handleDelete = (id) => {
    setHistory(history.filter((chat) => chat.id !== id));
    setActiveMenu(null);
  };

  const filteredHistory = history.filter((chat) =>
    chat.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Overlay for mobile view */}
      {isOpen && (
        <div
          className="fixed inset-0 text-amber-200 z-30"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 md:left-40 h-full w-64 z-41 transform transition-transform duration-300 bg-white shadow-md
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        
      >
        {/* Header Close Button (Mobile) */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <h2 className="text-lg font-semibold text-[var(--primary)]">Chats</h2>
          <button onClick={onClose} className="text-[var(--primary)] p-1 rounded">
            <FiX size={18} />
          </button>
        </div>

        {/* New Chat Button */}
        <div className="p-4">
          <button
            className="w-full flex items-center gap-2 py-2 px-3 rounded-md bg-[var(--bg)] text-[var(--primary)]"
          >
            <FiPlusCircle size={18} />
            <span>New Chat</span>
          </button>
        </div>

        {/* Search */}
        <div className="px-4">
          <div className="flex items-center gap-2  rounded-md px-3 py-2 bg-[var(--bg)] text-[var(--primary)]">
            <FiSearch size={16} className="text-[var(--primary)]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="bg-transparent outline-none text-sm text-[var(--primary)] flex-1"
            />
          </div>
        </div>

        {/* History List */}
        <div className="mt-4 px-2 overflow-y-auto h-[70%]">
          {filteredHistory.length === 0 ? (
            <p className="text-[var(--dark)] text-center text-sm">No chats found</p>
          ) : (
            filteredHistory.map((chat) => (
              <div
                key={chat.id}
                className="relative"
                onContextMenu={(e) => {
                  e.preventDefault();
                  setActiveMenu(chat.id);
                }}
                onClick={() => setActiveMenu(null)}
              >
                <div className="p-3 mb-1 rounded-md hover:bg-white/10 cursor-pointer text-[var(--dark)] text-sm">
                  {chat.title}
                </div>

                {/* Right Click Menu */}
                {activeMenu === chat.id && (
                  <div className="absolute right-2 top-1 bg-[#1f1f1f] shadow-lg rounded-md border border-white/10 z-50">
                    <button
                      className="flex items-center gap-2 px-3 py-2 hover:bg-white/10 text-sm text-white w-full"
                      onClick={() => {
                        navigator.clipboard.writeText(chat.title);
                        setActiveMenu(null);
                      }}
                    >
                      <FiShare2 size={16} />
                      Share
                    </button>
                    <button
                      className="flex items-center gap-2 px-3 py-2 hover:bg-white/10 text-sm text-red-400 w-full"
                      onClick={() => handleDelete(chat.id)}
                    >
                      <FiTrash2 size={16} />
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
