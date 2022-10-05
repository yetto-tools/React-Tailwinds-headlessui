import { Fragment } from 'react'
import { Disclosure, Menu, Combobox,Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const Form = () => {
	return (
		<div className="grid h-screen place-items-center">
			<form className="bg-white w-full max-w-lg shadow-md rounded px-8 pt-6 pb-8 mb-4">
			  <div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
				  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
					First Name
				  </label>
				  <input  id="grid-first-name" type="text" placeholder="Nombre"  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"/>
				  <p className="text-red-500 text-xs italic">Please fill out this field.</p>
				</div>
				<div className="w-full md:w-1/2 px-3">
				  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
					Last Name
				  </label>
				  <input  id="grid-last-name" type="text" placeholder="Apellido"  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
				</div>
			  </div>
			  <div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full px-3">
				  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
					Password
				  </label>
				  <input  id="grid-password" type="password" placeholder="******************" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
				  <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
				</div>
			  </div>
			  <div className="flex flex-wrap -mx-3 mb-2">
				<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
				  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
					City
				  </label>
				  <input  id="grid-city" type="text" placeholder="Albuquerque"  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
				</div>
				<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
				  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
					State
				  </label>
				  <div className="relative">
					<select  id="grid-state" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
					  <option>New Mexico</option>
					  <option>Missouri</option>
					  <option>Texas</option>
					</select>
					<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
					  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
					</div>
				  </div>
				</div>
				<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
				  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
					Zip
				  </label>
				  <input  id="grid-zip" type="text" placeholder="90210"  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
				</div>
			  </div>
			</form>
		</div>
	)
}


export default Form