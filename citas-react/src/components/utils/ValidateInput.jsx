import {useState, useEffect} from 'react'

export const ValidateInput = ({children})=>{
    return (
        <small className='invisible peer-invalid:visible text-red-500  text-light text-xs mb-0'>
            {children}
        </small>
    )
}