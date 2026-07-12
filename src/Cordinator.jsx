import React from "react";
import ANKIT_VAGHELA from "./assets/img/faculty_coordinators/Ankit-Vaghela.jpg";

export default function Cordinator() {
    return (
        <section className="cordinator">
            <div className="cordinator-content">
                <span className="cordinator-tag">
                    Cordinators
                </span>
                <h1 className="cordinator-title">
                    Faculty mentors driving growth, innovation, and technical excellence
                </h1>
                <div className="cordinator-list">
                    <div className="cordinator-one">
                        <div className="cordinator-member-img">
                            <img src={ANKIT_VAGHELA} alt="Prof. Ankit M. Vaghela" />
                        </div>
                        <div className="cordinator-member-info">
                            <h1 className="cordinator-member-name">PROF. ANKIT M. VAGHELA</h1>
                            <p className="cordinator-member-role">FACULTY COORDINATOR</p>
                            <p className="cordinator-member-des">
                                Provides strategic leadership and guidance for the coding club,
                                supporting its vision, activities, and long-term development.
                                The Faculty Coordinator mentors students, encourages innovation,
                                promotes technical excellence, and helps create opportunities
                                for learning, collaboration, and professional growth.
                            </p>
                        </div>
                    </div>

                    <div className="cordinator-two">
                        <div className="cordinator-member-img">
                            <img src="https://www.shutterstock.com/image-photo/smiling-young-indian-business-man-260nw-2187607303.jpg" alt="Prof. RIDDHISH M. DEVRAJ" />
                        </div>
                        <div className="cordinator-member-info">
                            <h1 className="cordinator-member-name">PROF. RIDDHISH M. DEVRAJ</h1>
                            <p className="cordinator-member-role">FACULTY CO-COORDINATOR</p>
                            <p className="cordinator-member-des">
                                Works closely with the Faculty Coordinator to support club
                                operations, student initiatives, and technical programs.
                                The Faculty Co-Coordinator helps foster an engaging learning
                                environment, encourages participation in projects and events,
                                and assists students in developing practical skills and
                                industry-relevant experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}