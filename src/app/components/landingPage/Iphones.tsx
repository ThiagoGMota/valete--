"use client"

import Image from "next/image"

const Iphones = ({img}:{img:string}) => {
  return (
    <div className="relative inline-block">
      <div className="relative">
        {/* Carcaça do iPhone */}
        <Image src={"/carcacaIphone.svg"} alt="Carcaça de iPhone" width={210} height={502} />

        {/* Tela do iPhone com bordas arredondadas */}
        <Image
          src={img}
          alt="Tela de iPhone"
          width={190}
          height={480}
          className="absolute h-[400px] w-[190px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[30px]"
          style={{
            objectFit: "cover",
            // Ajuste fino para posicionamento, se necessário
            marginTop: "0px",
          }}
        />
      </div>
    </div>
  )
}

export default Iphones

