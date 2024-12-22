import { ImageView } from "../../../components/ImageView";
export default function ImageCaption({ image, title, date, description, index }) {

  return (
    <div
      className="space-y-2 py-2"
    >
      <ImageView title={title} date={date} image={image} />
      <p className="text-sm tracking-wide max-w-[400px] flex place-self-center">
        {description}
      </p>
    </div>
  );
}
