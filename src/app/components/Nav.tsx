'use client'
import Image from "next/image"
import BioBitesLogo from '../../../public/assets/biobitesLogo.png'
import Burger from "./Burger"

export default function Nav() {
  return (
    <div className="flex ">
      <Image src={BioBitesLogo} alt="biobites logo"></Image>
      <h1 className="text-green-600">Biobites</h1>
      <Burger />

    </div>
  )
}


