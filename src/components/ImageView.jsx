export function ImageView({ image, title, date }) {
  function formatDate(date) {
    if (date == null) return;
    let newDate = new Date(date).toLocaleDateString("pt-BR");
    return newDate;
  }

  return (
    <div
      className="w-72 h-80 sm:w-80 sm:h-96 place-self-center relative border-redHighlight border-[6px]"
    >
      <div className="absolute w-full h-[30%] bottom-0 bg-gradient-to-b to-dark from-transparent"></div>
      <img
        className=" w-full h-full object-cover"
        src={image}
        alt={title || "Imagem do usuário"}
      />
      <span className="absolute bottom-0 pl-4 pb-2">
        <h5 className="font-zig">{title}</h5>
        <h6>{formatDate(date)}</h6>
      </span>
    </div>
  );
}
