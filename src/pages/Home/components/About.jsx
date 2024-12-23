export default function About() {
  return (
    <div className="w-full  space-y-8 justify-between transition-all duration-300 ">
      <div className="text-base space-y-4">
        <h1 className="text-2xl sm:text-3xl font-zig">Como funciona?</h1>
        <div className="flex gap-6 flex-wrap pl-4">
          <div className="bg-gradient-to-br from-greyHighlight/40 px-1 max-sm:px-4 hover:bg-redHighlight/10 to-redHighlight/20 flex flex-col items-center justify-between transition-all duration-200 overflow-hidden rounded-lg  h-[20vw] w-[20vw]  min-h-40 min-w-40 max-w-64 max-h-64 ">
            <p className="font-zig  pt-6  text-center  text-sm max-sm:text-1xl ">
              Preencha os dados
            </p>
            <img
              className="sm:h-[15vw] h-[40vw] aspect-square object-cover"
              src="https://i.imgur.com/ROrVwop.png"
              alt=""
              srcset=""
            />
          </div>

          <div className="bg-gradient-to-br from-greyHighlight/40 px-1 max-sm:px-4 hover:bg-redHighlight/10 to-redHighlight/20 flex flex-col items-center justify-between transition-all duration-200 overflow-hidden rounded-lg  h-[20vw] w-[20vw]  min-h-40 min-w-40 max-w-64 max-h-64 ">
            <p className="font-zig  pt-6  text-center  text-sm max-sm:text-1xl ">
              Adicione detalhes
            </p>
            <img
              className="sm:h-[15vw] h-[40vw] aspect-square object-cover"
              src="https://i.imgur.com/MwMBNFM.png"
              alt=""
              srcset=""
            />
          </div>

          <div className="bg-gradient-to-br from-greyHighlight/40 px-1 max-sm:px-4 hover:bg-redHighlight/10 to-redHighlight/20 flex flex-col items-center justify-between transition-all duration-200 overflow-hidden rounded-lg  h-[20vw] w-[20vw]  min-h-40 min-w-40 max-w-64 max-h-64 ">
            <p className="font-zig  pt-6  text-center  text-sm max-sm:text-1xl ">
              Confira os dados
            </p>
            <img
              className="sm:h-[15vw] h-[40vw] aspect-square object-cover"
              src="https://i.imgur.com/B9Jdjzy.png"
              alt=""
              srcset=""
            />
          </div>

          <div className="bg-gradient-to-br from-greyHighlight/40 px-1 max-sm:px-4 hover:bg-redHighlight/10 to-redHighlight/20 flex flex-col items-center justify-between transition-all duration-200 overflow-hidden rounded-lg  h-[20vw] w-[20vw]  min-h-40 min-w-40 max-w-64 max-h-64 ">
            <p className="font-zig  pt-6  text-center  text-sm max-sm:text-1xl ">
              Compartilhe do jeito que preferir
            </p>
            <img
              className="sm:h-[15vw] h-[40vw] aspect-square object-cover"
              src="https://i.imgur.com/uKjJUbS.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
