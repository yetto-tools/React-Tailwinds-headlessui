

import {Patient} from '../components/Patient' 


export const ListPatients = ({patient, setChangePatient, deletePatient}) =>{
  return (
    <div className="w-full sm:w-5/4 md:w-full">
      <div className="bg-white shadow-2xl rounded-lg pb-5 px-5 mx-5 my-5">
        
        <h2 className="font-black text-center pt-1 mb-4">Listado de Paciente
          <p className="text-md mt-5 ml-2">
            Adminstrar  {''} <span className="text-cyan-500">Pacientes y Citas</span>    

          </p>
        </h2>
        <div className="h-screen-auto overflow-y-scroll ">
           { patient && patient.length
           ?  (patient.map( (item)=>{
                return <Patient 
                      key={item.id}
                      patient={item}
                      setChangePatient={setChangePatient}
                      deletePatient={deletePatient}
                />
             })

           ) : (
            <h2 className='font-black text-2xl text-center'>
              Comienza Agregango algunos pacientes 
            </h2>
           )} 
        </div>
      </div>
  </div>
  )
}