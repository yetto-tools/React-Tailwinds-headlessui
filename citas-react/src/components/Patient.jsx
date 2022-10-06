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

      <div className='mx-auto'>
      <div className='bg-white text-sm shadow-lg shadow-cyan-900/40 rounded-lg border-solid border-2 border-slate-200 p-5 m-5'>
        <div className='flex justify-between mx-2 mt-2 mb-5'>
          <div>
            <button title="Editar Tarjeta" type='button' className='text-sky-400 font-bold rounded hover:p-1 hover:bg-sky-500 hover:text-white transition-all'
              onClick={ () =>{ setChangePatient(patient)} }
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
              </svg>
            </button>
          </div>
          <div>
            <span className='text-md font-bold'>{LocalDate(petDateDischarged)}</span>
          </div>
          <div>
            <button title="Limpiar Campos" type='button'
              className='text-red-400 font-bold rounded hover:bg-red-500 hover:text-white transition-all'
              onClick={handleDelete}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className='px-6'>
          <div className='font-bold text-xl mb-2'>{petName}</div>
          <p className='text-gray-700 text-base'>{SymptomsPet}</p>
        </div>
        <div className='content-center px-6 pt-4 pb-2'>
          <span className='inline-block bg-cyan-100 border-solid border-2 border-cyan-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>{petOwnerName}</span>
          <span className='inline-block bg-cyan-100 border-solid border-2 border-cyan-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>{petOwnerPhone}</span>
          <span className='inline-block bg-cyan-100 border-solid border-2 border-cyan-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>{petOwnerEmail}</span>
          <span className='inline-block bg-cyan-100 border-solid border-2 border-cyan-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>{petOwnerAddress}</span>
        </div>
      </div>
      </div>


    )
}