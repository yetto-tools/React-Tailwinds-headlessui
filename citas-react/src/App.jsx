// import reactLogo from './assets/react.svg'
// import './App.css'
// import Navbar from './components/Navbar'
// import Form, { Formulario } from './components/Form'
// import Login from './components/Login'
// import ComboBoxAutocomplete from './components/ComboBoxAutocomplete'

import {useState, useEffect } from 'react';
import { Header  } from './components/Header'
import { Form  } from './components/Form'
import { ListPatients } from './components/ListPatients'
import { Patient } from './components/Patient'

function App() {

  const [patient, setPatient] = useState([]); 
  const [changePatient, setChangePatient] = useState({})

  const deletePatient = (id) => {
    const updateListPatient = patient.filter(p => p.id !== id);
    setPatient(updateListPatient)
  }

  useEffect( () => {
    const PersistancePatient = () => {
      const ListExistend = JSON.parse(localStorage.getItem('pets')) ?? [];
      setPatient(ListExistend)
    }
    PersistancePatient();
  }, []);

  useEffect(() =>{
    localStorage.setItem('pets', JSON.stringify(patient));
  }, [patient]);

  return (
    <>
      <div className='container mx-auto pb-20'>
          <div className="grid grid-cols md:grid-cols lg:grid-cols">
            <div className="flex justify-center"><Header /></div>  
          </div>
          <div className="lg:inline-flex w-full">
          {/* <div className="grid grid-cols sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2"> */}
            <div className="lg:w-1/2">
              <Form 
                patient={patient}
                setPatient={setPatient}
                changePatient={changePatient}
                setChangePatient={setChangePatient}
              />
            </div>
            <div className="lg:w-full">
              <ListPatients 
                patient={patient}
                setChangePatient={setChangePatient}
                deletePatient={deletePatient}
              />
            </div>
          </div>
      </div>
    </>
  )
}

export default App
