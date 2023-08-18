'use client'
import Image from "next/image"
// import BioBitesLogo from '../../../public/assets/biobitesLogo.png'


export default function Nav() {
    return (
        <div className=" flex justify-between bg-gradient-to-t from-green-800 to-green-500 text-white border-2 p-3 text-xs h-24">
            <div className="block">
                <h4 className="font-bold font-color">Get in touch </h4>
                <p>info@biobites.com </p>
                <p>Karl-Heine-Str.,</p>
                <p>04229 Leipzig, </p>
                <p>Germany</p>
            </div>
            <div className="flex">
                <p>icons</p>
            </div>
            {/* insta
            facebook
            pin
            twitter X */}
            <div className="block">
                <p>© BioBites 2023</p>
                <p>Conditions</p>
                <p>Privacy</p>
                <p>Imprint</p>
            </div>
        </div>
    )
}
