"use client";
import { useState } from "react";

export default function Home() {
    //para almacenar los datos del usuario en un solo objeto
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  //para alacenar los mensajes de error que pueden haber, igual en un soloobjeto
  const [errores, setErrores] = useState({ name: "", email: "", password: "" });
  const [registered, setRegistered] = useState(false); 
  const validateEmail = (email: string) => {
    //regex 
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); 
  };
  const validatePassword = (password: string) => {
    return /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password); 
  };
   const handleNuevosValores = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    //para que nada mas se modifique el campo que escribe
    setUser((prev) => ({ ...prev, [name]: value }));
  };
    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let newErrores = { name: "", email: "", password: "" };

    if (!user.name) newErrores.name = "El nombre es obligatorio";

    if (!user.email) { newErrores.email = "El correo es obligatorio";
    } else if (!validateEmail(user.email)) {
      newErrores.email = "El formato del correo es inválido (texto@dominio.extension)";
    }

    if (!user.password) { newErrores.password = "La contraseña es obligatoria";
    } else if (!validatePassword(user.password)) {
      newErrores.password = "La contraseña debe tener al menos 8 caracteres, una mayúscula y un carácter especial";
    }
    setErrores(newErrores);
    if (!newErrores.name && !newErrores.email && !newErrores.password) {
      setRegistered(true);
    } else {
      setRegistered(false);
    }
  };
  return ( 
    <main className="flex flex-col flex-grow min-h-screen items-center justify-center bg-black ">
      <div className="absolute top-16 right-4 bg-white px-4 py-2 rounded-md shadow-md">
        {registered && (
        <p className="text-black font-medium">
        Welcome {user.name}!
        </p>
            )}
    </div>
      <div className="bg-pink-100 rounded-2xl p-8 flex flex-col items-center justify-center shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4 text-black">Registrate a la app!</h1>

        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="text-black font-medium">Nombre</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleNuevosValores}
              className="p-2 rounded-md border border-gray-400 text-black"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-black font-medium">Correo</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleNuevosValores}
              className="p-2 rounded-md border border-gray-400 text-black"
            />
           
          </div>

          {/* Contraseña */}
          <div className="flex flex-col">
            <label className="text-black font-medium">Contraseña</label>
            <input
              type="text"
              name="password"
              value={user.password}
              onChange={handleNuevosValores}
              className="p-2 rounded-md border border-gray-400 text-black"
            />
            
          </div>
          {errores.name && <p className="text-red-500 text-sm">{errores.name}</p>}
          {errores.email && <p className="text-red-500 text-sm">{errores.email}</p>}
          {errores.password && <p className="text-red-500 text-sm">{errores.password}</p>}
          {/* Botón de registro */}
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
          >
            Registrarse
          </button>

        </form>
      </div>
    </main>
  );
}
