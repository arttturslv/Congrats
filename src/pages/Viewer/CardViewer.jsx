import { useState } from "react";
import { getCardQuantity, getCard } from "../../hooks/useAPI";
import { useEffect } from "react";
import { div, p } from "motion/react-client";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Auth from "./Auth";
import Introduction from "./Introduction";
import Viewer from "./Viewer";
export default function CardView() {
  const { id, passKey } = useParams();

  const [card, setCard] = useState(null);
  const [cardStatus, setCardStatus] = useState('null');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nextPage, setNextPage] = useState(false);

  const [userPassKey, setUserPassKey] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        let {status, res} = await getCard(id, passKey);
        setCardStatus(status); 
        if(status=="success") {
          setCard(res);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (card === null) {
      fetchData();
    }
  }, [id, passKey]);

  if (error) {
    return (
      <div className="space-y-2 text-center flex justify-center items-center h-screen flex-col">
        <p className=" text-[#d34444]">{error.message}</p>

        <Link
          className="w-full flex justify-center group items-center gap-2 bg-dark border-redHighlight border-4 px-3 py-1 placeholder:text-sm"
          id="continuar"
          to="/"
        >
          <>
            <img
              className="fill-light size-4 group-hover:w-5 rotate-180 transition-all duration-400"
              src="../src/assets/images/arrow.png"
              alt="arrow icon"
            />
            Voltar
          </>
        </Link>
      </div>
    );
  } 

  if (loading) {
    return (
      <div className="space-y-2 text-center flex justify-center items-center h-screen flex-col">
        <img
              className={`size-32`}
              src="./src/assets/images/gift-box.png"
              alt="caixa de presente"
            ></img>
        <p className=" text-light animate-pulse">Procurando por presentes</p>
      </div>
    )
  }

  if (cardStatus=="success") {
    return (
      nextPage ?
      <Viewer card={card}></Viewer>
      :
      <Introduction receiver={card.receiverName} setCard={setCard} setShowPage={setNextPage}></Introduction>
    )
  }

  if (cardStatus=="pending") {
    return (
      <Auth setPassKey={setUserPassKey} passKey={userPassKey}></Auth>
    )
  }

}
