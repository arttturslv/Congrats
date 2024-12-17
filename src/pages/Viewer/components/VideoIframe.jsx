import Line from "../../../components/Line";

export default function VideoIframe({ URL }) {
  return (
    URL && (
      <>
        <div className="overflow-hidden relative w-[80%] h-[80%] pt-[45.25%] self-center place-self-center">
          <iframe
            className="w-full h-full absolute left-0 top-0 self-center"
            src={`${URL}?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1`}
            frameborder="0"
            allow="autoplay; encrypted-media"
          ></iframe>
        </div>
        <Line></Line>
      </>
    )
  );
}
