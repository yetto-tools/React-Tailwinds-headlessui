

import {Patient} from '../components/Patient' 


export const ListPatients = ({patient, setChangePatient, deletePatient}) =>{
  return (
    <div className="w-full sm:w-5/4 md:w-full">
      

      <div className="bg-white rounded mt-5">
        <h2 className="font-black text-center pt-5">
          <p className="text-md mt-5"><span className="text-cyan-500">Listado de Paciente</span>    
          </p>
        </h2>
        {/* <div className="h-screen-auto overflow-y-scroll "> */}
        <div className="overflow-y-auto h-[39rem]">
          { 
           patient && patient.length ?  (patient.map( (item)=>{
            return <Patient  key={item.id} patient={item} setChangePatient={setChangePatient} deletePatient={deletePatient} />
            })) : ( 
            <h2 className='font-black text-2xl text-center'> Comienza Agregango algunos pacientes </h2>
           )
          } 
        </div>
      </div>
  </div>
  )
}