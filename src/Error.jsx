export default function Error({type="404", details="Não encontramos a página procurada."}) {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-9xl font-black">{type}</h1>
            <h2>{details}</h2>
        </div>
    )
}