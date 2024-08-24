import {CifradoBeaufortPage, CifradoVigenerePage} from "./pages/index.js";


export const HomeApp = () => {
    return (
        <>
            <header className='bg-black text-white p-3'>
                <h1>Métodos de encriptación</h1>
            </header>
            <div className='container mt-4'>
                <div>
                    <h1>Método Alfabeto Polialfabético: </h1>
                    <CifradoVigenerePage />
                    <CifradoBeaufortPage />
                </div>
                <div>
                    <h1>Método Alfabeto de Transposición: </h1>
                </div>
                <div>
                    <h1>Método Alfabeto Homofónico: </h1>
                </div>
            </div>

        </>
    )
}