import {useState, useEffect} from 'react'


const LocalDate = (value) => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const date = new Date(value).toLocaleDateString('es-GT', options);
  return date;
}

export const Patient = ({patient, setChangePatient, deletePatient})=>{

    const  { id, petName, petOwnerName, petOwnerPhone, petOwnerAddress, petOwnerEmail, petDateDischarged, SymptomsPet }  = patient;
    
    const handleDelete = ()=>{ 
      const response = confirm ("Desea Elimiar? "+petName)
      if (response){
        deletePatient(id)
      }
    }

    return(
        <div className="bg-white text-sm shadow-lg shadow-cyan-900/40 rounded-lg border-solid border-2 border-slate-200 p-5 m-5">
          <div className="inline-grid grid-cols-1">              
            <div className="break-words text-normal">
              <div className="inline-block font-bold mb3 text-gray-700 uppercase">Fecha de Alta:</div>
              <div className="inline-block pl-3">{LocalDate(petDateDischarged)}</div>
            </div>
            
            <div className="break-words text-normal">
              <div className="inline-block font-bold mb3 text-gray-700 uppercase">Mascota:</div>
              <div className="inline-block pl-3">{petName}</div>
            </div>
            
            <div className="break-words text-normal">
              <div className="inline-block font-bold mb3 text-gray-700 uppercase">Propietario:</div>
              <div className="inline-block pl-3">{petOwnerName}</div>
            </div>
            <div className="break-words text-normal">
              <div className="inline-block font-bold mb3 text-gray-700 uppercase">Direccion:</div>
              <div className="inline-block pl-3">{petOwnerAddress}</div>
            
            </div>
            <div className="break-words text-normal">
              <div className="inline-block font-bold mb3 text-gray-700 uppercase">Telefono:</div>
              <div className="inline-block pl-3">{petOwnerPhone}</div>
            
            </div>
            <div className="break-words text-normal">
              <div className="inline-block font-bold mb3 text-gray-700 uppercase">Email:</div>
              <div className="inline-block pl-3">{petOwnerEmail}</div>
            
            </div>
            <div className="break-words text-normal">
              <div className="inline-block font-bold mb3 text-gray-700 uppercase">Sintomas:</div>
              <div className="inline-block pl-3">{SymptomsPet}</div>
            </div>            
          </div>
          <div className='flex justify-between mx-2 mt-2'>
          <button className='bg-sky-600 hover:bg-sky-400 text-white font-bold px-3 rounded'
            onClick={ () =>{ setChangePatient(patient)} }
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
              <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
            </svg>
          </button>
            <button 
              type='button'
              className='bg-red-700 hover:bg-red-500 text-white font-bold p-1 rounded'
              onClick={handleDelete}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>  
            </button>
          </div>         
        </div>
    )
}