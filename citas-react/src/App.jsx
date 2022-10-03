// import reactLogo from './assets/react.svg'
// import './App.css'
// import Navbar from './components/Navbar'
// import Form, { Formulario } from './components/Form'
// import Login from './components/Login'
// import ComboBoxAutocomplete from './components/ComboBoxAutocomplete'


import Navbar from './components/Navbar'
import { Header  } from './components/Header'
import { Form  } from './components/Form'
import { Patients } from './components/Patients'
// import { Patients } from './components/Patients'
function App() {
  return (
    <>
      <Navbar/>
      
      <div className='md:container md:mx-auto pb-5'>
          <div className="grid grid-rows grid-flow-col gap-4 mb-2">
          <div className="grid-cols-none"><Header/></div>  
          </div>
          <div className="grid grid-rows grid-flow-col gap-4 py-5">
            <div className="row-span"><Form/></div>
            <div className="row-span"><Patients/></div>
          </div>
      </div>
    </>
  )
}

export default App
