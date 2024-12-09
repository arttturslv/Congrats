import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function CreateMessage() {
  const [title, setTitle] = useState("Feliz aniversário");
  const [senderName, setSenderName] = useState("Artur");
  const [receiverName, setReceiverName] = useState("Julia");
  const [dateMet, setDateMet] = useState("");
  const [timeMet, setTimeMet] = useState("");
  const [images, setImages] = useState([]);

  const [imageTitle, setImageTitle] = useState("");

const [imagesInformation, setImagesInformation] = useState([
    {  
        id: 0,
        title: 'gato de pato 1',
        date: '20/04/2024',
        description: '',
    },
    {
        id: 1,
        title: 'gato de pato 2',
        date: '20/04/2024',
        description: '',
    },
    {
        id: 2,
        title: 'gato de pato 3',
        date: '20/04/2024',
        description: 'Descriptions',
    }
])


  return (
    <div className="px-5 py-8 h-[100dvh]">
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
        <h1 className="text-3xl">Congrats</h1>
      </Link>
      <div className="bg-greyHighlight h-0.5 mx-8 my-2"></div>

      <div id="header-creation">
        <h2 className="text-xl">Vamos começar!</h2>
        <p className="text-xs">Preencha com os dados iniciais</p>

        <div className="relative flex justify-between items-center">
          <div className="absolute -z-10 bg-greyHighlight w-full h-1.5 my-2"></div>
          <div className="bg-redHighlight w-3.5 h-3.5 my-2"></div>
          <div className="bg-greyHighlight w-3.5 h-3.5 my-2"></div>
          <div className="bg-greyHighlight w-3.5 h-3.5 my-2"></div>
        </div>
      </div>

      <div id="form-creation">
        <form className="space-y-2 my-4" action="#">
          {/* {form1(title, setTitle, senderName, setSenderName, setReceiverName, receiverName, dateMet, setDateMet, images, setImages) } */}

            {/* {formImages(imagesInformation, setImagesInformation)} */}

            {FormPreview(title, senderName, receiverName, imagesInformation)}


          <button
            className="w-full flex justify-center group items-center gap-2 bg-dark border-redHighlight border-4 px-3 py-1 placeholder:text-sm"
            id="continuar"
          >
            Continuar
            <img
              className="fill-light size-4 group-hover:w-5 transition-all duration-400"
              src="../src/assets/images/arrow.png"
              alt="arrow icon"
            />
          </button>
        </form>
      </div>
    </div>
  );
}

function form1({
  title,
  setTitle,
  senderName,
  setSenderName,
  setReceiverName,
  receiverName,
  dateMet,
  setDateMet,
  images,
  setImages,
}) {
  return (
    <>
      <div className="h-min w-full space-y-1">
        <label htmlFor="title">Título:*</label>
        <input
          className="w-full bg-dark border-redHighlight border-4 px-3 py-1 placeholder:text-sm"
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Remetente"
          required
        />
      </div>
      <div className="h-min w-full space-y-1">
        <label htmlFor="senderName">Qual seu nome?*</label>
        <input
          className="w-full bg-dark border-redHighlight border-4 px-3 py-1 placeholder:text-sm"
          type="text"
          name="senderName"
          id="senderName"
          value={senderName}
          onChange={(e) => setSenderName(e.target.value)}
          placeholder="Destinatário"
          required
        />
      </div>
      <div className="h-min w-full space-y-1">
        <label htmlFor="receiverName">Para quem é?*</label>
        <input
          className="w-full bg-dark border-redHighlight border-4 px-3 py-1 placeholder:text-sm"
          type="text"
          name="receiverName"
          id="receiverName"
          value={receiverName}
          onChange={(e) => setReceiverName(e.target.value)}
          placeholder="Quem vai receber"
          required
        />
      </div>
      <div className="h-min w-full space-y-1">
        <label htmlFor="dateTimeMet">Quando se conheceram?*</label>
        <input
          className="w-full bg-dark border-redHighlight border-4 px-3 py-1 placeholder:text-sm"
          type="datetime-local"
          name="dateTimeMet"
          id="dataMet"
          value={dateMet}
          onChange={(e) => setDateMet(e.target.value)}
          placeholder="dd/mm/aaaa"
        />
      </div>
      <div className="h-min w-full space-y-1">
        <label htmlFor="images">Escolha as fotos (máx 3):*</label>
        <input
          className="w-full file:hidden bg-dark border-redHighlight border-4 px-3 py-1 placeholder:text-sm"
          type="file"
          accept="image/*"
          multiple="3"
          name="images"
          id="images"
          value={images}
          onChange={(e) => setImages(e.target.value)}
          required
        />
      </div>
    </>
  );
}

