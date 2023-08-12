'use client'
import Image from "next/image"
// import BioBitesLogo from '../../../public/assets/biobitesLogo.png'


export default function Nav() {
    return (
        <div className="flex border-green-600 border-2 pt-3 mt-5">
            <div className="block">
            <h4>Get in touch </h4>
            <p>info@biobites.com
                +49 464339920
                Address
                Prinzenstraße 89, 10969 Berlin, Deutschland
            </p>

            </div>
            <div className="flex">
                <p>icons</p></div>
            {/* insta
            facebook
            pin
            twitter X */}
            <div className="block">
            <p>© BioBites 2022</p>
            <p>Conditions</p>
            <p>Privacy</p>
            <p>Imprint</p>
            </div>
        </div>
    )
}
