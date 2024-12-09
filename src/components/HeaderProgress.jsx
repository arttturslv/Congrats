export function HeaderProgress({ maxIndex = 2, index }) {
  const data = [
    {
      title: "Vamos começar!",
      subtitle: "Preencha com os dados iniciais.",
    },
    {
      title: "Essa é a parte legal!",
      subtitle: "Comente sobre a pessoa em cada imagem.",
    },
    {
      title: "Veja o preview!",
      subtitle:
        "Precisa mudar algo? Volte, modifique e depois volta aqui pra compartilhar!",
    },
  ];

  return (
    <div id="header-creation">
      <h2 className="text-xl">{data[index].title}</h2>
      <p className="text-xs">{data[index].subtitle}</p>

      <div className="relative flex items-center transition-colors duration-700">
        <div className="absolute -z-10 bg-greyHighlight w-full h-1.5 my-2"></div>
        {printBarElements(maxIndex, index)}
      </div>
    </div>
  );
}

function printBarElements(maxIndex, index) {
  let dots = [];

  for (let i = 0; i <= maxIndex*2; i++) {
    if (i % 2 == 0) {
      let color = (i - 1)/2 <= index ? "bg-redHighlight" : "bg-greyHighlight";
      dots.push(<div className={`${color} w-3.5 h-3.5 my-2`}></div>);
    } else {
      let color = i / 2 <= index ? "bg-redHighlight" : "bg-greyHighlight";
      dots.push(<div className={`${color} flex-grow  h-1.5 my-2`}></div>);
    }
  }
  return dots;
}
