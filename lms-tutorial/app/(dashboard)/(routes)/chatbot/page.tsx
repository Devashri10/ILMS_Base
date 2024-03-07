"use client";

import { useEffect, useRef } from "react";
import Textarea from 'react-textarea-autosize'
import { useChat } from "ai/react";

const ChatPage = () => {
    
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: "/api",
    });

    const messageEndRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Marking this component as a Client Component
        
    return (
        <div className="min-h-screen bg-neutral-800">
        {messages.length !== 0 ? (
            <div className="pb-32 pt-5 space-y-5 w-[75%] mx-auto relative">
            {messages.map((message) => (
                <div key={message.id} className="w-full">
                {message.role === "user" ? (
                    <div className="flex items-center gap-x-2">
                    <div className="bg-gray-500 h-12 w-12 rounded-lg">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24" 
                        fill="currentColor" 
                        className="w-full h-full text-white p-1">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <p className="rounded-lg p-3 w-full border-gray-500 border-2 text-sm text-white">
                        {message.content}
                    </p>
                    </div>
                ) : (
                    <div className="flex gap-x-2">
                    <div className="bg-pink-500 h-12 w-12 rounded-lg">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24" 
                        fill="currentColor" 
                        className="w-full h-full text-white p-1">
                        <path d="M16.5 7.5h-9v9h9v-9Z" />
                        <path fillRule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.

75V6.75Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <p className="rounded-lg p-3 w-full border-pink-500 border-2 text-sm text-white">
                        {message.content}
                    </p>
                    </div>
                )}
                </div>
            ))}

            </div>
        ) : (
            <div className="w-full flex justify-center pt-32">
            <h1 className="font-bold text-3xl">
                Please use the input filed below ⬇️
            </h1>
            </div>
        )}

        <div ref={messageEndRef}></div>
            <form onSubmit={handleSubmit} className="p-20 fixed bottom-0 left-0 w-[75%] mx-auto right-0 bg-neutral-800">
            <div className="relative flex items-center">
                <Textarea 
                tabIndex={0} 
                required
                rows={1}
                value={input}
                onChange={handleInputChange}
                autoFocus
                placeholder="Send message..."
                spellCheck={false}
                className="w-full focus:outline-none shadow-pink-700 shadow-xl placeholder:text-gray-200 text-sm text-white p-5 pr-16 rounded-xl bg-neutral-600"
                />
                <button type="submit" className="absolute bg-pink-500 p-2 rounded-lg right-0 mr-5"
                >
                <svg 
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-5 h-5 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>

                </button>

            </div>
            </form>
        </div>
    );
}
export default ChatPage;
