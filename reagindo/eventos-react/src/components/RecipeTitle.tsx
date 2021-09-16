import './RecipeTitle.css';

// TODO: Criando o componente Titulo de Receitas component
type RecipeProps = {
    title: string;
    feedback: {
        rating: number,
        reviews: number,
    },
}

export function RecipeTitle(props: RecipeProps){
    return (
        <div>
            <h2>{ props.title }</h2>
            <h3 className={props.feedback.rating <= 3.5 ? 'red' : 'green' }>
                nota { props.feedback.rating } de { props.feedback.reviews } reviews
            </h3>
        </div>
    )
}