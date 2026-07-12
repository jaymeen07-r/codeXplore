import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ICON from "./assets/img/icon_designs/icon.png";
import VSITR from "./assets/img/icon_designs/2.png";
import HERO from "./assets/img/icon_designs/hero.png";
import KSV from "./assets/img/icon_designs/1.png";
import Team from './Team'

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const navRef = useRef(null);

    const [selectedCard, setSelectedCard] = useState(null);

    useEffect(() => {
        gsap.set(navRef.current, {
            y: -100,
            opacity: 0
        });

        ScrollTrigger.create({
            trigger: ".intro",
            start: "top top",

            onEnter: () => {
                gsap.to(navRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "power3.out"
                });
            },

            onLeaveBack: () => {
                gsap.to(navRef.current, {
                    y: -100,
                    opacity: 0,
                    duration: 0.4,
                    ease: "power3.in"
                });
            }
        });

    }, []);

    return (
        <>
            <nav ref={navRef}>
                <div className="logo">
                    <img src={ICON} alt="" />
                </div>

                <div className="nav-links">
                    <p>Home</p>
                    <p>Projects</p>
                    <p>Events</p>
                    <p>Blog</p>
                    <p>
                        <a href="/team">Team</a>
                    </p>
                </div>

                <div className="nav-btns">
                    <div className="nav-btn">
                        <h1>Join</h1>
                    </div>
                    <div className="nav-btn">
                        <h1>Chat With Vasu</h1>
                    </div>
                </div>

                <div className="nav-ref">
                    <img src={VSITR} alt="" />
                    <img src={KSV} alt="" />
                </div>
            </nav>
        </>
    );
}