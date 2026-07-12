import React from "react";

export default function Member() {

    const members = [
        {
            name: "PATEL DEVANG SHAILASHBHAI",
            role: "STUDENT COORDINATOR",
            rank: 944
        },
        {
            name: "SALINA RAHIMBHAI HIRANI",
            role: "STUDENT CO-COORDINATOR",
            rank: 899
        },
        {
            name: "SHAH TIRTH PRASHANTBHAI",
            role: "STUDENT REPRESENTATIVE",
            rank: 966
        },
        {
            name: "MAVALANKAR DEV DILIPBHAI",
            role: "STUDENT REPRESENTATIVE",
            rank: 945
        },
        {
            name: "AKSHAT MINESHKUMAR MODI",
            role: "STUDENT REPRESENTATIVE",
            rank: 911
        },
        {
            name: "PATEL HENIL JIGNESHKUMAR",
            role: "STUDENT REPRESENTATIVE",
            rank: 100
        },
        {
            name: "VEKHRIYA JEEL NILESHBHAI",
            role: "STUDENT REPRESENTATIVE",
            rank: 579
        },
        {
            name: "RATHOD MONIK RAJESHBHAI",
            role: "STUDENT REPRESENTATIVE",
            rank: 335
        },
        {
            name: "JAYMEEN NARENDRABHAI VAGHELA",
            role: "STUDENT REPRESENTATIVE",
            rank: 998
        },
        {
            name: "HIRPARA DRIJALI ALPESHBHAI",
            role: "STUDENT REPRESENTATIVE",
            rank: 449
        },
        {
            name: "TANISHA PRAMODKUMAR PANDAYA",
            role: "STUDENT REPRESENTATIVE",
            rank: 875
        },
        {
            name: "GHODASARA KHUSHI",
            role: "COMMITTEE MEMBER",
            rank: 332
        },
        {
            name: "PATEL EKTA LALABHAI",
            role: "COMMITTEE MEMBER",
            rank: 308
        },
        {
            name: "RAJ DILIPBHAI SANGANI",
            role: "COMMITTEE MEMBER",
            rank: 890
        },
        {
            name: "MANTHAN RUDANI",
            role: "COMMITTEE MEMBER",
            rank: 307
        },
        {
            name: "NANDAN A. DANIDHARIYA",
            role: "COMMITTEE MEMBER",
            rank: 733
        },
        {
            name: "HUN DIVYESH",
            role: "COMMITTEE MEMBER",
            rank: 632
        },
        {
            name: "PATEL KRISH A.",
            role: "COMMITTEE MEMBER",
            rank: 200
        },
        {
            name: "LOCHAN SINGH",
            role: "COMMITTEE MEMBER",
            rank: 100
        }
    ];

    return (
        <section className="member">
            <div className="member-content">
                <span className="member-tag">
                    Members
                </span>
                <h1 className="member-title">
                    The students who drive initiatives, organize events,
                    and build a collaborative culture of innovation and learning.
                </h1>
                <div className="member-list">
                    <div className="member-left">

                        <div className="club-stats">
                            <span className="stats-tag">CLUB OVERVIEW</span>

                            <div className="stat-card">
                                <h1>20+</h1>
                                <p>Total Members</p>
                            </div>

                            <div className="stat-card">
                                <h1>2</h1>
                                <p>Faculty Coordinators</p>
                            </div>

                            <div className="stat-card">
                                <h1>2</h1>
                                <p>Student Coordinators</p>
                            </div>

                            <div className="stat-card">
                                <h1>17+</h1>
                                <p>Committee & Members</p>
                            </div>

                            <div className="distribution">
                                <h3>Member Distribution</h3>

                                <div className="distribution-item">
                                    <span>Faculty Coordinators</span>
                                    <span>2</span>
                                </div>

                                <div className="distribution-item">
                                    <span>Student Coordinators</span>
                                    <span>2</span>
                                </div>

                                <div className="distribution-item">
                                    <span>Student Representatives</span>
                                    <span>9</span>
                                </div>

                                <div className="distribution-item">
                                    <span>Committee Members</span>
                                    <span>8</span>
                                </div>
                            </div>

                            <div className="academic-year">
                                <h3>Academic Year</h3>
                                <p>2025 - 2026</p>
                            </div>

                        </div>

                    </div>

                    <div className="member-right">

                        <div className="club_member_index">
                            <h1 className="club_member_title_index">/NAME</h1>
                            <p className="club_member_role_index">/ROLE</p>
                            <p className="club_member_rank_index">/IMPACT</p>
                        </div>

                        {members
                            .sort((a, b) => b.rank - a.rank)
                            .map((member, index) => (
                                <div className="club_member" key={index}>
                                    <h1 className="club_member_title">
                                        {member.name}
                                    </h1>

                                    <p className="club_member_role">
                                        {member.role}
                                    </p>

                                    <p className="club_member_rank">
                                        {member.rank}
                                    </p>
                                </div>
                            ))}

                    </div>
                </div>
            </div>
        </section >
    );
}