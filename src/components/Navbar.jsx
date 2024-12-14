import { Link } from "react-router-dom";
import Line from "./Line";

export default function Navbar() {
  return (
    <header className="my-3">
    <Link
      id="page-header"
      to={"/"}
      className="flex items-center gap-1 justify-center hover:text-redHighlight transition-colors duration-300"
    >
      <img
        className="size-8"
        src="../src/assets/images/gift-box.png"
        alt="gift box icon"
      />
      <h1 className="text-3xl  font-zig">Congrats</h1>
    </Link>
          <Line></Line>
    
    </header>

  );
}
