import React from "react";
import WhySJ1 from "./assets/img/why_student_join/join2.png";

export default function WhyStudentsJoin() {


    return (
        <section className="join-section">
            <div className="join-header">
                <img src={WhySJ1} alt="img2" />
                <div className="join-sub-header">
                    <h1 className="join-title">
                        More than a club.
                        <br />
                        A launchpad for your journey.
                    </h1>
                    <p className="join-subtitle">Gain hands-on experience, build meaningful projects, and connect with a community that helps you grow beyond the classroom.</p>
                </div>
            </div>
        </section>
    );
}   