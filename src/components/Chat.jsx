import React, { useState } from 'react';
import { IoMdSend } from "react-icons/io";

function Chat() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (input.trim()) {
            setMessages([...messages, { name: 'João Pedro', text: input }]);
            setInput('');
        }
    };

    return (
        <>
            <div className="w-full md:w-[400px] border border-shiny-blue rounded-lg flex flex-col justify-between">
                <div className="flex justify-between border-b-[1px] border-shiny-blue py-4 px-6">
                    <p className="text-white">Chat ao vivo</p>
                    <p className="text-white">X</p>
                </div>
                <div className="flex-1 overflow-y-auto p-4">
                    {messages.map((message, index) => (
                        <div key={index} className="mb-2">
                            <strong className='text-red-600'>{message.name}: </strong>
                            <span className='text-slate-200'>{message.text}</span>
                        </div>
                    ))}
                </div>
                <div className="border-t-[1px] border-shiny-blue py-4 px-3">
                    <form onSubmit={handleSendMessage} className="flex">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-1 rounded-full px-2 py-1 bg-shiny-blue text-slate-200 outline-none"
                            placeholder="Chat..."
                        />
                        <button type="submit" className="ml-2 text-white rounded">
                            <IoMdSend color='#0024AD' size={33} />
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Chat;