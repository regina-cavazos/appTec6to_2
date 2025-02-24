'use client'
import { useState } from "react";

export default function Home() {

  const [counter, setCounter] = useState(10);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCounter(counter + 1);
  };

  const handleSubmitSub = (e: React.FormEvent) => {
    e.preventDefault();
    setCounter(counter - 1);
  };

  return (
    <main className="flex flex-col min-h-[calc(100vh-73px)] items-center justify-center bg-black">
      <h1 className="text-4xl font-bold text-pink-600">{counter}</h1>
      <div className="flex space-x-4 mt-4">
        <form onSubmit={handleSubmit}>
          <button 
            type="submit" 
            className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700">
            Incrementar número
          </button>
        </form>

        <form onSubmit={handleSubmitSub}>
          <button 
            type="submit" 
            className="bg-pink-300 text-black rounded-md px-4 py-2 hover:bg-pink-400">
            Decrementar número
          </button>
        </form>
      </div>
    </main>
  );
}
