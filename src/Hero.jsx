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
    const imageRef = useRef(null);

    const [selectedCard, setSelectedCard] = useState(null); ''


    // useEffect(() => {
    //     if (selectedCard) {
    //         gsap.fromTo(
    //             ".drawer",
    //             {
    //                 x: "100%",
    //             },
    //             {
    //                 x: "0%",
    //                 duration: 0.8,
    //                 ease: "power4.out",
    //             }
    //         );

    //         gsap.fromTo(
    //             ".drawer-overlay",
    //             {
    //                 opacity: 0,
    //             },
    //             {
    //                 opacity: 1,
    //                 duration: 0.4,
    //             }
    //         );

    //         gsap.from(".drawer-avatar", {
    //             scale: 1.15,
    //             opacity: 0,
    //             duration: 1
    //         });

    //         gsap.from(".drawer-info > *", {
    //             y: 30,
    //             opacity: 0,
    //             stagger: 0.1,
    //             duration: 0.8
    //         });
    //     }
    // }, [selectedCard]);
 
    // useEffect(() => {
    //     const ctx = gsap.context(() => {

    //         gsap.from(titleRef.current, {
    //             y: 100,
    //             opacity: 0,
    //             duration: 1.2,
    //             ease: "power4.out",
    //         });

    //         gsap.from(subtitleRef.current, {
    //             y: 100,
    //             opacity: 0,
    //             duration: 1.2,
    //             ease: "power4.out",
    //         });


    //         gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: ".hero",
    //                 start: "top top",
    //                 end: "+=600",
    //                 pin: true,
    //                 scrub: true,
    //                 anticipatePin: 1,
    //             }
    //         })
    //             .to(imageRef.current, {
    //                 z: 400,
    //                 zIndex: 100,
    //                 opacity: 1,
    //                 ease: "power2.out",
    //                 duration: 2
    //             })

    //             .to(titleRef.current, {
    //                 opacity: 0,
    //                 ease: "power2.out",
    //                 duration: 1
    //             }, "-=1.5")

    //             .to(subtitleRef.current, {
    //                 opacity: 0,
    //                 ease: "power2.out",
    //                 duration: 1
    //             }, "-=1.5");

    //     }, heroRef);

    //     return () => ctx.revert();
    // }, []);

    return (
        <>
            {/* Drawer */}

            {/* {selectedCard && (
                <>
                    <div
                        className="drawer-overlay"
                        onClick={() => setSelectedCard(null)}
                    />

                    <div className="drawer">

                        <div className="drawer-left">

                            <img
                                src={selectedCard.image}
                                alt={selectedCard.name}
                                className="drawer-avatar"
                            />

                            <div className="drawer-bottom-info">

                                <div className="member-stats">

                                    <div>
                                        <h3>12+</h3>
                                        <p>Projects</p>
                                    </div>

                                    <div>
                                        <h3>3</h3>
                                        <p>Hackathons</p>
                                    </div>

                                    <div>
                                        <h3>2</h3>
                                        <p>Years</p>
                                    </div>

                                </div>


                                <div className="drawer-section">

                                    <h2>Profiles</h2>

                                    <div className="profile-links">

                                        <a href={`https://${selectedCard.linkedin}`}>
                                            Website ↗
                                        </a>

                                        <a href={`https://${selectedCard.github}`}>
                                            GitHub ↗
                                        </a>

                                        <a href={`https://${selectedCard.linkedin}`}>
                                            LinkedIn ↗
                                        </a>

                                        <a href={`https://${selectedCard.linkedin}`}>
                                            Instagram ↗
                                        </a>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="drawer-right">
                            <button
                                className="drawer-close"
                                onClick={() => setSelectedCard(null)}
                            >
                                ✕
                            </button>

                            <div className="drawer-header">

                                <div className="drawer-info">

                                    <span className="drawer-role">
                                        {selectedCard.role}
                                    </span>

                                    <h1>
                                        {selectedCard.name}
                                    </h1>

                                    <p>
                                        {selectedCard.bio}
                                    </p>

                                </div>

                            </div>

                            <div className="drawer-section">

                                <h2>Technical Skills</h2>

                                <div className="skill-list">

                                    {selectedCard.skills.map((skill) => (
                                        <span key={skill}>
                                            {skill}
                                        </span>
                                    ))}

                                </div>

                            </div>

                            <div className="drawer-section">

                                <h2>Featured Projects</h2>

                                <div className="project-cards">

                                    <div className="project-card">
                                        <h3>AI Resume Analyzer</h3>
                                        <p>Built using React + Gemini API</p>
                                    </div>

                                    <div className="project-card">
                                        <h3>Club Management Portal</h3>
                                        <p>Full-stack MERN application</p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </>
            )} */}

            <main>

                <section
                    ref={heroRef}
                    className="hero"
                >


                    <div className="hero-initiatives">

                        <div className="initiative-card initiative-1">
                            <span>01</span>
                            <h3>AI Projects</h3>
                            <p>Build intelligent systems and practical AI solutions.</p>
                        </div>

                        <div className="initiative-card initiative-2">
                            <span>02</span>
                            <h3>Hackathons</h3>
                            <p>Compete, collaborate, and solve real-world challenges.</p>
                        </div>

                        <div className="initiative-card initiative-3">
                            <span>03</span>
                            <h3>Web Development</h3>
                            <p>Design and develop modern applications and platforms.</p>
                        </div>

                        {/* <div className="initiative-card initiative-4">
                            <span>04</span>
                            <h3>IoT & Embedded</h3>
                            <p>Bridge hardware and software through innovation.</p>
                        </div> */}

                        <div className="initiative-card initiative-4">
                            <span>04</span>
                            <h3>Open Source</h3>
                            <p>Contribute, collaborate, and learn in public.</p>
                        </div>

                    </div>

                    <div className="heroimg">
                        <img src={KSV} alt="" className="heroimg2" />
                        <img src={VSITR} alt="" className="heroimg3" />
                    </div>

                    <div className="hero-content">

                        <img src={ICON} alt="" className="hero-img" />
                        {/* ref={imageRef} */}
                        <h1
                            ref={titleRef}
                            className="hero-title"
                        >
                            A student <em className="em-1">Coding Club</em> empowering
                            <br />
                            students to transform ideas into <em className="em-2">real-world projects.</em>
                        </h1>

                        <p className="hero-subtitle" ref={subtitleRef}>
                            A platform for students to <em className="em-2">learn, innovate, and create </em><br></br>
                            through workshops, projects, and collaborative<br></br>
                            <em className="em-1"> learning experiences.</em>
                        </p>

                    </div>

                </section >

            </main >
        </>
    );
}