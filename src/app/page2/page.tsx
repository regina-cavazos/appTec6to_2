'use client'
import Rectangle from "../Components/rectangle";
import { useState } from "react";

export default function Home() {
  const [color, setColor] = useState("white");

  const handleSubmit = (e: React.FormEvent, newColor: string) => {
    e.preventDefault();
    setColor(newColor);
  };

  return (
    <main className="flex flex-col min-h-[calc(100vh-73px)] items-center justify-center bg-black">
      <h1 className="text-2xl font-bold mb-4 text-white">Rectangulo Magico</h1>
      <Rectangle color={color} />

      <div className="grid grid-cols-2 gap-4 mt-8">
        
        <form onSubmit={(e) => handleSubmit(e, "pink")}>
          <button type="submit" className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-600">
            Poner de color Rosa
          </button>
        </form>

        <form onSubmit={(e) => handleSubmit(e, "blue")}>
          <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600">
            Poner de color Azul
          </button>
        </form>

        <form onSubmit={(e) => handleSubmit(e, "red")}>
          <button type="submit" className="bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600">
            Poner de color Rojo
          </button>
        </form>

        <form onSubmit={(e) => handleSubmit(e, "green")}>
          <button type="submit" className="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600">
            Poner de color Verde
          </button>
        </form>

      </div>
    </main>
  );
}
