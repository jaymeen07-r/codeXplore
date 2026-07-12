import React from "react";
import {
    FaEnvelope,
    FaLinkedin,
    FaGithub
} from "react-icons/fa";

export default function Contact() {
    return (
        <section className="contact">

            <div className="contact-header">
                <span>CONTACT US</span>

                <h1>
                    Let's build, learn, and innovate together.
                </h1>

                <p>
                    Have questions about membership, events,
                    collaborations, or projects? We'd love to hear from you.
                </p>
            </div>

            <div className="contact-grid">

                <div className="contact-card">
                    <h3>Faculty Coordinator</h3>
                    <p>PROF. ANKIT M. VAGHELA</p>
                </div>

                <div className="contact-card">
                    <h3>Faculty Co-Coordinator</h3>
                    <p>PROF. RIDDHISH M. DEVRAJ</p>
                </div>

                <div className="contact-card">
                    <h3>Student Coordinator</h3>
                    <p>PATEL DEVANG SHAILASHBHAI</p>
                </div>

                <div className="contact-card">
                    <h3>Student Co-Coordinator</h3>
                    <p>Vekariya Jeel Nileshbhai</p>
                </div>

            </div>

            <div className="contact-social">

                <a className="email"
                    href="mailto:codexplore@college.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaEnvelope />
                    <span>Email</span>
                </a>

                <a className="linkedin"
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                    <span>LinkedIn</span>
                </a>

                <a className="github"
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                    <span>GitHub</span>
                </a>

            </div>

        </section>
    );
}