export const Patients = () =>{
    return (
        <div className="">
        <div className="md:flex">
        </div>
        <div className="bg-white shadow-2xl rounded-lg pb-5 px-5 mx-auto my-auto">
          <h2 className="font-black text-center pt-1 mb-4">
            <p className="text-lg mt-5 ml-2">
              Adminstrar  {''} <span className="text-cyan-500">Pacientes y Citas</span>    
            </p>
          </h2>
          <div className="h-screen-auto overflow-y-scroll ">
            <div className="bg-white grid grid-row text-sm shadow-lg shadow-cyan-900/40 rounded-lg border-solid border-2 border-slate-200 p-5 m-5">
                <div className="grid grid-cols md:grid-cols-6">
                    <div>
                        <p className="font-bold mb3 text-gray-700 uppercase">Mascota:</p>
                    </div>
                    <div><span className="font-normal">{''}</span></div>
                </div>
                <div className="grid grid-cols md:grid-cols-6">
                    <div>
                        <p className="font-bold mb3 text-gray-700 uppercase">Propietario:</p>
                    </div>
                    <div><span className="font-normal">{''}</span></div>
                </div>
                <div className="grid grid-cols md:grid-cols-6">
                    <div>
                        <p className="font-bold mb3 text-gray-700 uppercase">Email</p>
                    </div>
                    <div><span className="font-normal">{''}</span></div>
                </div>
                <div className="grid grid-cols md:grid-cols-6">
                    <div>
                        <p className="font-bold mb3 text-gray-700 uppercase">Direccion</p>
                    </div>
                    <div><span className="font-normal">{''}</span></div>
                </div>
                <div className="grid grid-cols md:grid-cols-6">
                    <div>
                        <p className="font-bold mb3 text-gray-700 uppercase">Telefono</p>
                    </div>
                    <div><span className="font-normal">{''}</span></div>
                </div>
                <div className="grid grid-cols md:grid-cols-6">
                    <div>
                        <p className="font-bold mb3 text-gray-700 uppercase">Sintomas:</p>
                    </div>
                    <div><span className="font-normal">{''}</span></div>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
}