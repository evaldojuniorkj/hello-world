import React, { useState } from 'react';

export function PasswordGenerator() {

    const [tamanhoSenha, setTamanhoSenha] = useState(8);    
    const [tamanhoDigito, setTamanhoDigito] = useState(10);
    const [tamanhoSimbolo, setTamanhoSimbolo] = useState(0)
    
    const getSenhaAleatoria = () => {
        return (0)    
    }

    return (
        <>
            <input type="text" />
            <br/>
            <div className="slider">
                <label htmlFor="password-length">Tamanho</label>
                <input id="password-length" type="range" min="4" max="64" onChange={(event) => setTamanhoSenha(parseInt(event.target.value))} value={tamanhoSenha}/>
                <span>{tamanhoSenha}</span>
            </div>
            <div className="slider">
                <label htmlFor="digit-length">Digitos</label>
                <input id="digit-length" type="range" min="4" max="64" onChange={(event) => setTamanhoDigito(parseInt(event.target.value))} value={tamanhoDigito}/>
                <span>{tamanhoDigito}</span>
            </div>
            <div className="slider">
                <label htmlFor="symbol-length">Símbolos</label>
                <input id="digit-length" type="range" min="0" max="64" onChange={(event) => setTamanhoSimbolo(parseInt(event.target.value))} value={tamanhoSimbolo}/>
                <span>{tamanhoSimbolo}</span>
            </div>
        </>
    )
}