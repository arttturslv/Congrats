export function ImageView({ image, title, date, show=true }) {
  return (
    <div className="size-72 place-self-center relative border-redHighlight border-[6px]">
      <div className="absolute w-full h-full bg-gradient-to-b to-dark/80 from-transparent"></div>
      <img
        className=" w-full h-full"
        src={image}
        alt={title || "Imagem do usuário"}
      />
      <span className="absolute bottom-0 pl-4 pb-2">
        <h5>{title}</h5>
        <h6>{date}</h6>
      </span>
    </div>
  );
}
