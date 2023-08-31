'use client';

import React from "react";
import { useState } from "react"
import Link from 'next/link'
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
                                <Link href="/">Home</Link>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase hover:text-gray-400">
                                <Link href="/howitworks">How it works</Link>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase hover:text-gray-400">
                                <Link href="/meals">Meals</Link>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <Link href="/cart">Cart</Link>
                            </li>
                            {/* <li className="border-b border-gray-400 my-8 uppercase hover:text-gray-400">
                                <Link href="/sustainability">Sustainability</Link>
                            </li> */}
                        </ul>
                        {/* <SocialIcon url="https://www.instagram.com/needles_craft_kultur_leipzig/" target="blank" /> */}
                    </div>
                </section>

                <ul className="DESKTOP-MENU hidden space-x-8 lg:flex text-green-700">
                    <li>
                        <Link href="/" className="hover:text-gray-400">Home</Link>
                    </li>
                    <li>
                        <Link href="/howitworks" className="hover:text-gray-400">How it works</Link>
                    </li>
                    <li>
                        <Link href="/meals" className="hover:text-gray-400">Meals</Link>
                    </li>
                    <li>
                        <Link href="/cart" className="hover:text-gray-400 mr-2">Cart</Link>
                    </li>
                    {/* <li>
                        <Link href="/sustainability" className="hover:text-gray-400 mr-2">Sustainability</Link>
                    </li> */}
                </ul>
            </nav>
            <style>{`
                .hideMenuNav {
                display: none;
                }
                .showMenuNav {
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                    position: absolute;
                    flex-direction: column;
                    width: 100%;
                    height: 100vh;
                    top: 0;
                    left: 0;
                    z-index: 10;
                    background: rgb(53,212,48);
                    background: linear-gradient(175deg, rgba(53,212,48,1) 0%, rgba(6,159,19,1) 53%, rgba(32,106,36,1) 100%);
                    color: white
                }
            `}</style>
        </div>
    )
}