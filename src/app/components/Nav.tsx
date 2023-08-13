'use client'
import Image from "next/image"
import BioBitesLogo from '../../../public/assets/biobitesLogo.png'
import Burger from "./Burger"

export default function Nav() {
  return (
    <div className="flex justify-between items-center p-1">
      <a href="/">
        <Image src={BioBitesLogo} alt="biobites logo"></Image>
      </a>
      <div className="text-green-600 text-2xl font-extrabold">Biobites</div>
      <Burger />
    </div>
  )
}


