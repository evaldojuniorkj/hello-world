import imagem1 from './images.jpg'
import './style.css'

export function Header(){
    return(
        <header>
            <h1>Meu BLog!</h1>
            <img src={imagem1} alt="Mulher com camera de fotografica"/>
        </header>
    )
}