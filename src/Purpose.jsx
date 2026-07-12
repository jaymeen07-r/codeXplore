import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Purpose1 from "./assets/img/purpose/1.png";
import Purpose2 from "./assets/img/purpose/2.png";
import Purpose3 from "./assets/img/purpose/3.png";
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

export default function Purpose() {
    return (
        <section className="purpose">
            <div className="purpose-content">
                <h1 className="purpose-title">Building the next generation of engineers through collaboration, innovation, and real-world development. From first commits to ambitious projects, our club transforms curiosity into practical experience.</h1>
                <div className="purpose-detail">
                    <div className="purpose-detail-1">
                        <img src={Purpose1} alt="img1" />
                        <h1>From Curious to Capable</h1>
                        <p>Explore new technologies, solve challenges, and learn beyond the classroom through practical experience.</p>
                    </div>
                    <div className="purpose-detail-2">
                        <img src={Purpose2} alt="img2" />
                        <h1>Learn by Building Together</h1>
                        <p>Collaborate with like-minded students, contribute to projects, and grow through teamwork.</p>
                    </div>
                    <div className="purpose-detail-3">
                        <img src={Purpose3} alt="img3" />
                        <h1>Turn Skills Into Opportunities</h1>
                        <p>Build a portfolio, gain confidence, and prepare for hackathons, internships, and future careers.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}