import { ImageView } from "../../../components/ImageView";

export default function ImageCaption( {image, title, date, description, index} ) {
  return (
    <div className="space-y-2">
        <ImageView title={title} date={date} image={image} />
        <p className="text-sm tracking-[2px] max-w-[400px] text-center flex place-self-center">{description}</p>
    </div>
  );
}
