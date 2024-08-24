import {useState} from "react";
import {useAppForm, useVigenere} from "../hooks/index.js";


export const CifradoVigenerePage = () => {
    const {register,
        handleSubmit,
        errors} = useAppForm()
    const {Cifrar, encryptedText} = useVigenere()
    const onsSubmit = (data) => {
        Cifrar(data.cadena.toUpperCase(), data.clave.toUpperCase());
    }
    const onDecrypt = () => {
        console.log('Desencriptar')
    }

    return (
        <div className='card '>
            <p className='font-bold'>Cifrado Vigenere:</p>
            <form onSubmit={handleSubmit(onsSubmit)}>
                <div className='grid grid-cols-2 gap-4'>
                    <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700">Cadena</label>
                        <input
                            type='text'
                            className="w-full border border-gray-300 rounded-lg p-2 mt-2 mb-2"
                            placeholder='cadena'
                            {...register('cadena', {required: 'La cadena es requerido'})}
                        />
                        {errors.cadena && <p className='text-red-500'>{errors.cadena.message}</p>}
                    </div>
                    <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700">Clave</label>
                        <input
                            type='text'
                            className="w-full border border-gray-300 rounded-lg p-2 mt-2 mb-2"
                            placeholder='clave'
                            {...register('clave', {required: 'La clave es requerido'})}
                        />
                        {errors.clave && <p className='text-red-500'>{errors.clave.message}</p>}
                    </div>
                </div>
                <div className='font-bold'>Texto Encriptado: {encryptedText}</div>
                <button type='submit' className='btn'>Encriptar</button>
                <button
                    onClick={onDecrypt}
                    type='button' className='btn'>Desencriptar</button>

            </form>


        </div>
    )
}