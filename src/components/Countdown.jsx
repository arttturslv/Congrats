import { div } from "motion/react-client";
import { useRef, useState, useEffect } from "react";

export default function Countdown({ date =  "2020-12-13T02:30"}) {
  const dateMet = new Date(date);

  const [time, setTime] = useState(0);
  const [distanceInMili, setDistanceInMili] = useState(0);

  const SEC = 1000;
  const MIN = SEC * 60;
  const HOUR = MIN * 60;
  const DAY = HOUR * 24;

  useEffect(() => {
    function updateCountDown() {
      const now = new Date();

      let res = new Date() - dateMet;
      console.log(res);
      
      if (res < 0) {
        clearInterval(interval);
        console.warn("Saindo do countdown");
        return;
      }

      setDistanceInMili(res);

      let anos = Math.floor(res / (365.25 * 24 * 60 * 60 * 1000)); 
      let restoAno = res % (365.25 * 24 * 60 * 60 * 1000); 

      let mes = Math.floor(restoAno / (12 * 24 * 60 * 60 * 1000));
      let restoMes = restoAno % (12 * 24 * 60 * 60 * 1000);

      let dias = Math.floor(restoMes / (24 * 60 * 60 * 1000));
      let restoDias = restoMes % (24 * 60 * 60 * 1000);

      let horas = Math.floor(restoDias / (60 * 60 * 1000));
      let restoHoras = restoMes % (60 * 60 * 1000);

      let minutos = Math.floor(restoHoras / (60 * 1000));
      let restoMinutos = restoHoras % (60 * 1000);

      let segundos = Math.floor(restoMinutos / (1000));

      console.log([anos, mes, dias, horas, minutos, segundos])
      setTime([anos, mes, dias, horas, minutos, segundos]);
    }

    const interval = setInterval(updateCountDown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    distanceInMili > 0 && (
      <div>
        <h3>Juntos a:</h3>
        <div className="text-xs flex flex-wrap">
          {time[0] > 0 ? <p className="pr-2">{time[0]} anos,</p> : null} 
          {time[1] > 0 || time[0] > 0 ? <p className="pr-2">{time[1]} meses,</p> : null} 
          <p className="pr-2">{time[2]} dias,</p> 
          <p className="pr-2">{time[3]} horas,</p> 
          <p className="pr-2">{time[4]} minutos,</p>
          <p className="pr-2">{time[5]} segundos</p> 
        </div>
      </div>
    )
  );
  
}  