function formImages(imagesInformation, setImagesInformation) {
     console.log(imagesInformation)
    function changeImagesInformation (id, type, data) {

        setImagesInformation(prev => {
            let arr = prev.map((item) => {
                if(item.id==id) {
                    return {...item, [type]: data}
                }
                return item;
            });

            return [...arr]
        })
    }

    return (
      
        imagesInformation && (
            <>
            <div className="size-72 place-self-center relative border-redHighlight border-[6px]">
             <div className="absolute w-full h-full bg-gradient-to-b to-dark/80 from-transparent"></div>
             <img
               className=" w-full h-full "
               src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMVFhUXFRUVFRUYFRUVFxUVFRUWFhUVFhUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0fHyUtLS0tLS0tLS0tLS0tLS0rLS0tLSstLS0tLS0tLS0tKy0tLS8tKy0tLS8vLS4rLS0rK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EAEAQAAIBAgMEBwUGBQMEAwAAAAECAAMRBCExBRJBUSIyYXGBkaEGE1KSwSMzYnKx0RRCguHwFVPxQ6KywiRjg//EABoBAAIDAQEAAAAAAAAAAAAAAAABAgMEBQb/xAArEQACAgEEAQIFBAMAAAAAAAAAAQIRAwQSITFRBUEyYXGR8BMigdEjoeH/2gAMAwEAAhEDEQA/AKeJxlUjOowHJegPlWwmeQvYc8zL9SpS+CpU/MwQeSXPrKyub3RUQclW58Wa5mFGwuUaTN1UY9tsvmOUc0COs9Ney++fJL/rI1GZs3dm7yT5XkEUHJVLHkoJ/QRgNV93wLv4BB5XJlUkXyUD1/WXa+FdR0t1PzML/KLn0lJrX1J7hYeuckiuXY7VGIsWNuV8vKdLgqe7TUDlec2tQDqqt+Z6R9cvSdFs+5pgsSSef0gwKuLMjs37wSWKkNnfeLIgdUBHAjqY8CwQElGjwAcCSaKmJBznABt43iMQEV5EYxEddJEmTkZ9Eo9mnsnqmac53DbQ92cyd2+dkJ/QTRXb2GOXvkUnQOSn/naRg+AkuTQitI0qqsLqysOxgf0k7SwQwEgYSRIjugIGKSIkYAaN4o0U0GY8Zq4J7dPcp5Ze8YKflF29JR3UVs3aoPwLuqPF8/SKqqjWR909x9mQp/mboA/NYSgvNAYgDqUVHa5NQ+R6I8oqmJqtkajW5DoL8q2EW6g61Ve6mpc/MbLfzjGtTHVpFu2oxP8A2pYepgBTYDQZnsFzIVEYGxFu/L0luri6hFrhR8KAIP8At1lBhnJRZCXYVVQdZiexR+rN9BOh2ZWLU+qABkMyT4znUoNqbKObED019Jv7LqKae6t8tTawJ7OMGJAcVxg8CftF74TFQWDPTXvkAOuWOJECStCywePGtHELAnTg4U6QET6AdY5kbxi0AsV+2HpyoTLdA5SEycOwojVaat1gD3gH9YjHlZa0U/8ARMOTf3KA81G4fNbGTXA7n3daun/6s48qm8JavGMELagS1MUvVxAbsqUkPqm7DJtLEjrJRfud0PqD+sYtGBjti2IOu3COvh6o7VNNx/5X9JIbfofzFk/PTqJ6kW9ZWBiJj3sWw6T+Mp/GvnFAXimyzJR5EcfUX7vcp/kQBvnN29Zl4irdruxZjxYkn1mnUegvGrVPYBSTzN2PkJTr4i5BSmlPkQN5vF2uf0lRcX8NhXYXRGI+LRfmaw9ZI0lHXrIPw0wareeSjzlaoxbOo5b8xJt3X0hsPg3YXSmSPiI3V+ZrCDAhWq09Eps34qjf+i2HqZVq1SdbDuAX9JerUFXrVVv8NO9Q/Nko8zKNZkuN1T/Ub38BpBMhIEq3NlBJ7ATOl2Um6ljk3ETnjimtbesOIHRHpNzYVK1Mm2pvfnG3YkLFiV8N1x3w+KgMP1x3yIzr1ElIpJGJuuyaHEcR1Q20PkYwlay45Oty+5La/A7nKBMlVa0rs8sIk2aCapaV8RjVW1+JsIL+IBvY6QAtGpYS9gWuswc2FmNuM1sBUsANcpCa4JR7L5Mbej3kTK0XslvRi0ZjIiACZog/KIiJRACQeJs5VxmLSkL1GA5DUnsCjMmV0/ia33Se5T/cqDpkfhTh4woi5HYWigv4Fv8AdbyH7xTYYrPKxsypa7BaS/FVYJfuXrHwEpYlKKkfaPVI4Iu4nzPmfKBK3PEk95JhK+AdbFwKYOm+d0ntCnpekrRai7SxxA+ypU0/Fu+8f5nv6AQeIrM5vVdmP4iT6GKm9EDNnqHkv2a/M1z6CTXHMPu1Sn2gbz/O9z5WjGQ/hH3d7csvxNZF8C1r+EqVAB/OGPJb28yIWsxZrsSzdpLH94OtRYDpDd5XIv5awRBkUq20UX5kbxHdfIeU3tig7hYkkk8eEwkZBqCx791fTMzd2NUZlJNgvBQLD9zG+hIlipVp9Yd8t4yLZWBarVVRpfM9nGVzkopyZJK+Dq8DhiwvooAuf2lxEA6o8Tr/AGhHAACLosxvar2noYCmr1t477bqqgBY2zY5kCwE85lzZtVk2Q+yN0YxxxtmyATqY7INCJXxeL3AjAXDHPnugA5duc5yhiMdTx9ff6eEqIHovlZGG6NwWz+K/cDKcencr5ppXz7ltu1S7N3G7P3h0DY+kxrvmGFiMjN7B4kve4zEDjqFwTxmrS62WGax5On/AK/4Qy4O/JyG3qDOg3Qbg3yNjlGoMBTHAnNrc+3nLe1KO8pGdsr5kZcspUpKGvbMAcBcZT0XFWYWuQ1Ml1tci+pmphwAAAdLShg2Fsh/xNDBUwL2vIy6GnyaiC4vJR1OQkgJRasvSIERwszsRtenvFKYatUH8lMb1j+JtF8TC0dn4mpnWqLRX/bpZvbtqkZeAjAnjMdTpkBjdjoigs7dyjOCpYfE1uWHp9tmqnw0T1mts/Z9Kjf3SAE6sbszdrMcyZZjEzPwGx6VI7yqWfjUclnPidPCXzETaV6uKHDOJtIEjdigPeHlHmrcjHtZ4q20Kg6m7TH4BunxbU+cqaNfNmP9RJ+plqrVor1Q9U82+zXwUEk+JkKm0ahAW4p0/hpgJ5tqTIlhepbPYC9RkpD8bdI9yAEyXvsOugqVj2/ZJ5C7H0lLZ2BaoSKSM55KL27zw8ZcqbOWmftqqIfgX7Wp8q5L4mAWQq7SqEFV3aanVaa7l+9tT5zPKcbE8z+5mg2NpLlSpXPx1TvHwQWUespYjEO/WbLkMgO4DKCIMdKKjrvbsUbx89BNzYta6kKtlHEm7E/oJhUsIxzyVfiY2H7mbexqiAFEu1sy1rCN9AguJM3/AGPp2FR+QAE5rEtnOp9kPuHPN/pOfr5OOF0XYVcjZGQv4zk9vbIpYx6TVwW90xZVvZTe11bmOiPKdhaZ2MSjQR69QndQXtzPATj6WThLjs6KljSe9WQxtYuwW1lTTmSQCT2QL0biwJHIXNh4TD9ndpNVDu+TM7OB+FtBN7fHO0U4uE3GXZoxNOEXEubM3d3o66MOIYcIWqs4Wt7R06OLYpU3i1lakASDbK99A07aliVqKGXiPLsMr1eCcIqUvczKalNpGJtKjmVOhmXTJpkKL2Fr5WF9fATe2qmYtylBqCnMi+d88852dLk/Vx49/Kp/y1+MzTTi5OPyKqUyW6Ohz7v8zmnQTd75AQt5dLOoRSXPt9vIlicpW+B6uMzCIrMwF9CEHAAvoCYRNhNVsa9YlP5aSdBbcA51Y+Qh8NvMjL4jvH1l2lTZbC+8vbqv7iZ4Tbyb6dNfb8oucUo7bDYXDpSUJTVVUcAABJWkTlK1XGAZDM+k2tpFRaMr1cWOGZ9JVLs2unLhJKsreTwSUPIzsW18hkIrSRMgQT2CVt2TSR0FopHcjzeYjxargNz710T8N99/lXTxjtUw9lFOmXYG5eseh3CkvDvMq4TZ71W3aaFiTw08ScpoYzZVOlYVq673GnR+1cd7dVTJcFY2I2pWdSrVSKd8lUe6S3LcX63hsBsOtUF0pkJ8bkIg/qb6RUNsLRuMPh0Vh/1Kv21TvA6qnuBlfFYutXYe8d6rcFzPduoMh4CIC9Vw2FpA+8rGs4/koDoX5Gq2vgJlYjF3FkRUHm3ixmoNhOi72IZKC2/6jXc/lpLnMqu1IXCbzH4m6I1+GSTEwSI9Q2ALH/OM3tjKEBW43+IBvbvIymCcQx6IOWlh/abuw8OUUlhYnS+RtBgPihnOr9lF/wDjg/8A2GcxidZ0XshiQUal/MDvDl5zmepRbw8eS/A6kdDOK9smOKqjDq5WnTzcjVnPDuH7cp2IqzzjadOvQquzIc2YhrXBBN73nO9NcJZLvo0ZrSOdOycVQrFg7FRo28er+XnOiweNqOLMxJtALtAv1iAT4SNJmVhukWOp1tO7KEZvc0rMym48RfBc2TsCmlX3r5nXPQHt5zr9n1BvFRpb1nPYeqXsFBM6PZmDKi7a8pg9TyY1hcZPn2Rdp7sW1FyHfKEv7RBy5TOYyPpmNS0yUvLHlk1O0TvJk2gFfOT3p0I4oR+FFbnKXbNPZb2Bh6mNGii59JlUVvqfCWqbgSuV2WxjwFcM3WPhEtMQZxAjDFStk00GMaxMh70RGpI0JhlpgRM0AasbXWPaxpnS3jwVopvMVniOJ2jVqZM9h8I6K91hC4bY9Zl31TdQC++/QQdtzr4SdDba0fuKKb3CpUHvGH5RovrKG0MfVrNvVXao2tib6cl0AjRXRr4YYSn95Ueu+u5SG5Tv21TmR3QtT2iqAbuHVMOmn2Y6ZH4qjXJPlMRCzHePLuAH0j+8Udp9IcAEuXNySzcyST4kwtagijpOC3Jc/MytvMxsBrwA18oc4BlBL2XkCekfCCBjU8cUyQBcs2tcnxOk1NhUyd6o1yeBPrMqjXRMwu83NtAewTV2PUaoS7km2QF8gT2RvoC5XM6P2Uw1qb1OLHdHcNZzdedfsVbYel2rveZnJ9VybcNeWadPG5Gl7sR+FsiORFxJKYrThJVyjY/mYO0/ZehVzC7jfEuXmJQw3sgF1YW7jedWYhL4arNBbVIi8cXzRWwWASmLKPHiZa3YmawvHEqfLt9jKOOpZf5xmFVNrzpcStxac3iVNz3zq+lZPix+OSjOupAFqm8OYBacuUUOvAcZ126KEglG4EYVeAgKtcuejko9YRDKHyy+KpBRzjjOR3hFeKiQ5ESUvCOkIDAB1FtI5aRLSLm+kAOm3opG0ebDEeIvRpJ13LH4V0v3wVTaVhZFVRa2mdu+CTCnVuiPXyjVHproN7tI+kdCZLCUGqGyjzNh3zUGEoU/vahZvgp6dxczGWuzaeAGUvUNmm29VYU15nM+UgwLNTbJAK0kWkvMZse9jKq4ao92INtSzZeV9Yf/AFKhR+5Tfb434eH/ABKFfF1aoLMTujMnqoPpGk7Ew1KpSXNrufhGQ8TNfZeIaoSbbqDIKv1nO4WiGsd1m7+gni2p/pEtHGOhA3ltwRBYDw1J7zJNAjosQ2RndYKnanTH4F/SedPVuvhPSsKOjT/Iv6ThesfDBGzTdssgRma1u2PB1tV75ym6NASICMseSoCNUZQdNsh3CFaV0NsuX6cJRNtOycSTmZNYHfIHOartMLHG7m03elyrO/p/RXmVxC1UAF2F7SrVrF9chyETOTkTlGUTuuVlEYUFRMpNBElLiYUCImMtMcZJhEZA1QMuMAGa/CRFUnICS3Sdchy/cwgUQAitM8TeT3ZIRMRADo40e8abDFR4E7M2sY01Aux8oFqtz0Ab+cFUU3sT0vhHSbxA08ZMiWUxe71Ba3HWO4ZulUfdHAudfyrqfASWHwDDNiKY53BbTmch6w64inTN6a7zcXa5J8Tn5WETpCHw+D4hP6qoIHhTGfzESdaqgN2Y1GGnwjuXqjwEEq1aupy8gO4S9hNmDlvH9JXLIkTjBsp+8qVOrp2ZDzkE2Y1xY3e+QAuSe6bww2igFmOiidf7N+zS0bVHzqEeC34D/P2mLUaxYo+X7L89i2GG2ZOw/ZGo1K9dyHOgFsh25ZmdhQplURTqqhb93GWZGqtx3Zzg582TKnudmyEVHolBVWzUdv0Mjv8ACNRW5vwGQ7+Mzb9zSRPbXLDiPGjzQyAoKrSvmNYWKVyimqZJOjIxeKK3W2fOZTNn2zR2qp3z3CVEAGk7OiwwjiTXb7K5ttkVpE6+UMoAg9+NebKIh96NvQO/4xiL6xgTNUnTzkqSASKLDKsAHBjiRjbsTAmX5RjeICPIpjOkjxRTfyYeTwcYWwtUcID/ACJcX726zekiMWE6NJQPDPlew+t4Sns8nNye0anzl/C4YDqqB2/3lcs3gcYWZtLDs56Zt2nMjuE1sNs+mBkCTz/vp5Qy0VHWz7IhUb+XIdo+kreSy1YqDU8Mozby4f3ka2MUZAD/ADsg2QnrMT5D0EjYaASss2+Dr/ZHZWXv3B3mHRB4Lwy56Hy7Z1E4pPaxwoUUwLZa/wBoze09TUju6R/bOcXJg1E5OTjz9V/Zctq4O2ia9sjaefv7TVyTu2HzfvNz2S2vUrNUWpbJLi1+OXE/5eQlpcsY7muPqG5dG0RfX0FpYQWEZBlJTLihXLJyfsPFFEZaRFFFFIjMnay9K/Z+8zhNba66HvmI9TgJ2dFL/Ev5K32TZ7SIuddIyL4wgE1vgQgsmgjCM1S0ADiPv8pWFzCgGKwCAyTCANQ6AecIoiAVoxaLM6ac4RF5RdD9zo7x5KKb7MXJ5MKKrmczIPWGgg6iMe/tMglMjrG/dMRqUSffHvFYREiMkNG3oRaLHsEt0cKB29sTdAVEU8pNafOHxFRU1mXWxrHTIRibRYxNZV1mz7CYofxJXgyEeonJ1JoezmK93iaR4b4B8cpDLHdjkivd+6z1anJSGhI7ZOeeh1RqY8UizAC5NhzmcNv4Xe3ff097lvCSq+hWacV5FWBFwbjnFIy4GiltYXUd8witjOg2mPsz2WMxCJ0tBL9jXzITXJBZOQeoBBZtNzdkSTVbmw84alTip0gIQCNDSJrCwV4+9Jkh2MH7u8Ig849oAOsRMQEZjlEKjpbxRrxTdSMJ5KRBlgIQIzaCw5y1QwajXM8zMRsKaU3bhYcz+0tUcMBnqeZlsCSA5wABaCxOJCDthMXcLlMWqbmKrItka1QtrBAQoWOBJEQJSCN1II1BBHeM5dKwNSjeMTVnrOCr+8ppVGjKD42lgPPM9he0VfDDcWzpe+6eHceE3K3tw5WyUlUnjfTwnEnockZPb0y9ZE0B9vtpM1qCGw1ft5L9ZxAwljl5zbai9Rt43JY3JMN/pDcxOnp4rDBRKZrc7LfsLtk02NCo3RbqXOh4rc853xrDwnnNLYwPXItyA/eX0pqg3VLdwY/QzJqNH+pLdB1ZdB0qaOs2jjFClSRc8OyYFXE36sr06Xqf8vLCLbSW6fAsUau2EnYqaE5mWBB04QS8iEDSLVANZBSTpJimI0NEgbwoMFuRAyW7gdhTUkgZXJkqF2OXieUW4W4KzQ9GhfM+AhqFFV7Tzh7Ris2LRSe7FNph5PLgslHURywHZMZuEBGLgQRqk6RbkYFfHVGKkCZIRtN0zdKSSraJsTVmOuEc8Ld8l/Bvy9ZrXEgUJichbUZbYV+XrEuzHJzsPGaqi0JeLcw2Iz02ZzY+Ut0MCq8L9phhCgxWOh1p8o5NoNqnKR90TrC7GL3hOQ05wtOnaOqAZWkxEBOSg4gCchmYAF3xJKhOuQkqeHAzOZhrwAZOySEYGPeABBI1FEjvWjrTvmfKADU03jxtLqIBYDKRVRCi0aAcCJnkWMgxhYzpN6KDvFN5io80NXkPGQtHtJATHZsHRZIyJMi1SCAmIzNBi8kotGBJRJ3kLyYXjKmAwWSMUGxJ0iGSL2iUE65CKnRhd2AUJFkxEIjARK8felZqudhD0MPxbPs4RjCU0J7Bz/aWkKrpIRAQEHFQSMha0kDAB96MW5ayvUr8B5x6VS3CAFxKfHjLCytTxAMKtS8AC70bekC0iXse2Awpe2sQudfKDVePGFTSFjo6O0UeKdAxHmMkPpHimL2NYN4FIooIAwkoopIBLCrFFKRkK+hhKWkaKABJKKKJgISFaKKNCB4HrTREUUBodZJYoowHaDr6RRQEBp/SFWKKAEpKjFFACwJBNT3xooMaLSwoiiiJHRRRRToGE//Z"
               alt="1º imagem do usuario"
             />
             <span className="absolute bottom-0 pl-4 pb-2">
               <h5>{imagesInformation[0]?.title}</h5>
               <h6>{imagesInformation[0]?.date}</h6>
             </span>
           </div>

           <div className="h-min w-full space-y-1">
             <label htmlFor="imageTitle1">Título da foto: </label>
             <input
               className="w-full bg-dark border-redHighlight border-4 px-3 py-1 placeholder:text-sm"
               type="text"
               name="imageTitle1"
               id="imageTitle1"
               value={imagesInformation[0]?.title}
               onChange={(e) => changeImagesInformation(0, 'title', e.target.value)}
               placeholder="Qual o evento da foto?"
             />
           </div>

           <div className="h-min w-full space-y-1">
             <label htmlFor="imageDate1">Data que foi tirada: </label>
             <input
               className="w-full bg-dark border-redHighlight border-4 px-3 py-1 placeholder:text-sm"
               type="date"
               name="imageDate1"
               id="imageDate1"
               value={imagesInformation[0]?.date}
               onChange={(e) => changeImagesInformation(0, 'date', e.target.value)}
             />
           </div>

           <div className="h-min w-full space-y-1">
             <label htmlFor="imageDescription1">Descrição*: </label>
             <textarea
               className="w-full h-24 bg-dark border-redHighlight border-4 px-3 py-1 placeholder:text-sm"
               type='text'
               name="imageDescription1"
               id="imageDescription1"
               value={imagesInformation[0]?.description}
               onChange={(e) => changeImagesInformation(0, 'description', e.target.value)}
               placeholder="Fale sobre a pessoa, a foto, o momento, tudo que faz isso ser especial."
               required
             />
           </div>
       </>
        )
      
    )
}


function semiPreview(imageInformation) {
   return (
     
    imageInformation && (
           <>
           <div className="size-72 place-self-center relative border-redHighlight border-[6px]">
            <div className="absolute w-full h-full bg-gradient-to-b to-dark/80 from-transparent"></div>
            <img
              className=" w-full h-full "
              src="data:image/jpeg;base64,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"
              alt="1º imagem do usuario"
            />
            <span className="absolute bottom-0 pl-4 pb-2">
              <h5>{imageInformation?.title}</h5>
              <h6>{imageInformation?.date}</h6>
            </span>
          </div>

            <p className="text-xs">
            {imageInformation?.description}
            </p>
        
      </>
       )
     
   )
}


function FormPreview(title, senderName, receiverName, imagesInformation) {
    return (
        <>
            <div>
                <h3>{title}, {receiverName}</h3>
                <h5 className="text-xs">De: {senderName}</h5>
            </div>
            
            {
                imagesInformation.map((item) => semiPreview(item))
            }

        </>
    )
}