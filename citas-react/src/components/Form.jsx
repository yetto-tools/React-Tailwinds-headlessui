import {useState, useEffect } from 'react';




export const Form = () => {
  const [pet, setPet] = useState({
    "name-pet":"pichicus", 
    "owner-name":"Carolina",
    "owner-email":"caro7878@gmail.com",
    "owner-phone":"5296-9478",
    "date-discharged":"2022-09-31",

  });
  




  return (
    <div className="">
      <div className="md:flex">
      </div>
      <form action="" className="bg-white shadow-2xl rounded-lg pb-5 px-5 mx-auto my-auto">
        <h2 className="font-black text-center pt-1 mb-4">
          <p className="text-lg mt-5 ml-2">
            Añadir y {''} <span className="text-cyan-500">Administrar</span>    
          </p>
        </h2>
        <div className="row">
          <div className="md:w-auto mb-6">
            <label htmlFor="name-pet" className="block font-bold text-xs uppercase">
              Mascota
            </label>
            <input id="name-pet" name="name-pet" type="text" 
              placeholder="Nombre de la Mascota"
              className="text-xs border-2 w-full p-2 mt-1 rounded-md bg-cyan-50 hover:bg-cyan-100 active:bg-cyan-100 focus:outline-none focus:ring focus:ring-cyan-300 transition-all"
              value = {pet['name-pet']}
              onChange= { ()=>console.log('Escribiendo') }
            />
          </div>
          <div className="md:w-auto mb-6">
            <label htmlFor="owner" className="block font-bold text-xs uppercase">
              Propietario
            </label>
            <input id="owner" name="owner" type="text" 
              placeholder="Nombre del Propietario"
              className="text-xs border-2 w-full p-2 mt-1 rounded-md bg-cyan-50 hover:bg-cyan-100 active:bg-cyan-100 focus:outline-none focus:ring focus:ring-cyan-300 transition-all"
              value = {pet['owner-name']}
            />
          </div>
          <div className="md:w-auto mb-6">
            <label htmlFor="owner-email" className="block font-bold text-xs uppercase">
              Correo
            </label>
            <input id="owner-email" name="owner-email" type="email" 
              placeholder="Correo Electronico"
              className="text-xs border-2 w-full p-2 mt-1 rounded-md bg-cyan-50 hover:bg-cyan-100 active:bg-cyan-100 focus:outline-none focus:ring focus:ring-cyan-300 transition-all"
              value = {pet['owner-email']}
            />
          </div>
          <div className="md:w-auto mb-6">
            <label htmlFor="numbre-phone" className="block font-bold text-xs uppercase">
              Telefono
            </label>
            <input id="numbre-phone" name="number-phone" type="phone" 
              placeholder="Numero de Telefono"
              className="text-xs border-2 w-full p-2 mt-1 rounded-md bg-cyan-50 hover:bg-cyan-100 active:bg-cyan-100 focus:outline-none focus:ring focus:ring-cyan-300 transition-all"
              value = {pet['owner-phone']}
            />
          </div>
          <div className="md:w-auto mb-6">
            <label htmlFor="namePet" className="block font-bold text-xs uppercase">
              Fecha Alta
            </label>
            <input id="namePet" name="namePet" type="date" 
              className="text-xs border-2 w-full p-2 mt-1 rounded-md bg-cyan-50 hover:bg-cyan-100 active:bg-cyan-100 focus:outline-none focus:ring focus:ring-cyan-300 transition-all"
              
            />
          </div>
          <div className="md:w-auto mb-6">
            <label htmlFor="symptoms" className="block font-bold text-xs uppercase">
              Sintomas
            </label>
            <textarea id="symptoms" name="symptoms" 
              className="text-xs border-2 w-full p-2 mt-1 rounded-md bg-cyan-50 hover:bg-cyan-100 active:bg-cyan-100 focus:outline-none focus:ring focus:ring-cyan-300 transition-all"
            />
          </div>
          <div className="md:w-auto mb-1">
            <button id="symptoms" name="symptoms" type="submit"
              className="text-xs border-2 w-full p-2 mt-1 text-white font-bold rounded-md bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-100 focus:outline-none focus:ring focus:ring-emerald-300 cursor-pinter transition-all"
            >Agreagar</button>
          </div>

        </div>
      </form>
    </div>
  )
}