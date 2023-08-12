import React from "react";
import { useState } from "react";
// import { SocialIcon } from "react-social-icons";

export default function Burger() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <div>
            <nav>
                <section className="MOBILE-MENU flex lg:hidden mr-4">
                    <div
                        className="HAMBURGER-ICON space-y-2"
                        onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    </div>

                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div
                            className="absolute top-0 right-0 px-8 py-8"
                            onClick={() => setIsNavOpen(false)}
                        >
                            <svg
                                className="h-8 w-8 text-gray-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>
                        <ul className="flex flex-col items-center justify-between min-h-[250px] ">
                            <li className="border-b border-gray-400 my-8 uppercase hover:text-gray-400">
                                <a href="/">Home</a>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase hover:text-gray-400">
                                <a href="/howitworks">How it works</a>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase hover:text-gray-400">
                                <a href="/meals">Meals</a>
                            </li>
                            {/* <li className="border-b border-gray-400 my-8 uppercase">
                                <a href="/blog">Blog</a>
                            </li> */}
                            <li className="border-b border-gray-400 my-8 uppercase hover:text-gray-400">
                                <a href="/sustainability">Sustainability</a>
                            </li>
                        </ul>
                        {/* <SocialIcon url="https://www.instagram.com/needles_craft_kultur_leipzig/" target="blank" /> */}
                    </div>
                </section>

                <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
                    <li>
                        <a href="/" className="hover:text-gray-400">Home</a>
                    </li>
                    <li>
                        <a href="/howitworks" className="hover:text-gray-400">How it works</a>
                    </li>
                    <li>
                        <a href="/meals" className="hover:text-gray-400">Meals</a>
                    </li>
                    {/* <li>
                        <a href="/blog">Blog</a>
                    </li> */}
                    <li>
                        <a href="/sustainability" className="hover:text-gray-400">Sustainability</a>
                    </li>
                </ul>
            </nav>
            <style>{`
                .hideMenuNav {
                display: none;
                }
                .showMenuNav {
                display: block;
                position: absolute;
                width: 100%;
                height: 100vh;
                top: 0;
                left: 0;
                background: purple;
                z-index: 10;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
                }
            `}</style>
        </div>
    )
}