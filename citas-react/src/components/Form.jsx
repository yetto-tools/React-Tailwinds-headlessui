import {useState, useEffect, useRef } from 'react';
import { ValidateInput } from './utils/ValidateInput';

const generarId = () => {
  const random = Date.now().toString(36) + Math.random().toString(36).substring(2,36);
  return random
}



export const Form = ({patient, setPatient, changePatient, setChangePatient}) => {
  const [petName, setPetName] = useState('');
  const [petOwnerName, setOwnerName] = useState('');
  const [petOwnerPhone, setOwnerPhone] = useState('');
  const [petOwnerAddress, setOwnerAddress] = useState('');
  const [petOwnerEmail, setOwnerEmail] = useState('');
  const [petDateDischarged, setDateDischarged] = useState('');
  const [SymptomsPet, setSymptomsPet] = useState('');
  const [error, setError] = useState(false);


  useEffect(  ()=>{
      if(Object.keys(changePatient).length > 0){
        setPetName(changePatient.petName)
        setOwnerName(changePatient.petOwnerName)
        setOwnerEmail(changePatient.petOwnerEmail)
        setOwnerPhone(changePatient.petOwnerPhone)
        setOwnerAddress(changePatient.petOwnerAddress)
        setDateDischarged(changePatient.petDateDischarged)
        setSymptomsPet(changePatient.SymptomsPet)
    }else{

    }
    },[changePatient]
  )

  const handleSubmit = (e) =>{
    e.preventDefault();
    const inputs = [
        petName,
        petOwnerName,
        petOwnerEmail,
        petOwnerPhone,
        petDateDischarged,
        SymptomsPet,
      ];

    if(inputs.includes(''))
    {
      return setError(true);
    }
    const ObjectPet = {
      petName,
      petOwnerName,
      petOwnerPhone,
      petOwnerAddress,
      petOwnerEmail,
      petDateDischarged,
      SymptomsPet,

    }

    if (changePatient.id){
      //editar registro
      ObjectPet.id = changePatient.id
      const UpdatePatient = patient.map( patientState =>
        patientState.id === changePatient.id   ? ObjectPet : patientState
      )

      setPatient(UpdatePatient)
      //limpiar objeto de memoria
      setChangePatient({})


    }else{
      //nuevo registro
      //pasamos el objeto al componente app
      ObjectPet.id = generarId()
      setPatient([...patient, ObjectPet ]);
    }

    // limpiamos los cambos del fromulario
    setPetName('');
    setOwnerName('');
    setOwnerPhone('');
    setOwnerAddress('');
    setOwnerEmail('');
    setDateDischarged('');
    setSymptomsPet('');

  }

  const handleClean = ()=>{
    setPetName('');
    setOwnerName('');
    setOwnerPhone('');
    setOwnerAddress('');
    setOwnerEmail('');
    setDateDischarged('');
    setSymptomsPet('');
    // limpiamos el objeto en memoria
    setChangePatient({})

  }

  return (
    <div className="w-full sm:w-5/4  md:w-full">
      <div className="">
        <form onSubmit={handleSubmit} action="" className="bg-white shadow-2xl rounded-lg pb-5 px-5 mx-5 my-5">
          <div className='flex justify-end'>
              <button title="Limpiar Campos" type='button'
                className='mt-4 text-red-400 font-bold rounded hover:bg-red-500 hover:text-white transition-all'
                onClick={handleClean}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

              </button>
          </div>
          <h2 className="font-black text-center mb-4">
            <span className="text-lg mt-1 ml-2">
              Añadir y  <small className="text-cyan-500">Administrar</small>
            </span>
          </h2>
          <div className="row">
            <div className="md:w-auto mb-2">
              <label htmlFor="name-pet" className="block font-bold text-xs uppercase">
                Mascota: {petName}
              </label>
              <input id="name-pet" name="name-pet" type="text" 
                placeholder="Nombre de la Mascota"
                className="text-xs border-2 w-full p-2 rounded-md active:bg-sky-50 focus:outline-none focus:ring focus:ring-sky-300 transition-all needs-validation"
                value = {petName}
                onChange={(e)=>{ setPetName(e.target.value);}}
              />

            </div>
            <div className="md:w-auto mb-2">
              <label htmlFor="owner" className="block font-bold text-xs uppercase">
                Propietario
              </label>
              <input id="owner" name="owner" type="text" 
                placeholder="Nombre del Propietario"
                className="text-xs border-2 w-full p-2 rounded-md active:bg-sky-50 focus:outline-none focus:ring focus:ring-sky-300 transition-all needs-validation"
                value = {petOwnerName}
                onChange={(e)=>{setOwnerName(e.target.value);}}
              />

            </div>
            <div className="md:w-auto mb-2">
              <label htmlFor="owner-email" className="block font-bold text-xs uppercase">
                Correo
              </label>
              <input id="owner-email" name="owner-email" type="email" 
                placeholder="Correo Electronico"
                className="text-xs border-2 w-full p-2 rounded-md active:bg-sky-50 focus:outline-none focus:ring focus:ring-sky-300 transition-all needs-validation"
                value = {petOwnerEmail}
                onChange={(e)=>{setOwnerEmail(e.target.value);}}
              />

            </div>
            <div className="md:w-auto mb-2">
              <label htmlFor="numbre-phone" className="block font-bold text-xs uppercase">
                Telefono
              </label>
              <input id="numbre-phone" name="number-phone" type="phone" 
                placeholder="Numero de Telefono"
                className="text-xs border-2 w-full p-2 rounded-md active:bg-sky-50 focus:outline-none focus:ring focus:ring-sky-300 transition-all needs-validation"
                value = {petOwnerPhone}
                onChange={(e)=>{ setOwnerPhone(e.target.value);}}
              />
            </div>
            <div className="md:w-auto mb-2">
              <label htmlFor="address" className="block font-bold text-xs uppercase">
                Direccion
              </label>
              <textarea id="address" name="address"
                className="text-xs border-2 w-full p-2 rounded-md active:bg-sky-50 focus:outline-none focus:ring focus:ring-sky-300 transition-all needs-validation"
                value={petOwnerAddress}
                onChange={(e)=>{setOwnerAddress(e.target.value);}}
              />
            </div>
            <div className="md:w-auto mb-2">
              <label htmlFor="date-discharged" className="block font-bold text-xs uppercase">
                Fecha Alta
              </label>
              <input id="date-discharged" name="date-discharged" type="date"
                className="text-xs border-2 w-full p-2 rounded-md active:bg-sky-50 focus:outline-none focus:ring focus:ring-sky-300 transition-all needs-validation"
                value={petDateDischarged}
                onInput={(e)=>{setDateDischarged(e.target.value);}}
              />
            </div>
            <div className="md:w-auto mb-2">
              <label htmlFor="symptoms" className="block font-bold text-xs uppercase">
                Sintomas
              </label>
              <textarea id="symptoms" name="symptoms"
                className="text-xs border-2 w-full p-2 rounded-md active:bg-sky-50 focus:outline-none focus:ring focus:ring-sky-300 transition-all needs-validation"
                value={SymptomsPet}
                onChange={(e)=>{setSymptomsPet(e.target.value);}}
              />

            </div>
            <div className="md:w-auto mb-1">
              <button id="symptoms" name="symptoms" type="submit" title="Agregar Nuevo Elemento a la Lista"
                className={changePatient.id ? 'text-xs border-2 w-full p-2 mt-1 text-white font-bold rounded-md bg-sky-700 hover:bg-sky-600 active:bg-sky-100 focus:outline-none focus:ring focus:ring-sky-300 cursor-pinter transition-all needs-validation' : 'text-xs border-2 w-full p-2 mt-1 text-white font-bold rounded-md bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-100 focus:outline-none focus:ring focus:ring-emerald-300 cursor-pinter transition-all needs-validation' }
                onClick={(e)=>{console.log('enviando')}}
              >{changePatient.id ? "Editar" :"Agregar"}</button>
            </div>

          </div>
        </form>
      </div>
    </div>
  )
}