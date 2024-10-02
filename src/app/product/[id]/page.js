export default async function Product({ params }) {
    const response = await fetch('https://fakestoreapi.com/products/' + params.id)
    const data = await response.json()
    //Está pegando a informação do servidor, que é no formato json, e convertendo em objeto

    return (
        <p>{data.title}</p>
    );
}