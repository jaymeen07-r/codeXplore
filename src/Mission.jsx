import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Mission() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(titleRef.current, {
                y: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
            });

            gsap.from(textRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                delay: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
            });

            gsap.to(".mission-bg", {
                scale: 1.15,
                rotate: 5,
                duration: 3,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="mission">

            <div className="mission-bg"></div>

            <div className="mission-content">

                <h1 ref={titleRef} className="mission-title">
                    <em>Learning</em> starts with tutorials.
                    <br />
                    <em className="em2">Engineering</em> starts with building.
                </h1>

                <p ref={textRef} className="mission-desc">
                    We create opportunities for students to transform knowledge into
                    experience through collaboration, experimentation, and real projects.
                </p>

            </div>

        </section>
    );
}