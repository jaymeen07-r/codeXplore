import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/700.css";
import "@fontsource/sora/400.css";
import "@fontsource/sora/500.css";
import "@fontsource/sora/700.css";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";

gsap.registerPlugin(ScrollTrigger);

export default function Build() {
    return (
        <section className="build">
            <div className="build-header">
                <h1 className="build-header-title">
                    Real projects. Real collaboration.<br></br>
                    Real engineering experience.
                </h1>
                <p>
                    Our members don't just learn technologies —
                    they use them to create solutions, experiment with ideas,
                    and build products that make an impact.
                </p>
            </div>

            <div className="build-grid">

                <div className="build-card">
                    <div className="build-number">01</div>
                    <h2>Web Applications</h2>
                    <p>
                        Transform ideas into production-ready digital products. From frontend interfaces to backend architecture, members gain hands-on experience building scalable applications while learning modern development practices used across the software industry.
                    </p>
                </div>


                <div className="build-card">
                    <div className="build-number">02</div>
                    <h2>IoT & Hardware</h2>
                    <p>
                        Engineer intelligent systems that connect software with the physical world. From embedded programming to robotics and automation, members develop practical solutions while gaining experience with hardware integration and real-world engineering challenges.                    </p>
                </div>

                <div className="build-card">
                    <div className="build-number">03</div>
                    <h2>Open Source</h2>
                    <p>
                        Contribute to collaborative software projects that extend beyond the classroom. Members learn professional development workflows, participate in code reviews, and work alongside global communities while building a strong public<br></br> portfolio.</p>
                </div>

            </div>
        </section>
    );
}