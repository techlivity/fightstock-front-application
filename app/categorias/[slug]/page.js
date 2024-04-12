export default function Page({ slug }) {
    const nome = slug != null ? slug : "null"
    return (
            <p>
               {nome}
            </p>
    )
}