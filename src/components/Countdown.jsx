import { useState, useEffect } from "react";
import Line from "./Line";

export default function Countdown({ date }) {
  const dateMet = new Date(date);

  const [time, setTime] = useState(0);

  const [distanceInMili, setDistanceInMili] = useState(0);

  const SEC = 1000;
  const MIN = SEC * 60;
  const HOUR = MIN * 60;
  const DAY = HOUR * 24;

  useEffect(() => {
    function updateCountDown() {
      let res = new Date() - dateMet;

      if (res < 0) {
        clearInterval(interval);
        console.warn("Saindo do countdown");
        return;
      }

      setDistanceInMili(res);

      let anos = Math.floor(res / (365.25 * 24 * 60 * 60 * 1000));
      let restoAno = res % (365.25 * 24 * 60 * 60 * 1000);

      let mes = Math.floor(restoAno / (30.42 * 24 * 60 * 60 * 1000)); // Média de dias no mês
      let restoMes = restoAno % (30.42 * 24 * 60 * 60 * 1000);

      let dias = Math.floor(restoMes / (24 * 60 * 60 * 1000));
      let restoDias = restoMes % (24 * 60 * 60 * 1000);

      let horas = Math.floor(restoDias / (60 * 60 * 1000));
      let restoHoras = restoMes % (60 * 60 * 1000);

      let minutos = Math.floor(restoHoras / (60 * 1000));
      let restoMinutos = restoHoras % (60 * 1000);

      let segundos = Math.floor(restoMinutos / 1000);

      setTime([anos, mes, dias, horas, minutos, segundos]);
    }

    const interval = setInterval(updateCountDown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    date != null &&
    distanceInMili > 0 && (
      <div>
        <Line></Line>

        <h3 className="font-zig">Nos conhecemos a:</h3>
        <div className="text-xs flex flex-wrap">
          {time[0] > 0 ? <p className="pr-2">{time[0]} anos,</p> : null}
          {time[1] > 0 || time[0] > 0 ? (
            <p className="pr-2">{time[1]} meses,</p>
          ) : null}
          <p className="pr-2">{time[2]} dias,</p>
          <p className="pr-2">{time[3]} horas,</p>
          <p className="pr-2">{time[4]} minutos,</p>
          <p className="pr-2">{time[5]} segundos</p>
        </div>
        <Line></Line>
      </div>
    )
  );
}
