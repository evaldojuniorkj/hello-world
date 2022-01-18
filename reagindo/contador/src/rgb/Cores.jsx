import { CaixaColorida } from './CaixaColorida'
import {useState} from 'react'

export function Cores(){
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(1);
    const [blue, setBlue] = useState(2);

    const [history, setHistory] = useState([]);
    return(
        <>
            <CaixaColorida backgroundColor={`rgb(${red} ${green} ${blue})`} />
            <h3>Red: {red}</h3>
            <input type="range" min={0} max={255} value={red} onChange={(event) => {setRed(parseInt(event.target.value))}}/>
            <h3>Green: {green}</h3>
            <input type="range" min={0} max={255} value={green} onChange={(event) => {setGreen(parseInt(event.target.value))}}/>
            <h3>Blue: {blue}</h3>
            <input type="range" min={0} max={255} value={blue} onChange={(event) => {setBlue(parseInt(event.target.value))}}/>

            <button onClick={() => setHistory((h) => [[red, green, blue], ...h])}>Salvar</button>
        </>
    )
}