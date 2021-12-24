import './styles.css'
export function Post(props){
    return (
        <article>
            <h2>{props.tittle}</h2>
            <small>
                Leia em {props.readingTime} {props.readingTime === 1 ? "minuto" : "minutos"}
            </small>
            {props.children}
        </article>
    )
}