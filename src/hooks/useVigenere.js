import {useEffect, useState} from "react";

const abecedario = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
export const useVigenere = () => {
    const [encryptedText, setEncryptedText] = useState()

    const Cifrar = (text,clave) => {
        text = limpiarEspacios(text);
        clave = limpiarEspacios(clave);
        const arrText = text.split('');
        const arrClave = clave.split('');
        let result = '';
        setEncryptedText('');

        for (let i = 0; i < arrText.length; i++) {
            const n = numberSearch(arrText[i]);
            const c = numberSearch(arrClave[i]);
            const r = (n + c) % 26;
            result += letterSearch(r);
        }
        setEncryptedText(result);
    }
    const numberSearch = (letter) => {
        for (let i = 0; i < abecedario.length; i++) {
            if (abecedario[i] === letter) {
                return i;
            }
        }
    }

    const letterSearch = (number) => {
        for (let i = 0; i < abecedario.length; i++) {
            if (i === number) {
                return abecedario[i];
            }
        }
    }
    const limpiarEspacios = (cadena) => {
        return cadena.replace(/\s+/g, '');
    }


    return {
        encryptedText,

        Cifrar

    }
}