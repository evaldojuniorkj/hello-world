type PrepareRecipeProps = {
    preparo: {
        passo: string,
    }[]
}

export function PrepareRecipe(props: PrepareRecipeProps) {
    const passos = props.preparo.map((passoApasso, index) => {
        return (
            <li key={index}>
                {passoApasso.passo}
            </li>               
        )
    })

    return (
        <div>
            <h3>modo de preparo</h3>
        <ol>
            {passos}
        </ol>
        </div>
    )

}