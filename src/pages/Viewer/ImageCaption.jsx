import { ImageView } from "../../components/ImageView";

export default function ImageCaption( {imagePreview, title, date, description, index} ) {
  return (
    <div className="space-y-2">
        <ImageView title={title} date={date} imagePreview={imagePreview} />
        <p className="text-sm tracking-[2px] max-w-[400px] text-center flex place-self-center">{description}</p>
    </div>
  );
}
